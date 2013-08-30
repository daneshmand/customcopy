
function retrieveOriginalObjectProperties(){

    setRetrieveOriginalObjectPropertiesStartProperties();
    runRetrieveOriginalObjectPropertiesProcess();
    setRetrieveOriginalObjectPropertiesEndProperties();

    return Properties;

}

function setRetrieveOriginalObjectPropertiesStartProperties(){

    Properties.step =  "retrieveOriginalObjectProperties";

    Properties.title = "Copy | Elvis";
    Properties.title_src = "Source";
    Properties.title_dest = "Destination";
    Properties.title_ldbar = "Copy | Elvis";

    Properties.nav_buttons = "";
    Properties.dest_path = "<span style=\'color: #F00\'>No Path has been defined yet</span>";
    Properties.src_path = "<span style=\'color: #F00\'>No Path has been defined yet</span>";

    console.log("PLUGIN_TYPE: " + PLUGIN_TYPE);

    setLdbarHtmlStarted();
    Properties.ldbar_html = ldbar_html;


}

function runRetrieveOriginalObjectPropertiesProcess(){
    //todo clean runRetrieveOriginalObjectPropertiesProcess

    var selectedHits = ElvisPlugin.resolveElvisContext().activeTab.assetSelection;
        if (selectedHits.length == 0) {
            alert("Selection is empty. Select one or more images or a collection of images from the Elvis Desktop client.");
            Properties.originalAssetMetadata = "<span style=\'color: #F00\'>No Asset is selected at Elvis</span>";
            Properties.originalAssetPath = "<span style=\'color: #F00\'>No Path is defined</span>";
        }
    var query = ElvisPlugin.queryForSelection(selectedHits);
    Properties.nav_buttons = JSON.stringify(query);

    function searchElvis(callback){

        elvisApi.search({
            q: query,
            num: selectedHits.length
        }, function(data) {

            var amd = data.hits[0].metadata;
            alert("assetPath Object map: " + amd.assetPath);

            callback(amd);

        });

    }
    searchElvis(function(amd){

        alert("amd from searchElvis: " + JSON.stringify(amd));
//        Properties.originalAssetPath = amd.assetPath;

        MyTemp = "Test from Inside search elvis";
        setOriginalAssetMetadata(MyTemp);

    });
    function setOriginalAssetMetadata(){

        alert("amd from setOriginalAssetMetadata: " + amd);
        Properties.originalAssetPath = MyTemp;

        setSrcPath();
        setDestPath();
    }

}

function setRetrieveOriginalObjectPropertiesEndProperties(){

    var message_ldbar = "All required Data is retrieved" ;

    //setLdbarHtmlInProcess(message_ldbar);
    Properties.ldbar_html =  ldbar_html;

}




/*

You've got the selection in the elvisContext. Use the selection to build a new search on the selected assetId's to retrieve all required metadata.


var selectedHits = ElvisPlugin.resolveElvisContext().activeTab.assetSelection;
if (selectedHits.length == 0) {
    alert("Selection is empty. Select one or more images or a collection of images from the Elvis Desktop client.");
}

var query = ElvisPlugin.queryForSelection(selectedHits);

elvisApi.search({
    q: query,
    num: selectedHits.length
}, function(data) {
    // data.hits contains the hits with all metadata (data.hits[0].metadata)
});

 */