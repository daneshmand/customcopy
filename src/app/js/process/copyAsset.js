
    function copyAsset(){

        setCopyAssetStartProperties();
        runCopyAssetProcess();
        setCopyAssetEndProperties();

        return Properties;

    }

    function setCopyAssetStartProperties(){
        Properties.step =  "retrieveOriginalObjectProperties";
        var message_ldbar = "Copy Process is started ..." ;

        setLdbarHtmlInProcess(message_ldbar);
        Properties.ldbar_html =  ldbar_html;
    }

    function runCopyAssetProcess(){
        //todo Develop runCopyAssetProcess

    }

    function setCopyAssetEndProperties(){

        var message_ldbar = "Copy process is finished." ;

        setLdbarHtmlInProcess(message_ldbar);
        Properties.ldbar_html =  ldbar_html;

    }
