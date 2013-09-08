
function addVariationToEnterprise(Properties){

    setAddVariationToEnterpriseStartProperties(Properties);
    return Properties

}

function setAddVariationToEnterpriseStartProperties(prop){

    prop.step =  "copyAsset";

    prop = setLoadBarAddVariationToEnterpriseStartProperties(prop);
    setView(prop);
    Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(runAddVariationToEnterpriseProcess(prop),5000);

}

function runAddVariationToEnterpriseProcess(prop){
    //todo Develop runAddVariationToEnterpriseProcess

    prop = setLoadBarAddVariationToEnterpriseInProcessProperties(prop);
    prop = setNavButtonsForDisable(prop);

    //Todo error handler should develop
    addVariationToEnterpriseViaRest();

    setView(prop);
    Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(setAddVariationToEnterpriseEndProperties(prop),10000);
}

function setAddVariationToEnterpriseEndProperties(prop){



    prop = setLoadBarAddVariationToEnterpriseFinishedProperties(prop);
    setView(prop);
    Properties = prop;

    return prop;
}