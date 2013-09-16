
function updateMetadata(prop){

    setUpdateMetadataStartProperties(prop);

}

function setUpdateMetadataStartProperties(prop){

    prop.step =  "updateMetadata";

    prop = setLoadBarUpdateMetadataStartProperties(prop);
    setView(prop);
    //Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(runUpdateMetadataProcess(prop),5000);

}

function runUpdateMetadataProcess(prop){
    //todo Develop runUpdateMetadataProcess

    prop = setLoadBarUpdateMetadataInProcessProperties(prop);
    prop = setNavButtonsForDisable(prop);

//    alert("runUpdateMetadataProcess Metadata:\n<br> "+JSON.stringify(prop.getMetadata()));
    // the task ahs be done at copyAsset process (need to set metadata before upload)

    setView(prop);
    //Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(setUpdateMetadataEndProperties(prop),10000);
}

function setUpdateMetadataEndProperties(prop){

//    alert("setUpdateMetadataEndProperties getSrcAssetId: "+prop.getSrcAssetId());
//    alert("setUpdateMetadataEndProperties getDestAssetId: "+prop.getDestAssetId());

    prop = setLoadBarUpdateMetadataFinishedProperties(prop);
    setView(prop);
    //Properties = prop;
    alert ("go for step 4 updateCollection");
    updateCollection(prop);//step 4
}