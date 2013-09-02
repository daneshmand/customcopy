
function setSrcPath(prop, path){
//    alert("amd from setOriginalAssetMetadata: " +JSON.stringify(amd));

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            prop.src_path = "c://test/customcopy/src/" + path;//amd.assetPath;
            return prop;
            break;
        case "NewVersion":
            prop.src_path = path;
            return prop;
            break;
        case "NewVariation":
            prop.src_path = path;
            return prop;
            break;
        case "Duplicate":
            prop.src_path = path;
            return prop;
            break;
    }
}