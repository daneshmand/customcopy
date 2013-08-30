
function updateRelation(){

    setUpdateRelationStartProperties();
    runUpdateRelationProcess();
    setUpdateRelationEndProperties();

    return Properties;

}

function setUpdateRelationStartProperties(){
    Properties.step =  "updateRelation";
    var message_ldbar = "Update Relation is started ..." ;

    setLdbarHtmlInProcess(message_ldbar);
    Properties.ldbar_html =  ldbar_html;
}

function runUpdateRelationProcess(){
    //todo Develop runCopyAssetProcess

}

function setUpdateRelationEndProperties(){

    var message_ldbar = "Update Relation is finished." ;

    setLdbarHtmlInProcess(message_ldbar);
    Properties.ldbar_html =  ldbar_html;

}

//var originalElvisId = '...';

/*
for (var i=0; i<data.hits.length; i++) {
    var variationElvisId = data.hits[i].id;
    $.ajax({
        url: "/services/createRelation?relationType=variation&target1Id=" + originalElvisId + "&target2Id=" + variationElvisId
    }).done(function() {
            // Do probably nothing :-)
        });
}
*/