
var ldbar_html = "";

//manage process RetrieveOriginalObjectProperties
function setLdbarHtmlStarted(){

    switch(PLUGIN_TYPE)
    {
    case "CustomCopy":
        var title_ldbar = "Custom Copy";
        var icon_ldbar = "images/icons/customCopy.png";
        var message_ldbar = "Copy a new asset to a Elvis file store and update All Metadata.";
        ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
      break;
    case "NewVersion":
        var title_ldbar = "New Version";
        var icon_ldbar = "images/icons/newVersion.png";
        var message_ldbar = "Copy new asset and replace original asset at Elvis.";
        ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
      break;
    case "NewVariation":
        var title_ldbar = "New Variation";
        var icon_ldbar = "images/icons/newVariation.png";
        var message_ldbar = "Copy new asset to Elvis filestore and update All Metadata.";
        ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
      break;
    case "Duplicate":
        var title_ldbar = "Duplicate";
        var icon_ldbar = "images/icons/duplicate.png";
        var message_ldbar = "Copy selected asset to the the new location at Elvis and update meta All Metadata.";
        ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
      break;
    default:
      ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }

};


function setLdbarHtmlInProcess(message_ldbar){

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "Custom Copy in process";
            var icon_ldbar = "images/loadbar/cloader.gif";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        case "NewVersion":
            var title_ldbar = "New Version in process";
            var icon_ldbar = "images/loadbar/cloader.gif";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        case "NewVariation":
            var title_ldbar = "New Variation in process";
            var icon_ldbar = "images/loadbar/cloader.gif";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        case "Duplicate":
            var title_ldbar = "Duplicate in process";
            var icon_ldbar = "images/loadbar/cloader.gif";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        default:
            ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }

}

function setLdbarHtmlFinished(message_ldbar){

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "<span style=\'color: #03e500\'>The Custom Copy process has been successfully completed.</span>";
            var icon_ldbar = "images/loadbar/done.png";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        case "NewVersion":
            var title_ldbar = "<span style=\'color: #03e500\'>The New  Version process has been successfully completed.</span>";
            var icon_ldbar = "images/loadbar/done.png";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        case "NewVariation":
            var title_ldbar = "<span style=\'color: #03e500\'>The New  Variation process has been successfully completed.</span>";
            var icon_ldbar = "images/loadbar/done.png";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        case "Duplicate":
            var title_ldbar = "<span style=\'color: #03e500\'>The Duplicate process has been successfully completed.</span>";
            var icon_ldbar = "images/loadbar/done.png";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        default:
            ldbar_html = "<h2>Oops,</h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }

}

function setLdbarHtmlError(message_ldbar){

    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
            var title_ldbar = "<span style=\'color: #F00\'>Oops, The Custom Copy process is Canceled.</span>";
            var icon_ldbar = "images/loadbar/cancel.png";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        case "NewVersion":
            var title_ldbar = "<span style=\'color: #F00\'>Oops, The New  Version process is Canceled.</span>";
            var icon_ldbar = "images/loadbar/cancel.png";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        case "NewVariation":
            var title_ldbar = "<span style=\'color: #F00\'>Oops, The New  Variation process is Canceled.</span>";
            var icon_ldbar = "images/loadbar/cancel.png";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        case "Duplicate":
            var title_ldbar = "<span style=\'color: #F00\'>Oops, The Duplicate process is Canceled.</span>";
            var icon_ldbar = "images/loadbar/cancel.png";
            ldbar_html = getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar);
            break;
        default:
            ldbar_html = "<h2><span style=\'color: #F00\'>Oops,</span></h2> <br>\n\
    Some thing is wrong at your config or Message process, Please check PLUGIN_TYPE value at index page. \n\
    The Type of plugin must be declared. Select one of these options: CustomCopy, NewVersion, NewVariation, or Duplicate.";
    }

}

function getTemplateHtml(title_ldbar,message_ldbar,icon_ldbar){
    return '\
                <table width="100%" border="0" cellspacing="0" cellpadding="0">\
                  <tr>\
                    <td colspan="0" class="table_cell_small_top" ></td>\
                  </tr>\
                  <tr>\
                    <td width="100%" class="table_cell_big_mid">\
                        <table width="100%" border="0" cellpadding="5" cellspacing="0">\
                            <tr>\
                              <td width="34"><img src="' + icon_ldbar + '" alt="" width="36" height="36" /></td>\
                              <td width="100%" style="font-size: x-large; font-family: Times New Roman, Times, serif;">' + title_ldbar + '</td>\
                              <td width="26">&nbsp;</td>\
                            </tr>\
                            <tr>\
                              <td>&nbsp;</td>\
                              <td style="font-size: small">' + message_ldbar + '.</td>\
                              <td>&nbsp;</td>\
                            </tr>\
                        </table>\
                    </td>\
                  </tr>\
                  <tr>\
                    <td colspan="3" class="table_cell_small_dwon"></td>\
                  </tr>\
                </table>\
    ';
}