
function setTitles(prop){
//    alert("setTitles PLUGIN_TYPE: "+ PLUGIN_TYPE);

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            prop.title = getCustomCopyHtml();
            prop.title_src = getCustomCopySrcHtml();
            prop.title_dest = getCustomCopyDestHtml();break;
        case "NewVersion":
            prop.title = getNewVersionHtml();
            prop.title_src = getNewVersionSrcHtml();
            prop.title_dest = getNewVersionDestHtml();break;
        case "NewVariation":
            prop.title = getNewVariationHtml();
            prop.title_src = getNewVariationSrcHtml();
            prop.title_dest = getNewVariationDestHtml();break;
        case "Duplicate":
            prop.title = getDuplicateHtml();
            prop.title_src = getDuplicateSrcHtml();
            prop.title_dest = getDuplicateDestHtml();break;
    }
    return prop;;

//title
    function getCustomCopyHtml(){return 'Elvis | Custom Copy';}
    function getNewVersionHtml(){return 'Elvis | New Version';}
    function getNewVariationHtml(){return 'Elvis | New Variation';}
    function getDuplicateHtml(){return 'Elvis | Duplicate';}

// source title
    function getCustomCopySrcHtml(){return 'Source: (Choose from File System)';}
    function getNewVersionSrcHtml(){return 'Source: (Choose from File System)';}
    function getNewVariationSrcHtml(){return 'Source:(Choose from File System)';}
    function getDuplicateSrcHtml(){return 'Source: (Selected Asset )';}

// Destinations title
    function getCustomCopyDestHtml(){return 'Destinations:(Choose a folder at Elvis filestore)';}
    function getNewVersionDestHtml(){return 'Destinations:(Selected Asset location)';}
    function getNewVariationDestHtml(){return 'Destinations: (Choose a folder at Elvis filestore)';}
    function getDuplicateDestHtml(){return 'Destinations: (Choose a folder at Elvis filestore)';}

}

function setTitlesForError(prop){

    prop.title_src = "";
    prop.title_dest = "";
        return prop;
}