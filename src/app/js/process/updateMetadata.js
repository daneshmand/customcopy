
function updateMetadata(Properties){

    setUpdateMetadataStartProperties(Properties);
    return Properties


}

function setUpdateMetadataStartProperties(prop){

    prop.step =  "updateMetadata";

    prop = setLoadBarUpdateMetadataStartProperties(prop);
    setView(prop);
    Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(runUpdateMetadataProcess(prop),5000);

}

function runUpdateMetadataProcess(prop){
    //todo Develop runUpdateMetadataProcess

    prop = setLoadBarUpdateMetadataInProcessProperties(prop);
    prop = setNavButtonsForDisable(prop);

    setView(prop);
    Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(setUpdateMetadataEndProperties(prop),10000);
}

function setUpdateMetadataEndProperties(prop){



    prop = setLoadBarUpdateMetadataFinishedProperties(prop);
    setView(prop);
    Properties = prop;

    return prop;
}
