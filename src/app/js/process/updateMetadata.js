
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
/*

function updateMetadata(){

    setUpdateMetadataStartProperties();
    runUpdateMetadataProcess();
    setUpdateMetadataEndProperties();

    return Properties;

}

function setUpdateMetadataStartProperties(){
    Properties.step =  "updateMetadata";
    var message_ldbar = "Update Metadata is started ..." ;

    setLdbarHtmlInProcess(message_ldbar);
    Properties.ldbar_html =  ldbar_html;
}

function runUpdateMetadataProcess(){
    //todo Develop runCopyAssetProcess

}

function setUpdateMetadataEndProperties(){

    var message_ldbar = "Update Metadata is finished." ;

    setLdbarHtmlInProcess(message_ldbar);
    Properties.ldbar_html =  ldbar_html;

}*/
