
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

}