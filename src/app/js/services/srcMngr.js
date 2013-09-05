
function setSrcPathDefault (prop){

    prop.src_path = getPathHtmlTemplate("","No path has been defined yet!");
    return prop;
}

function setSrcPath(prop, path){

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            prop.src_path = getUploadHtmlTemplate();break;
        case "NewVersion":
            prop.src_path = getPathHtmlTemplate("c://test/customcopy/src",path);break;
        case "NewVariation":
            prop.src_path = getPathHtmlTemplate("c://test/customcopy/src",path);break;
        case "Duplicate":
            prop.src_path = getPathHtmlTemplate("c://test/customcopy/src",path);break;
    }
    return prop;
}
function setSrcPathError (prop){

    prop.src_path = getPathHtmlTemplate("","No source path is created!");
    return prop;
}