
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

//    alert("runUpdateMetadataProcess Metadata:\n<br> "+JSON.stringify(prop.getMetadata()));
//    alert("runUpdateMetadataProcess getSrcAssetId:\n<br> "+JSON.stringify(prop.getSrcAssetId()));
//    alert("runUpdateMetadataProcess getDestAssetId:\n<br> "+JSON.stringify(prop.getDestAssetId()));

    // the task ahs be done at copyAsset process (need to set metadata before upload)

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
