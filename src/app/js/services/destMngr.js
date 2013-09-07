
function setDestPathDefault (prop){

    prop.dest_path = getPathErrorHtmlTemplate("No path has been defined yet!");
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

