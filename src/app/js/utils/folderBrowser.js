var destElvisApi = new ElvisAPI("${serverUrl}");
var destColumnTree = new ColumnTree("#dest_path_folder", destElvisApi);

destColumnTree.pathChange = function () {

    Properties.dest_path = destColumnTree.folderPath;
    window.dest_path_ = destColumnTree.folderPath;
//    alert("1. destColumnTree.pathChange after Click Prop:\n "+ Properties.asString());
    setView(Properties);
    refreshResults();
//    alert("2. destColumnTree.pathChange after Click Prop:\n "+ Properties.asString());

};

function getDest3ColumnFolderPath(basepath){
//    alert("3. getDest3ColumnFolderPath before destColumnTree.refresh():\n "+ Properties.asString());
    destColumnTree.folderPath = basepath;
    destColumnTree.refresh();
//    alert("4. getDest3ColumnFolderPath after destColumnTree.refresh():\n "+ Properties.asString());
    return destColumnTree.folderPath;
}
