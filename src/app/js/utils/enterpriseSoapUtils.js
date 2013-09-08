/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 8/09/13
 * Time: 9:40 PM
 * To change this template use File | Settings | File Templates.
 */
function addVariationToEnterpriseViaRest(prop){

    var assetId = prop.srcAssetId;
    var variationAssetId = prop.destAssetId;

    function doSoapCall(endPointUrl, soapXML, successHandler) {
        $.ajax({
            url: endPointUrl,
            data: soapXML,
            type: "POST",
            dataType: "xml",
            success:  successHandler,
            error: function(jqXHR, textStatus, errorThrown) {
                alert("An error occurred: " + textStatus + ":\n" + errorThrown);
            }
        });
    }

    function login() {
        var logOnReq = '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:SmartConnection">\n'+
            '   <soap:Header/>\n'+
            '   <soap:Body>\n'+
            '      <urn:LogOn>\n'+
            '         <User>'+USERNAME+'</User>\n'+
            '         <Password>'+PASSWORD+'</Password>\n'+
            '         <Ticket></Ticket>\n'+
            '         <Server></Server>\n'+
            '         <ClientName></ClientName>\n'+
            '         <Domain></Domain>\n'+
            '         <ClientAppName></ClientAppName>\n'+
            '         <ClientAppVersion></ClientAppVersion>\n'+
            '         <ClientAppSerial></ClientAppSerial>\n'+
            '         <ClientAppProductKey></ClientAppProductKey>\n'+
            '         <RequestTicket></RequestTicket>\n'+
            '      </urn:LogOn>\n'+
            '   </soap:Body>\n'+
            '</soap:Envelope>';

        // Login to Enterprise
        doSoapCall(enterpriseEndpoint, logOnReq, function(data, textStatus, jqXHR) {
            var xmlDoc = $.parseXML(jqXHR.responseText);
            $xml = $(xmlDoc);
            var ticket = $xml.find("Ticket").text();

            // Retrieve the dossiers
            getDossiers(ticket);
        });
    }

    function getDossiers(ticket) {

        var enterpriseId = '_ELVIS_' + assetId;

        var getObjectsReq = '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:SmartConnection" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">\n'+
            '	<soap:Header/>\n'+
            '	<soap:Body>\n'+
            '		<urn:GetObjects>\n'+
            '			<Ticket>' + ticket + '</Ticket>\n'+
            '			<IDs>\n'+
            '				<String>' + enterpriseId + '</String>\n'+
            '			</IDs>\n'+
            '		</urn:GetObjects>\n'+
            '	</soap:Body>\n'+
            '</soap:Envelope>';

        doSoapCall(enterpriseEndpoint, getObjectsReq, function(data, textStatus, jqXHR) {
            var xmlDoc = $.parseXML(jqXHR.responseText);
            $xml = $(xmlDoc);

            // Loop through relations and search for dossiers
            $xml.find('Relation').each(function() {

                var type = $(this).children('Type').text();
                var parentInfoType = $(this).find('ParentInfo > Type').text();

                if (type === 'Contained' && parentInfoType === 'Dossier') {

                    // Dossier found, add new asset (variation) to the dossier
                    var dossierId = $(this).find('ParentInfo > ID').text();
                    addAssetToDossier(ticket, dossierId);
                }
            });
        });
    }

    function addAssetToDossier(ticket, dossierId) {

        var enterpriseId = '_ELVIS_' + variationAssetId;

        var createObjectRelationsReq = '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:SmartConnection" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">\n'+
            '	<soap:Header/>\n'+
            '	<soap:Body>\n'+
            '		<urn:CreateObjectRelations>\n'+
            '			<Ticket>' + ticket + '</Ticket>\n'+
            '			<Relations>\n'+
            '				<Relation>\n'+
            '					<Parent>' + dossierId + '</Parent>\n'+
            '					<Child>' + enterpriseId + '</Child>\n'+
            '					<Type>Contained</Type>\n'+
            '					<Placements />\n'+
            '					<ParentVersion />\n'+
            '					<ChildVersion />\n'+
            '					<Geometry />\n'+
            '					<Rating />\n'+
            '					<Targets />\n'+
            '				</Relation>\n'+
            '			</Relations>\n'+
            '		</urn:CreateObjectRelations>\n'+
            '	</soap:Body>\n'+
            '</soap:Envelope>';

        doSoapCall(enterpriseEndpoint, createObjectRelationsReq, function(data, textStatus, jqXHR) {
            var xmlDoc = $.parseXML(jqXHR.responseText);
            $xml = $(xmlDoc);

            var parentId = $xml.find('Relation > Parent').text();
            var childId = $xml.find('Relation > Child').text();

            if (!parentId || !childId) {
                alert('Failed to create relation');
            }
            else {
                alert('Created relation between dossier "' + parentId + '" and asset "' + childId + '"');
            }
        });
    }

    login();
}