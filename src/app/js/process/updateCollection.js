
function updateCollection(prop){

    setUpdateCollectionStartProperties(prop);

}

function setUpdateCollectionStartProperties(prop){

    prop.step =  "updateCollection";
    prop = setLoadBarUpdateCollectionStartProperties(prop);

    setView(prop);
    //Properties = prop;
    runUpdateCollectionProcess(prop);
}

function runUpdateCollectionProcess(prop){

    prop = setNavButtonsForDisable(prop);

    var originalElvisId = prop.getSrcAssetId();
    var newElvisId = prop.getDestAssetId();
//  alert("runUpdateCollectionProcess originalElvisId: "+originalElvisId);
//  alert("runUpdateCollectionProcess newElvisId: "+newElvisId);
//  alert(originalElvisId);

    if ($('#check_box_metadata').prop('checked')) {
        prop = setLoadBarUpdateCollectionInProcessProperties(prop);

        if (Local_TEST_DEBUG){
            setCollectionsViaRest(src_test_elvis_id,collection_testelvis_id);

            //Properties = prop;
            setUpdateCollectionEndProperties(prop)

        }else{

            elvisApi.search({
                q: 'relatedTo:' + originalElvisId +' relationTarget:parent relationType:contains'
            }, function(data) {
//            alert("collection, inside API, data hit length" + data.hits.length);

                for (var i=0; i<data.hits.length; i++) {
//                alert("collection: "+data.hits[i].id);
                    var collectionElvisId = data.hits[i].id;
                    setCollectionsViaRest(collectionElvisId,newElvisId);
                }
                setUpdateCollectionEndProperties(prop)
            });
        }

    }else{

        prop = setLoadBarProcessSkippedProperties(prop);
        setUpdateCollectionEndProperties(prop)


    }

    setView(prop);
}

function setUpdateCollectionEndProperties(prop){

//    alert("setUpdateCollectionEndProperties getSrcAssetId: "+prop.getSrcAssetId());
//    alert("setUpdateCollectionEndProperties getDestAssetId: "+prop.getDestAssetId());

    prop = setLoadBarUpdateCollectionFinishedProperties(prop);
    setView(prop);
    //Properties = prop;
//    alert ("go for step 5 updateRelation");
    updateRelation(prop);//step 4
}