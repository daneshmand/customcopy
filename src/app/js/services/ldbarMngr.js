var message_ldbar = "";
function setLoadBarDefaultProperties(prop){

    switch(PLUGIN_TYPE)
    {
    case "CustomCopy":
        var title_ldbar = "Custom Copy";
        var icon_ldbar = "images/icons/customCopy.png";
        message_ldbar = "Copy a new asset to Elvis filestore and update all metadata.";
        prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
    case "NewVersion":
        var title_ldbar = "New Version";
        var icon_ldbar = "images/icons/newVersion.png";
        message_ldbar = "Copy a new asset and replace the original asset at Elvis.";
        prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
    case "NewVariation":
        var title_ldbar = "New Variation";
        var icon_ldbar = "images/icons/newVariation.png";
        message_ldbar = "Copy a new asset to Elvis filestore and update all metadata.";
        prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
    case "Duplicate":
        var title_ldbar = "Duplicate";
        var icon_ldbar = "images/icons/duplicate.png";
        message_ldbar = "Copy the selected asset to a new location at Elvis and update all metadata.";
        prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
    default:
        prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";break;
    }
    return prop;
}


function setLoadBarPreProcessProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>- The preparation task start ... ";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Preparing for Custom Copy";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "Preparing for New Version";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "Preparing for New Variation";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Preparing for Duplication";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;

}


function setLoadBarPreProcessFinishedProperties(prop){

    message_ldbar = message_ldbar + "Cool, all required data is retrieved.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Ready for Custom Copy";
            var icon_ldbar = "images/icons/customCopy.png";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVersion":
            var title_ldbar = "Ready for New Version";
            var icon_ldbar = "images/icons/newVersion.png";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "Ready for New Variation";
            var icon_ldbar = "images/icons/newVariation.png";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Ready for Duplication";
            var icon_ldbar = "images/icons/duplicate.png";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;

}

function setLoadBarCopyAssetStartProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Coping asset is starting.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarCopyAssetInProcessProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Coping asset is started ...";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarCopyAssetFinishedProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Coping asset is successfully finished.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}

function setLoadBarUpdateMetadataStartProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Updating the metadata of new asset is starting.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarUpdateMetadataInProcessProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Updating the metadata of new asset ...";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarUpdateMetadataFinishedProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Updating the metadata of new asset is successfully finished.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarUpdateCollectionStartProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Updating the collections of new asset is starting.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarUpdateCollectionInProcessProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Updating the collections of new asset ...";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarUpdateCollectionFinishedProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Updating the collections of new asset is successfully finished.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarUpdateRelationStartProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Updating the Relations of new asset is starting.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarUpdateRelationInProcessProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Updating the Relations (Links) of new asset ...";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarUpdateRelationFinishedProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Updating the Relations of new asset is successfully finished.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}

function setLoadBarAddVariationToEnterpriseStartProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Adding the variation to Enterprise Server is starting.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarAddVariationToEnterpriseInProcessProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Adding the variation to Enterprise Server is started ...";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}


function setLoadBarAddVariationToEnterpriseFinishedProperties(prop){

    var icon_ldbar = "images/loadbar/cloader.gif";
    message_ldbar = message_ldbar + "<br>" + "- Adding the variation to Enterprise Server is successfully finished.";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;

        case "NewVersion":
            var title_ldbar = "New Version in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }
    return prop;
}

function setLdbarHtmlFinished(prop){

    var icon_ldbar = "images/icons/finished.png";
    message_ldbar = message_ldbar + "<br>" + "- All process are finished. (You can close the windows)";

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "<span style=\'color: #03e500\'>The Custom Copy process has been successfully completed.</span>";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVersion":
            var title_ldbar = "<span style=\'color: #03e500\'>The New Version has been successfully created.</span>";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "<span style=\'color: #03e500\'>The New Variation has been successfully created.</span>";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "<span style=\'color: #03e500\'>The Duplicate has been successfully created.</span>";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";break;
    }
    return prop;
}

function setLdbarHtmlError(prop){

    var icon_ldbar = "images/icons/cancel.png";
    message_ldbar = message_ldbar + "<br>" + "<span style=\'color: #e8e8e8; font-style: italic \'>Check it! Seems you forget to select an asset at Elvis list. " +
        "Close current popup windows and select one or more images or a collection of images from the Elvis Desktop client. Good luck!</span>";
    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "<span style=\'color: #F00\'>Oops, The Custom Copy process is Canceled.</span>";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVersion":
            var title_ldbar = "<span style=\'color: #F00\'>Oops, The New  Version process is Canceled.</span>";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "NewVariation":
            var title_ldbar = "<span style=\'color: #F00\'>Oops, The New  Variation process is Canceled.</span>";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        case "Duplicate":
            var title_ldbar = "<span style=\'color: #F00\'>Oops, The Duplicate process is Canceled.</span>";
            prop.ldbar_html = getLdbarHtmlTemplate(title_ldbar,message_ldbar,icon_ldbar);break;
        default:
            prop.ldbar_html = "<h2><span style=\'color: #F00\'>Oops,</span></h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";break;
    }
    return prop;
}
