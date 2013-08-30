
function AddVariationToEnterprise(){

    setAddVariationToEnterpriseStartProperties();
    runAddVariationToEnterpriseProcess();
    setAddVariationToEnterpriseEndProperties();

    return Properties;

}

function setAddVariationToEnterpriseStartProperties(){
    Properties.step =  "AddVariationToEnterprise";
    var message_ldbar = "Adding Variation to Enterprise is started ..." ;

    setLdbarHtmlInProcess(message_ldbar);
    Properties.ldbar_html =  ldbar_html;
}



function runAddVariationToEnterpriseProcess(){
    //todo Develop runCopyAssetProcess

}

function setAddVariationToEnterpriseEndProperties(){

    var message_ldbar = "Adding Variation to Enterprise is finished." ;

    setLdbarHtmlInProcess(message_ldbar);
    Properties.ldbar_html =  ldbar_html;

}