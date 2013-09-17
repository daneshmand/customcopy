
function updateRelation(prop){

    setUpdateRelationStartProperties(prop);

}

function setUpdateRelationStartProperties(prop){

    prop.step =  "updateRelation";

    prop = setLoadBarUpdateRelationStartProperties(prop);
    setView(prop);
    //Properties = prop;

    runUpdateRelationProcess(prop);

}

function runUpdateRelationProcess(prop){

    prop = setNavButtonsForDisable(prop);

//    alert("runUpdateRelationProcess getSrcAssetId: "+prop.getSrcAssetId());
//    alert("runUpdateRelationProcess getDestAssetId: "+prop.getDestAssetId());

    if ($('#check_box_metadata').prop('checked')) {

        setRelationsViaRest(prop.getSrcAssetId(),prop.getDestAssetId());
        prop = setLoadBarUpdateRelationInProcessProperties(prop);

    }else{
        prop = setLoadBarProcessSkippedProperties(prop);

    }

    setView(prop);
    //Properties = prop;

    setUpdateRelationEndProperties(prop);
}

function setUpdateRelationEndProperties(prop){

//    alert("setUpdateRelationEndProperties getSrcAssetId: "+prop.getSrcAssetId());
//    alert("setUpdateRelationEndProperties getDestAssetId: "+prop.getDestAssetId());

    prop = setLoadBarUpdateRelationFinishedProperties(prop);
    setView(prop);
    //Properties = prop;
//    alert ("go for step 6 addVariationToEnterprise");
    addVariationToEnterprise(prop);
}
