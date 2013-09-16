
function setDestPathDefault (prop){


    prop.dest_path = "No path has been defined yet!";
    return prop;
}

function setDestPath(prop, path){

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            prop = selectTemplate(prop, path, CUSTOMCOPY_DEST );break;
        case "NewVersion":
            prop = selectTemplate(prop, path, NewVersion_DEST );break;
        case "NewVariation":
            prop = selectTemplate(prop, path, NewVariation_DEST );break;
        case "Duplicate":
            prop = selectTemplate(prop, path, Duplicate_DEST );break;
    }
    return prop;

    function selectTemplate(prop, path, type){
        prop.dest_path = getPathErrorHtmlTemplate("Wrong Configuration! Please check this variable at config file: "+ type);
        switch(type)
        {
            case "server":
                prop.dest_path = getPleaseSelectTemplate();break;
            case "elvis":
                prop.dest_path = getPleaseSelectTemplate();break;
            case "asset":
                prop.dest_path = getPathHtmlTemplate(SERVER_FILESTORE_PATH,path);break;
            case "same":
                prop.dest_path = getAssetFolderHtmlTemplate(SERVER_FILESTORE_PATH, path);break;
            case "all":
                prop.dest_path = getAllDestHtmlTemplate(SERVER_FILESTORE_PATH,ELVIS_FILESTORE_PATH,path);break;
        }
        return prop;
    }
}

function setDestPathError (prop){

    prop.dest_path = getPathErrorHtmlTemplate("No destination path is created!");
    return prop;
}

function getDestAssetPathForCreateAndUpdateMetadata(amd){

    var amd_s = JSON.stringify(amd);
//    alert('amd.....getDestAssetPathForCreateAndUpdateMetadata...1...'+JSON.stringify(amd));

    var mdPath;
    if ($('#check_box_metadata').prop('checked')) {

//        alert('amd.....getDestAssetPathForCr...if....');
        var assetName = amd.filename;
        var folderPath =amd.folderPath;
        mdPath = 'metadata=' + JSON.stringify(amd);
//        alert('amd.....getDestAssetPathForCreateAndUpdateMetadata...mdPath...: ' + mdPath);

    }else{
//        alert('amd.....getDestAssetPathForCr...else....');
        var assetName = amd.filename;
        var folderPath =amd.folderPath;
        mdPath = 'assetPath=' + folderPath +"/"+ assetName;
        alert('amd.....getDestAssetPathForCreateAndUpdateMetadata...3...' + mdPath);

    }

    return mdPath;
}

function isCheckedDossier ( amd){

    $('#check_box_dossier').click(function(){
        if ($('#check_box_dossier').attr('checked')) {
            //todo make asset path
            //todo make metadata
        }
    })

    return prop
}

function setAssetIDs(prop){
    prop.getMetadata();
    //todo set destAssetId
}