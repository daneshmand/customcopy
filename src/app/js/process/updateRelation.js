
function updateRelation(prop){

    setUpdateRelationStartProperties(prop);

}

function setUpdateRelationStartProperties(prop){

    prop.step =  "copyAsset";

    prop = setLoadBarUpdateRelationStartProperties(prop);
    setView(prop);
    //Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(runUpdateRelationProcess(prop),5000);

}

function runUpdateRelationProcess(prop){

    prop = setLoadBarUpdateRelationInProcessProperties(prop);
    prop = setNavButtonsForDisable(prop);

    alert("runUpdateRelationProcess getSrcAssetId: "+prop.getSrcAssetId());
    alert("runUpdateRelationProcess getDestAssetId: "+prop.getDestAssetId());

    setRelationsViaRest(prop.getSrcAssetId(),prop.getDestAssetId());

    setView(prop);
    //Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(setUpdateRelationEndProperties(prop),10000);
}

function setUpdateRelationEndProperties(prop){

//    alert("setUpdateRelationEndProperties getSrcAssetId: "+prop.getSrcAssetId());
//    alert("setUpdateRelationEndProperties getDestAssetId: "+prop.getDestAssetId());

    prop = setLoadBarUpdateRelationFinishedProperties(prop);
    setView(prop);
    //Properties = prop;
    alert ("go for step 6 addVariationToEnterprise");
    addVariationToEnterprise(prop);
}
