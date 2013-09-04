
function setDestPathDefault (prop){

    prop.dest_path = getPathHtmlTemplate("","No path has been defined yet!");
    return prop;
}

function setDestPath(prop, path){

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            prop.dest_path = getPathHtmlTemplate("c://test/customcopy/dest",path);break;
        case "NewVersion":
            prop.dest_path = getPathHtmlTemplate("c://test/customcopy/dest",path);break;
        case "NewVariation":
            prop.dest_path = getPathHtmlTemplate("c://test/customcopy/dest",path);break;
        case "Duplicate":
            prop.dest_path = getPathHtmlTemplate("c://test/customcopy/dest",path);break;
    }
    return prop;
}
function setDestPathError (prop){

    prop.dest_path = getPathHtmlTemplate("","No destinations path is created!");
    return prop;
}