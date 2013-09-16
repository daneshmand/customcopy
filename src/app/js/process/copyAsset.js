
    function copyAsset(Properties){

        setCopyAssetStartProperties(Properties);
        return Properties

    }

    function setCopyAssetStartProperties(prop){

        prop.step =  "copyAsset";
        prop = setLoadBarCopyAssetStartProperties(prop);

        updateCheckBoxes(prop);

//        alert(properties.getCheck_boxes());

        setView(prop);
        //Properties = prop;

        clearTimeout(timeout);
        timeout = setTimeout(runCopyAssetProcess(prop),5000);

    }

    function runCopyAssetProcess(prop){
        //todo Complete duration process for different plugin types for runCopyAssetProcess


        prop = setLoadBarCopyAssetInProcessProperties(prop);
        prop = setNavButtonsForDisable(prop);
//        alert("runCopyAssetProcess is started");

        if (PLUGIN_TYPE == "CustomCopy"){
            //Features custom copy: All to elvis

        }else if (PLUGIN_TYPE == "NewVersion"){
            // todo version copy: upload to elvis
            var mdPath = getDestAssetPathForCreateAndUpdateMetadata(prop.getMetadata());
            loadUploadViaJqueryTool(prop);

        }else if (PLUGIN_TYPE == "NewVariation"){
        // todo variation copy:  upload to elvis
            if (Local_TEST_DEBUG){
                var mdPath ="/Demo Zone/Images/Abstract/Stream.jpg";
            }else{
                var mdPath = getDestAssetPathForCreateAndUpdateMetadata(prop.getMetadata());
            }
            loadUploadViaJqueryTool(mdPath,prop);// set view and setCopyAssetEndProperties trigger will be done at upload.js

        }else if (PLUGIN_TYPE == "Duplicate"){
            // todo duplicate copy: Asset to elvis

            copyAssetOrFolderToElvisViaRest(prop.src_path,prop.dest_path);
            setView(prop);
            //Properties = prop;

            setCopyAssetEndProperties(prop)

        }
    }

    function setCopyAssetEndProperties(prop){

//        alert("setCopyAssetEndProperties getSrcAssetId: "+prop.getSrcAssetId());
//        alert("setCopyAssetEndProperties getDestAssetId: "+prop.getDestAssetId());

        prop = setLoadBarCopyAssetFinishedProperties(prop);
        setView(prop);
        //Properties = prop;

        goStep3UpdateMetadata(prop)
    }

    function goStep3UpdateMetadata(prop){
        if (PLUGIN_TYPE != "NewVersion"){
//            alert ("go for step 3");
            updateMetadata(prop);//step 3
        }else{
            setLastView(prop);//step 7 (last)
        }
    }