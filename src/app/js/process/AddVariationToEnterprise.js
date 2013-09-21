
function addVariationToEnterprise(prop){

    setAddVariationToEnterpriseStartProperties(prop);
    return prop

}

function setAddVariationToEnterpriseStartProperties(prop){

    prop.step =  "copyAsset";
    prop = setLoadBarAddVariationToEnterpriseStartProperties(prop);

    setView(prop);
    //Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(runAddVariationToEnterpriseProcess(prop),5000);

}

function runAddVariationToEnterpriseProcess(prop){
    //todo Develop runAddVariationToEnterpriseProcess

    prop = setNavButtonsForDisable(prop);


    if ($('#check_box_dossier').prop('checked')) {

        //Todo error handler should develop
        addVariationToEnterpriseViaRest(prop);
        prop = setLoadBarAddVariationToEnterpriseInProcessProperties(prop);

    }else{
        prop = setLoadBarProcessSkippedProperties(prop);

    }

    setView(prop);
    //Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(setAddVariationToEnterpriseEndProperties(prop),10000);
}

function setAddVariationToEnterpriseEndProperties(prop){

//    alert("setAddVariationToEnterpriseEndProperties getSrcAssetId: "+prop.getSrcAssetId());
//    alert("setAddVariationToEnterpriseEndProperties getDestAssetId: "+prop.getDestAssetId());

    prop = setLoadBarAddVariationToEnterpriseFinishedProperties(prop);
    setView(prop);
    //Properties = prop;
//    alert ("go for step 7 setLastView");
    setLastView(prop);
}