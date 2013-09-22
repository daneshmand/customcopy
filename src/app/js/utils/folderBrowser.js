
if (PLUGIN_TYPE == "CustomCopy" && CUSTOMCOPY_DEST == "elvis"){var fnLoad = true}
if (PLUGIN_TYPE == "NewVersion" && NewVersion_DEST == "elvis"){var fnLoad = true}
if (PLUGIN_TYPE == "NewVariation" && NewVariation_DEST == "elvis"){var fnLoad = true}
if (PLUGIN_TYPE == "Duplicate" && Duplicate_DEST == "elvis"){var fnLoad = true}

if(fnLoad){

    var destElvisApi = new ElvisAPI("${serverUrl}");
    var destColumnTree = new ColumnTree("#dest_path_folder", destElvisApi);

    destColumnTree.pathChange = function () {
//        alert("FB destColumnTree.pathChange function is started");

        Properties.dest_path = destColumnTree.folderPath;
        setPropToClickView(Properties, destColumnTree.folderPath);
        setView(Properties);
//        alert("FB 1 destColumnTree.pathChange :,\n Prop:\n "+ prop.asString());

        window.dest_path_ = destColumnTree.folderPath;

        refreshResults();
    //    alert("2. destColumnTree.pathChange after Click Prop:\n "+ Properties.asString());

    };
}

function getDest3ColumnFolderPath(basepath){
//    alert("3. getDest3ColumnFolderPath before destColumnTree.refresh():\n "+ Properties.asString());
    destColumnTree.folderPath = basepath;
    destColumnTree.refresh();
//    alert("4. getDest3ColumnFolderPath after destColumnTree.refresh():\n "+ Properties.asString());
    return destColumnTree.folderPath;
}