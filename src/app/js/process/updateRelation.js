
function updateRelation(Properties){

    setUpdateRelationStartProperties(Properties);
    return Properties

}

function setUpdateRelationStartProperties(prop){

    prop.step =  "copyAsset";

    prop = setLoadBarUpdateRelationStartProperties(prop);
    setView(prop);
    Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(runUpdateRelationProcess(prop),5000);

}

function runUpdateRelationProcess(prop){

    prop = setLoadBarUpdateRelationInProcessProperties(prop);
    prop = setNavButtonsForDisable(prop);

    setRelationsViaRest(prop.getSrcAssetId(),prop.getDestAssetId());

    setView(prop);
    Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(setUpdateRelationEndProperties(prop),10000);
}

function setUpdateRelationEndProperties(prop){



    prop = setLoadBarUpdateRelationFinishedProperties(prop);
    setView(prop);
    Properties = prop;

    return prop;
}
