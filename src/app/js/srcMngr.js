// JavaScript Document
var src_path = "";

function setSrcPath(){

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            Properties.src_path = getCustomCopySrcPath();
            break;
        case "NewVersion":
            Properties.src_path = getNewVersionSrcPath();
            break;
        case "NewVariation":
            Properties.src_path = getNewVariationSrcPath();
            break;
        case "Duplicate":
            Properties.src_path = getDuplicateSrcPath();
            break;
    }

}


function getCustomCopySrcPath(){


    return 'C:\\\\test\\source1.png';

}

function getNewVersionSrcPath(){

    return 'C:\\\\test\\source2.png';

}

function getNewVariationSrcPath(){

    return 'C:\\\\test\\source3.png';

}

function getDuplicateSrcPath(){

    return 'C:\\\\test\\source4.png';

}

//todo clean these ...
/*
// JavaScript Document
var src_path = "";

function setSrc_path(){

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            src_path = getCustomCopyHtml();
            break;
        case "NewVersion":
            src_path = getNewVersionHtml();
            break;
        case "NewVariation":
            src_path = getNewVariationHtml();
            break;
        case "Duplicate":
            src_path = getDuplicateHtml();
            break;
    }

}


function getCustomCopyHtml(){

    return 'C:\\\\test\\source1.png';

}

function getNewVersionHtml(){

    return 'C:\\\\test\\source2.png';

}

function getNewVariationHtml(){

    return 'C:\\\\test\\source3.png';

}

function getDuplicateHtml(){

    return 'C:\\\\test\\source4.png';

}*/
