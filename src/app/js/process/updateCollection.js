
function updateCollection(Properties){

    setUpdateCollectionStartProperties(Properties);
    return Properties

}

function setUpdateCollectionStartProperties(prop){

    prop.step =  "updateCollection";
    prop = setLoadBarUpdateCollectionStartProperties(prop);

    setView(prop);
    Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(runUpdateCollectionProcess(prop),5000);

}

function runUpdateCollectionProcess(prop){
    //todo Develop runUpdateCollectionProcess

    prop = setLoadBarUpdateCollectionInProcessProperties(prop);
    prop = setNavButtonsForDisable(prop);

    var originalElvisId = prop.srcAssetId;

    elvisApi.search({
        q: 'relatedTo:' + originalElvisId,
        relationTarget: parent,
        relationType: contains
    }, function(data) {
        for (var i=0; i<data.hits.length; i++) {
            var collectionElvisId = data.hits[i].id;
            setCollectionsViaRest(originalElvisId,collectionElvisId);
        }
    });

    setView(prop);
    Properties = prop;

    clearTimeout(timeout);
    timeout = setTimeout(setUpdateCollectionEndProperties(prop),10000);
}

function setUpdateCollectionEndProperties(prop){



    prop = setLoadBarUpdateCollectionFinishedProperties(prop);
    setView(prop);
    Properties = prop;

    return prop;
}