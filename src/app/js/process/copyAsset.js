
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

        if (PLUGIN_TYPE == "CustomCopy"){
            //Features custom copy: All to elvis

        }else if (PLUGIN_TYPE == "NewVersion"){
            // todo version copy: upload to elvis
            var mdPath = getDestAssetPathForCreateAndUpdateMetadata(prop.getMetadata());
            loadUploadViaJqueryTool(mdPath);

        }else if (PLUGIN_TYPE == "NewVariation"){
        // todo variation copy:  upload to elvis

            var mdPath = getDestAssetPathForCreateAndUpdateMetadata(prop.getMetadata());

            function setNewAsset(prop, mdPath, callback){
                var new_asset_elvis_id = loadUploadViaJqueryTool(mdPath);
                callback(prop,new_asset_elvis_id);

            };
            setNewAsset(prop,mdPath,function(prop,new_asset_elvis_id){

                prop.destAssetId = new_asset_elvis_id;

                setView(prop);
     Xies(prop)
            })

        }else if (PLUGIN_TYPE == "Duplicate"){
            // todo duplicate copy: Asset to elvis

            copyAssetOrFolderToElvisViaRest(prop.src_path,prop.dest_path);
            setView(prop);
            //Properties = prop;

            clearTimeout(timeout);
            timeout = setTimeout(setCopyAssetEndProperties(prop),10000);

        }
    }

    function setCopyAssetEndProperties(prop){



        prop = setLoadBarCopyAssetFinishedProperties(prop);
        setView(prop);
        //Properties = prop;

        return prop;
    }
