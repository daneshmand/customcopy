
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

    clearTimeout(timeout);
    timeout = setTimeout(runInProcessRetrieveOriginalObjectProperties(prop),1000);
//    timeout = setTimeout(runInProcessRetrieveOriginalObjectPropertiesLocal(prop),1000); //only for local test in browser (bypass elvis object)
}

function runInProcessRetrieveOriginalObjectPropertiesLocal(prop){


    prop = setSrcPath(prop,"/dog.jpg");
    prop = setDestPath(prop,"/dog.jpg");

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
            prop.nav_buttons = JSON.stringify(query);

            var amd;
            elvisApi.search({
                q: query,
                num: selectedHits.length
            }, function(data) {
                amd = data.hits[0].metadata;
//              alert("runInProcessRetrieveOriginalObjectProperties inside the callback");

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


    prop = setPropToPreProcessFinished(prop);
    setView(prop);



    //Properties = prop;
//    alert("setEndRetrieveOriginalObjectProperties: "+JSON.stringify(Properties));
    return prop;
}
