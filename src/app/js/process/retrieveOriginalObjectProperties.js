
function retrieveOriginalObjectProperties(){

    setRetrieveOriginalObjectPropertiesStartProperties(Properties) ;

    return Properties;
}

function setRetrieveOriginalObjectPropertiesStartProperties(prop){

    prop.step =  "retrieveOriginalObjectProperties";
    prop.title = "Copy | Elvis";
//    prop.title_src = "Source";
//    prop.title_dest = "Destination";
    prop.check_boxes = '\
<br><input class="check_box_dossier" type="checkbox" value=TRUE name="check_box_dossier"> Select same dossier to copy new asset\
<br><input class="check_box_collection" type="checkbox" value=FALSE name="check_box_collection"> Update collections\
<br><input class="rawCheck_box_metadata" type="checkbox" value=TRUE name="rawCheck_box_metadata"> Update Metadata\
';
    prop.title_ldbar = "Copy | Elvis";

    prop.nav_buttons = "";
    prop.dest_path = "<span style=\'color: #F00\'>No Path has been defined yet</span>";
    prop.src_path = "<span style=\'color: #F00\'>No Path has been defined yet</span>";

    setView(setLdbarHtmlStarted(prop));
    runRetrieveOriginalObjectPropertiesProcess(prop);
}

function runRetrieveOriginalObjectPropertiesProcess(prop){
    //todo clean runRetrieveOriginalObjectPropertiesProcess

    var selectedHits = ElvisPlugin.resolveElvisContext().activeTab.assetSelection;
        if (selectedHits.length == 0) {
            //alert("Selection is empty. Select one or more images or a collection of images from the Elvis Desktop client.");

            prop = setLdbarHtmlError(prop,"<span style=\'color: #e8e8e8; font-style: italic \'>Check it! Seems you forget to select an asset at Elvis list. Close current popup windows and select one or more images or a collection of images from the Elvis Desktop client. Good luck!</span>");
            setView(prop);
            callbacks.disable();

        }else{
            var query = ElvisPlugin.queryForSelection(selectedHits);
            prop.nav_buttons = JSON.stringify(query);

            var amd;
            elvisApi.search({
                q: query,
                num: selectedHits.length
            }, function(data) {
                amd = data.hits[0].metadata;

                prop = setLdbarHtmlInProcess(prop,"Retrieving original asset meta data in process ... Please wait! ");
                prop = setSrcPath(prop,amd.assetPath);
                prop = setDestPath(prop,amd.assetPath);
                setView(prop);
                setRetrieveOriginalObjectPropertiesEndProperties(prop);

            });
        }
}

function setRetrieveOriginalObjectPropertiesEndProperties(prop){

    prop = setLdbarHtmlInProcess(prop,"Cool, all required data is retrieved.");
    setView(prop);

    Properties = prop;
    return prop;
}
