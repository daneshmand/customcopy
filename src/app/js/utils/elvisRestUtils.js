/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 8/09/13
 * Time: 5:01 PM
 * To change this template use File | Settings | File Templates.
 */
function restPost(url){
    $.post(url, function(data) {
        rest_response = data;
    });

    return rest_response;
}

function updateAssetAllMetadataViaRest(assetId,amd){
    var rest_response
    url = SERVER_BASE_URL + "services/update?"
            + "id=" + assetId
            + "&metadata=" + amd;

    return restPost(url)
}


function updateAssetMetadataViaRest(assetId,mdFieldName,mdFieldValue){
    var rest_response
    url = SERVER_BASE_URL + "services/update?"
        + "id=" + assetId
        + "&" + mdFieldName + "=" + mdFieldValue

    return restPost(url)
}

function updateAssetFileViaRest(assetId,file){
    var rest_response
    url = SERVER_BASE_URL + "services/update?"
        + "id=" + assetId
        + "&Filedata=" + file;

    return restPost(url)
}

function createAssetWithFileAndMetadataViaRest(file, amd){
    var rest_response
    url = SERVER_BASE_URL + "services/create?"
        + "Filedata=" + file
        + "&metadata=" + amd;

    return restPost(url)
;
}

function createAssetWithFileOnlyViaRest(file){
    var rest_response
    url = SERVER_BASE_URL + "services/create?"
        + "Filedata=" + file
    ;

    return restPost(url)
}

function createAssetWithFileAndUpdateAMetadataViaRest(file , mdFieldName,mdFieldValue){
    var rest_response
    url = SERVER_BASE_URL + "services/create?"
        + "Filedata="+ file
        + "&" + mdFieldName + "=" + mdFieldValue
    ;

    return restPost(url)
}

function createAssetWithMetadataOnlyViaRest(amd){
    var rest_response
    url = SERVER_BASE_URL + "services/create"
        + "&metadata=" + amd
    ;

    return restPost(url)
}
function createAssetWithoutFileAndUpdateAMetadataViaRest(file , mdFieldName,mdFieldValue){
    var rest_response
    url = SERVER_BASE_URL + "services/create?"
        mdFieldName + "=" + mdFieldValue
    ;

    return restPost(url)
}

function setCollectionsViaRest(originalElvisId , collectionElvisId){
    var rest_response
    url = SERVER_BASE_URL + "services/createRelation?"
        + "relationType=contains"
        + "&target1Id=" + collectionElvisId
        + "&target2Id=" + originalElvisId
    ;
    return restPost(url)
}

function setRelationsViaRest(assetId , newAssetId){
    var rest_response
    url = SERVER_BASE_URL + "services/createRelation?"
        + "relationType=variation-of"
        + "&target1Id=" +  assetId
        + "&target2Id=" +  newAssetId
    ;

    return restPost(url)
}

function copyAssetOrFolderToElvisViaRest(src , dest){
    var rest_response
    url = SERVER_BASE_URL + "services/copy?"
       + "source=" +  src
       + "&target=" +  dest
       ;
    return restPost(url)
}

function addVariationToEnterpriseViaRest(){

}

