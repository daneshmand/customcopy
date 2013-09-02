
function setDestPath(prop, path){
//    alert("amd from setOriginalAssetMetadata: " +JSON.stringify(amd));

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            prop.dest_path = "c://test/customcopy/dest" + path ;
            return prop;
            break;
        case "NewVersion":
            prop.dest_path = path;
            return prop;
            break;
        case "NewVariation":
            prop.dest_path = path;
            return prop;
            break;
        case "Duplicate":
            prop.dest_path = path;
            return prop;
            break;
    }
}