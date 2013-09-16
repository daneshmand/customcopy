
function retrieveOriginalObjectProperties(){

    setStartRetrieveOriginalObjectProperties(Properties);
//    alert(JSON.stringify(Properties));
    return Properties
}

function setStartRetrieveOriginalObjectProperties(prop){

    prop.step =  "retrieveOriginalObjectProperties";
    prop = setPropToDefault(prop);

    setView(prop);
    //Properties = prop;// Ask it: do I need to remove this????

    if (Local_TEST_DEBUG){
        runInProcessRetrieveOriginalObjectPropertiesLocal(prop)
    }else{
        runInProcessRetrieveOriginalObjectProperties(prop)
    }
}

function runInProcessRetrieveOriginalObjectPropertiesLocal(prop){


    prop = setSrcPath(prop,src_test_assetPath);
    prop = setDestPath(prop,dest_test_assetPath);
    prop.srcAssetId = src_test_elvis_id;
    setView(prop);
    //loadUploadViaJqueryTool();

    //Properties = prop;
//    alert("runInProcessRetrieveOriginalObjectPropertiesLocal Properties:\n<br> "+JSON.stringify(Properties));
    clearTimeout(timeout);
    timeout = setTimeout(setEndRetrieveOriginalObjectProperties(prop),1000);
}

function runInProcessRetrieveOriginalObjectProperties(prop){

    var selectedHits = ElvisPlugin.resolveElvisContext().activeTab.assetSelection;
        if (selectedHits.length == 0) {

            prop = setPropToError(prop);
            setView(prop);

            //Properties = prop;
            callbacks.disable();

        }else{

//            alert("runInProcessRetrieveOriginalObjectProperties else started");

            var query = ElvisPlugin.queryForSelection(selectedHits);
//            alert (query);
            prop.nav_buttons = JSON.stringify(query);

            var amd;
            elvisApi.search({
                q: query,
                num: selectedHits.length
            }, function(data) {
                prop.srcAssetId = data.hits[0].id;

                amd = data.hits[0].metadata;
//                alert("runInProcessRetrieveOriginalObjectProperties hit: " + JSON.stringify(data.hits[0]));
                prop = setPropToPreProcess(prop, amd);
//                alert("After setPropToPreProcess Properties:\n<br> "+JSON.stringify(Properties));
                setView(prop);
                //Properties = prop;

                clearTimeout(timeout);
                timeout = setTimeout(setEndRetrieveOriginalObjectProperties(prop),3000);

            });
        }
}

function setEndRetrieveOriginalObjectProperties(prop){

//    alert("setEndRetrieveOriginalObjectProperties getSrcAssetId: "+prop.getSrcAssetId());
//    alert("setEndRetrieveOriginalObjectProperties getDestAssetId: "+prop.getDestAssetId());

    prop = setPropToPreProcessFinished(prop);
    setView(prop);



    //Properties = prop;
//    alert("setEndRetrieveOriginalObjectProperties: "+JSON.stringify(Properties));
    return prop;
}
