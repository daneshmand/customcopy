// JavaScript Document
var title = "";
var title_src = "";
var title_dest = "";

switch(PLUGIN_TYPE)
{
    case "CustomCopy":
        title = getCustomCopyHtml();
        title_src = getCustomCopySrcHtml();
        title_dest = getCustomCopyDestHtml();
        break;
    case "NewVersion":
        title = getNewVersionHtml();
        title_src = getNewVersionSrcHtml();
        title_dest = getNewVersionDestHtml();
        break;
    case "NewVariation":
        title = getNewVariationHtml();
        title_src = getNewVariationSrcHtml();
        title_dest = getNewVariationDestHtml();
        break;
    case "Duplicate":
        title = getDuplicateHtml();
        title_src = getDuplicateSrcHtml();
        title_dest = getDuplicateDestHtml();
        break;
}

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