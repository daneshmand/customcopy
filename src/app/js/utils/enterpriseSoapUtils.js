/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 8/09/13
 * Time: 9:40 PM
 * To change this template use File | Settings | File Templates.
 */
function addVariationToEnterpriseViaRest(prop){


    if (Local_TEST_DEBUG || Local_TEST_DEBUG_variation){
        var assetId = src_test_elvis_id;
        var variationAssetId = dest_test_elvis_id;
    }else{
        var assetId = prop.getSrcAssetId();
        var variationAssetId = prop.getDestAssetId();
    }
//    alert("addVariationToEnterpriseViaRest, assetId:"+assetId + "| variationAssetId:" + variationAssetId);

    function doSoapCall(endPointUrl, soapXML ,successHandler/*,successHandler*/) {
        $.ajax({
            url: endPointUrl,
            data: soapXML,
            type: "POST",
            dataType: "xml",
            success:successHandler ,//successHandler,
            error: function(jqXHR, textStatus, errorThrown) {
//                alert("An error occurred: " + textStatus + ":\n" + errorThrown);
            }
        });
    }

    function doSoapTest(endPointUrl, soapXML /*,successHandler*/) {
//        alert("doSoapTest, endPointUrl:"+ endPointUrl);
//        alert("doSoapTest, soapXML:"+ soapXML);

        $.ajax({
            url: endPointUrl,
            data: soapXML,
            type: "POST",
            dataType: "xml",
            beforeSend:function(){
//                alert("beforeSend is start");
            }  ,
            success:function(){
//                alert("success is start");
//                alert ($.parseXML(jqXHR.responseText));
            }  ,//successHandler,
            error: function(jqXHR, textStatus, errorThrown) {
//                alert("error is start");
//                alert("An error occurred: " + textStatus + ":\n" + errorThrown);
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

//        alert("login, logOnReq:"+logOnReq);
//        alert("login, enterpriseEndpoint:"+enterpriseEndpoint);

//        doSoapTest(enterpriseEndpoint, logOnReq);
        // Login to Enterprise
        doSoapCall(enterpriseEndpoint, logOnReq, function(data, textStatus, jqXHR) {
            var xmlDoc = $.parseXML(jqXHR.responseText);
            $xml = $(xmlDoc);
            var ticket = $xml.find("Ticket").text();

//            alert("login, ticket:"+ticket);

            // Retrieve the dossiers
            //getDossiers(ticket);
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

//        alert("login, getObjectsReq:"+getObjectsReq);


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
//        alert("addAssetToDossier, enterpriseId:"+enterpriseId);

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

//        alert("addAssetToDossier, createObjectRelationsReq:"+createObjectRelationsReq);

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