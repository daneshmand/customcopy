// JavaScript Document
var nav_buttons = "";

switch(PLUGIN_TYPE)
{
    case "CustomCopy":
        nav_buttons = getCustomCopyHtml();
        break;
    case "NewVersion":
        nav_buttons = getNewVersionHtml();
        break;
    case "NewVariation":
        nav_buttons = getNewVariationHtml();
        break;
    case "Duplicate":
        nav_buttons = getDuplicateHtml();
        break;
}


function getCustomCopyHtml(){

    return '\
<a href="#" onclick="proceed(src,des)"><img src="images/buttons/proceed.png" alt="Proceed" width="101" height="28" /></a>\
';

}

function getNewVersionHtml(){

    return '\
<a href="#" onclick="proceed(src,des)"><img src="images/buttons/proceed.png" alt="Proceed" width="101" height="28" /></a>\
';
}

function getNewVariationHtml(){

    return '\
<a href="#" onclick="proceed(src,des)"><img src="images/buttons/proceed.png" alt="Proceed" width="101" height="28" /></a>\
';
}

function getDuplicateHtml(){

    return '\
<a href="#" onclick="proceed(src,des)"><img src="images/buttons/proceed.png" alt="Proceed" width="101" height="28" /></a>\
';
}