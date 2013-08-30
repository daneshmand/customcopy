
function updateCollection(){

    setUpdateCollectionStartProperties();
    runUpdateCollectionProcess();
    setUpdateCollectionEndProperties();

    return Properties;

}

function setUpdateCollectionStartProperties(){
    Properties.step =  "updateCollection";
    var message_ldbar = "Update Collection is started ..." ;

    setLdbarHtmlInProcess(message_ldbar);
    Properties.ldbar_html =  ldbar_html;
}

function runUpdateCollectionProcess(){
    //todo Develop runCopyAssetProcess

}

function setUpdateCollectionEndProperties(){

    var message_ldbar = "Update Collection is finished." ;

    setLdbarHtmlInProcess(message_ldbar);
    Properties.ldbar_html =  ldbar_html;

}

// 9. & 10. Retrieve collections of original object and add new object to collections
//- Do a relation search for contained-by relations on the original asset
//- Loop through the hits and get the asset id's of the collections
//- Call the createRelation REST call to create the relation between the collection file and the variation

/*
var originalElvisId = '...';

elvisApi.search({
    q: 'relatedTo:' + originalElvisId,
    relationTarget: parent,
    relationType: contains
}, function(data) {
    for (var i=0; i<data.hits.length; i++) {
        var collectionElvisId = data.hits[i].id;
        $.ajax({
            url: "/services/createRelation?relationType=contains&target1Id=" + collectionElvisId + "&target2Id=" + originalElvisId
        }).done(function() {
                // Do something or nothing...
            });
    }
});
*/