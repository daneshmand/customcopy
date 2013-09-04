
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


//function AddVariationToEnterprise(){
//
//    setAddVariationToEnterpriseStartProperties();
//    runAddVariationToEnterpriseProcess();
//    setAddVariationToEnterpriseEndProperties();
//
//    return Properties;
//
//}
//
//function setAddVariationToEnterpriseStartProperties(){
//    Properties.step =  "AddVariationToEnterprise";
//    var message_ldbar = "Adding Variation to Enterprise is started ..." ;
//
//    setLdbarHtmlInProcess(message_ldbar);
//    Properties.ldbar_html =  ldbar_html;
//}
//
//
//
//function runAddVariationToEnterpriseProcess(){
//    //todo Develop runCopyAssetProcess
//
//}
//
//function setAddVariationToEnterpriseEndProperties(){
//
//    var message_ldbar = "Adding Variation to Enterprise is finished." ;
//
//    setLdbarHtmlInProcess(message_ldbar);
//    Properties.ldbar_html =  ldbar_html;
//
//}