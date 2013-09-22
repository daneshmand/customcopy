
function retrieveOriginalObjectProperties(){

//    alert("1.0 PLUGIN_TYPE: "+ PLUGIN_TYPE);
    setStartRetrieveOriginalObjectProperties(Properties);
}

function setStartRetrieveOriginalObjectProperties(prop){

    prop.step =  "retrieveOriginalObjectProperties";
    prop = setPropToDefault(prop);
//    alert("1.1 setStartRetrieveOriginalObjectProperties after setPropToDefault,\n Prop:\n "+ prop.asString());

    setView(prop);
    //Properties = prop;// Ask it: do I need to remove this????
//    alert("1.2 setStartRetrieveOriginalObjectProperties after setView,\n Prop:\n "+ prop.asString());

    if (Local_TEST_DEBUG){
        runInProcessRetrieveOriginalObjectPropertiesLocal(prop);
//        alert("1.2 setStartRetrieveOriginalObjectProperties after runInProcessRetrieveOriginalObjectPropertiesLocal,\n Prop:\n "+ prop.asString());

    }else{
        runInProcessRetrieveOriginalObjectProperties(prop);
//        alert("1.2 setStartRetrieveOriginalObjectProperties after runInProcessRetrieveOriginalObjectProperties,\n Prop:\n "+ prop.asString());

    }
}

function runInProcessRetrieveOriginalObjectPropertiesLocal(prop){

//    alert("2.1 runInProcessRetrieveOriginalObjectPropertiesLocal is started,\n Prop:\n "+ prop.asString());

    prop = setSrcPath(prop,src_test_assetPath);
    prop = setDestPath(prop,dest_test_assetPath);
    prop.srcAssetId = src_test_elvis_id;

    setView(prop);
//    alert("2.1 runInProcessRetrieveOriginalObjectPropertiesLocal after setView,\n Prop:\n "+ prop.asString());
    setEndRetrieveOriginalObjectProperties(prop);
}

function runInProcessRetrieveOriginalObjectProperties(prop){
//    alert("A 2.1 runInProcessRetrieveOriginalObjectProperties is started,\n Prop:\n "+ prop.asString());

    var selectedHits = ElvisPlugin.resolveElvisContext().activeTab.assetSelection;
        if (selectedHits.length == 0) {

            prop = setPropToError(prop);
//            alert("A runInProcessRetrieveOriginalObjectProperties setPropToError if is started");

            setView(prop);
//            alert("A 2 runInProcessRetrieveOriginalObjectProperties if setPropToError after setView,\n Prop:\n "+ prop.asString());

            //Properties = prop;
            callbacks.disable();

        }else{

//            alert("A runInProcessRetrieveOriginalObjectProperties setPropToPreProcess else is started");

            var query = ElvisPlugin.queryForSelection(selectedHits);
//            alert ("query: " + query);
            prop.nav_buttons = JSON.stringify(query);

            var amd;
            elvisApi.search({
                q: query,
                num: selectedHits.length
            }, function(data) {
                prop.srcAssetId = data.hits[0].id;
                prop.destAssetId = data.hits[0].id;

                amd = data.hits[0].metadata;
//                alert("A runInProcessRetrieveOriginalObjectProperties after hit PLUGIN_TYPE: "+ PLUGIN_TYPE);
//                alert("A 2.3 runInProcessRetrieveOriginalObjectProperties hit: " + JSON.stringify(data.hits[0]));

                prop = setPropToPreProcess(prop, amd);
//                alert("A runInProcessRetrieveOriginalObjectProperties after setPropToPreProcess PLUGIN_TYPE: "+ PLUGIN_TYPE);
//                alert("A 2.4 runInProcessRetrieveOriginalObjectProperties after setPropToPreProcess,\n Prop:\n "+ prop.asString());

                setView(prop);
//                alert("A runInProcessRetrieveOriginalObjectProperties after setView PLUGIN_TYPE: "+ PLUGIN_TYPE);
//                alert("A 2.5 runInProcessRetrieveOriginalObjectProperties after setView Prop:\n "+ prop.asString());

                setEndRetrieveOriginalObjectProperties(prop);

            });
        }
}

function setEndRetrieveOriginalObjectProperties(prop){

//    alert("A setEndRetrieveOriginalObjectProperties getSrcAssetId: "+prop.getSrcAssetId());
//    alert("A setEndRetrieveOriginalObjectProperties getDestAssetId: "+prop.getDestAssetId());

    prop = setPropforGeneralView(prop);

    setView(prop);
//    alert("A 3. setEndRetrieveOriginalObjectProperties after all,\n Prop:\n "+ prop.asString());


    //Properties = prop;
    return prop;
}
