
function setSrcPathDefault (prop){
//    alert("setSrcPathDefault PLUGIN_TYPE: "+ PLUGIN_TYPE);

    prop.src_path = getPathErrorHtmlTemplate("No path has been defined yet!");
    return prop;
}

function setSrcPath(prop, path){

//    alert("Src setSrcPath is started " + path);
    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            prop = selectTemplate(prop, path, CUSTOMCOPY_SRC );break;
        case "NewVersion":
            prop = selectTemplate(prop, path, NewVersion_SRC );break;
        case "NewVariation":
            prop = selectTemplate(prop, path, NewVariation_SRC );break;
        case "Duplicate":
            prop = selectTemplate(prop, path, Duplicate_SRC );break;
    }
    return prop;

    function selectTemplate(prop, path, type){
        prop.src_path = getPathErrorHtmlTemplate("Wrong Configuration! Please check this variable at config file: "+ type );
        switch(type)
        {
            case "upload":
                prop.src_path = getUploadHtmlTemplate(Properties.dest_path);break;
//                alert ("prop.src_path: upload" + prop.getSrc_path());
            case "server":
                prop.src_path = getFolderHtmlTemplate(SERVER_FILESTORE_PATH);break;
            case "elvis":
                prop.src_path = getFolderHtmlTemplate(ELVIS_FILESTORE_PATH);break;
//                alert ("prop.src_path: elvis" + prop.getSrc_path());

            case "asset":
                prop.src_path = getPathHtmlTemplate(SERVER_FILESTORE_PATH,path);break;
            case "all":
                prop.src_path = getAllSrcHtmlTemplate(SERVER_FILESTORE_PATH,ELVIS_FILESTORE_PATH,path);break;
        }
        return prop;
    }

}

function setSrcPathError (prop){

    prop.src_path = getPathErrorHtmlTemplate("No source path is created!");
    return prop;
}