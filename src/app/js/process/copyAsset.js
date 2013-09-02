
    function copyAsset(){

        setCopyAssetStartProperties(Properties);

        return Properties;

    }

    function setCopyAssetStartProperties(prop){

        prop.step =  "retrieveOriginalObjectProperties";

        prop = setLdbarHtmlInProcess(prop,"New step is coping asset to new location.");
        setView(setLdbarHtmlStarted(prop));

        runCopyAssetProcess(prop);
    }

    function runCopyAssetProcess(){
        //todo Develop runCopyAssetProcess

        prop = setLdbarHtmlInProcess(prop,"Ok, Next step is started ... Please wait.");
        setView(setLdbarHtmlStarted(prop));



        setCopyAssetEndProperties(prop);
    }

    function setCopyAssetEndProperties(prop){

        var message_ldbar = "Copy process is finished." ;

        prop = setLdbarHtmlInProcess(prop,"Ok, Next step is finished and requested copy is done.");

        setLdbarHtmlInProcess(message_ldbar);
        Properties.ldbar_html =  ldbar_html;

    }
