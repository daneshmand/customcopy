var destElvisApi = new ElvisAPI("${serverUrl}");
var destColumnTree = new ColumnTree("#dest_path_folder", destElvisApi);

destColumnTree.pathChange = function () {
    Properties.dest_path = destColumnTree.folderPath;
    refreshResults();
};

function getDest3ColumnFolderPath(basepath){
    destColumnTree.folderPath = basepath;
    destColumnTree.refresh();
    return destColumnTree.folderPath;
}
