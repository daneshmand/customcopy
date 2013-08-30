var columnTree = new ColumnTree("#folderBrowser", elvisApi);
	columnTree.folderPath = "/Demo Zone";
	columnTree.refresh();
	
columnTree.pathChange = function () {

    refreshResults();
};

function refreshResults() {
    if (columnTree.containerId) {
        // collection is selected in ColumnTree
        query = "relatedTo:" + columnTree.containerId + " relationTarget:child relationType:contains " + query;
    }
    else if (columnTree.folderPath) {
        // folder is selected in ColumnTree
        query += ' ancestorPaths:"' + columnTree.folderPath + '"';
    }
}