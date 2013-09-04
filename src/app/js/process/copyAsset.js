
    function copyAsset(Properties){

        setCopyAssetStartProperties(Properties);
        return Properties

    }

    function setCopyAssetStartProperties(prop){

        prop.step =  "copyAsset";

        prop = setLoadBarCopyAssetStartProperties(prop);
        setView(prop);
        Properties = prop;

        clearTimeout(timeout);
        timeout = setTimeout(runCopyAssetProcess(prop),5000);

    }

    function runCopyAssetProcess(prop){
        //todo Develop runCopyAssetProcess

        prop = setLoadBarCopyAssetInProcessProperties(prop);
        prop = setNavButtonsForDisable(prop);

        setView(prop);
        Properties = prop;

        clearTimeout(timeout);
        timeout = setTimeout(setCopyAssetEndProperties(prop),10000);
    }

    function setCopyAssetEndProperties(prop){



        prop = setLoadBarCopyAssetFinishedProperties(prop);
        setView(prop);
        Properties = prop;

        return prop;
    }
