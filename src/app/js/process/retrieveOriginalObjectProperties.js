
function retrieveOriginalObjectProperties(){

    setStartRetrieveOriginalObjectProperties(Properties);
//    alert(JSON.stringify(Properties));
//    return Properties
}

function setStartRetrieveOriginalObjectProperties(prop){

    prop.step =  "retrieveOriginalObjectProperties";
    prop = setPropToDefault(prop);
//    alert("1. setStartRetrieveOriginalObjectProperties after setPropToDefault Prop:\n "+ prop.asString());

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

//            alert("2. runInProcessRetrieveOriginalObjectProperties after setPropToError Prop:\n "+ prop.asString());
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
//                alert("After set Prop To PreProcess Properties:\n<br> "+JSON.stringify(prop));
                setView(prop);
                //Properties = prop;

//                alert("3. runInProcessRetrieveOriginalObjectProperties after setPropToPreProcess Prop:\n "+ prop.asString());
                setEndRetrieveOriginalObjectProperties(prop);

            });
        }
}

function setEndRetrieveOriginalObjectProperties(prop){

//    alert("setEndRetrieveOriginalObjectProperties getSrcAssetId: "+prop.getSrcAssetId());
//    alert("setEndRetrieveOriginalObjectProperties getDestAssetId: "+prop.getDestAssetId());

    prop = setPropforGeneralView(prop);
    setView(prop);

//    alert("4. setEndRetrieveOriginalObjectProperties Prop:\n "+ prop.asString());


    //Properties = prop;
    return prop;
}
