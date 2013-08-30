// JavaScript Document
var dest_path = "";

function setDestPath(){
    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            Properties.dest_path = getCustomCopyDestPath();
            break;
        case "NewVersion":
            Properties.dest_path = getNewVersionDestPath();
            break;
        case "NewVariation":
            Properties.dest_path = getNewVariationDestPath();
            break;
        case "Duplicate":
            Properties.dest_path = getDuplicateDestPath();
            break;
    }
}


function getCustomCopyDestPath(){

    return Properties.getOriginalAssetPath();

    //return 'C:\\\\test\\dest1.png';

}

function getNewVersionDestPath(){

    return 'C:\\\\test\\dest2.png';

}

function getNewVariationDestPath(){

    return 'C:\\\\test\\dest3.png';

}

function getDuplicateDestPath(){

    return 'C:\\\\test\\dest4.png';

}
//todo clean these ...
/*
// JavaScript Document
var dest_path = "";

switch(PLUGIN_TYPE)
{
    case "CustomCopy":
        dest_path = getCustomCopyHtml();
        break;
    case "NewVersion":
        dest_path = getNewVersionHtml();
        break;
    case "NewVariation":
        dest_path = getNewVariationHtml();
        break;
    case "Duplicate":
        dest_path = getDuplicateHtml();
        break;
}


function getCustomCopyHtml(){

    return 'C:\\\\test\\dest1.png';

}

function getNewVersionHtml(){

    return 'C:\\\\test\\dest2.png';

}

function getNewVariationHtml(){

    return 'C:\\\\test\\dest3.png';

}

function getDuplicateHtml(){

    return 'C:\\\\test\\dest4.png';

}*/
