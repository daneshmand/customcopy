/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 8/09/13
 * Time: 5:01 PM
 * To change this template use File | Settings | File Templates.
 */
function restPost(url){
    var rest_response;
    $.post(url, function(data) {
       rest_response = data;
    });

//    function one(result) {
//        var rest_response = result;
//        alert(rest_response);
//
//        // Do anything you like
//    }
//
//    function doJPost(url, callback) {
//        $.post(url, function(data) {
//
//            result.addCallback(
//                function (data)
//                {
//                    if (data != null)
//                    {
//                        callback(data);
//                    }
//                }
//            );
//        });
//
//    }
//
//    doJPost(url, function(result) { one(result); });

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

function setCollectionsViaRest(collectionElvisId, originalElvisId){
    var rest_response
    url = SERVER_BASE_URL + "services/createRelation?"
        + "relationType=contains"
        + "&target1Id=" + collectionElvisId
        + "&target2Id=" + originalElvisId
    ;
    alert("collection url: "+url);
    return restPost(url)
}

function setRelationsViaRest(assetId , newAssetId){
    var rest_response
    url = SERVER_BASE_URL + "services/createRelation?"
        + "relationType=variation"
        + "&target1Id=" +  assetId
        + "&target2Id=" +  newAssetId
    ;
    alert("url: "+url);

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



