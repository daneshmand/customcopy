
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

    prop = setNavButtonsForDisable(prop);

//    alert("runUpdateMetadataProcess Metadata:\n<br> "+JSON.stringify(prop.getMetadata()));

    if ($('#check_box_metadata').prop('checked')) {

        var mdPath = updateAssetMetadata(prop);
        prop = setLoadBarUpdateMetadataInProcessProperties(prop);

    }else{
        prop = setLoadBarProcessSkippedProperties(prop);

    }
//    alert("setUpdateMetadataEndProperties mdPath: "+ mdPath);

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
//    alert ("go for step 4 updateCollection");
    updateCollection(prop);//step 4
}