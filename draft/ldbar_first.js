//PLUGIN_TYPE;
//if (PLUGIN_TYPE = "")
//SOURCE_TYPE;
//TARGET_TYPE;

var ldbar_html = "";
document.write("PLUGIN_TYPE: " + PLUGIN_TYPE);

switch(PLUGIN_TYPE)
{
case "CustomCopy":
	ldbar_html = getCustomCopyLdbarHtml("CustomCopy","ServerSpecificFolder","ServerElvisZone");
  break;
case "NewVersion":
  	ldbar_html = getNewVersionLdbarHtml("NewVersion","AssetLocation","ServerElvisZone");
  break;
case "NewVariation":
  	ldbar_html = getNewVariationLdbarHtml("NewVariation","ServerSpecificFolder","AssetLocation");
  break;
case "Duplicate":
  	ldbar_html = getDuplicateLdbarHtml("Duplicate","AssetLocation","AssetLocation");
  break;
default:
  ldbar_html = "OOPS, Some thing is wrong, If you find me call me :) or send a mail to support@creativefolks.com.au ";
}


function getCustomCopyLdbarHtml(plugin_type,src_type,dest_type){
	
	return '\
            <table width="100%" border="0" cellspacing="0" cellpadding="0">\
              <tr>\
                <td colspan="0" class="table_cell_small_top" ></td>\
              </tr>\
              <tr>\
                <td width="100%" class="table_cell_big_mid"><table width="470" border="0" cellpadding="0" cellspacing="0">\
                    <tr>\
                      <td width="34"><img src="images/icons/duplicate_icon24.png" alt="" width="24" height="24" /></td>\
                      <td width="370" style="font-size: x-large; font-family: Times New Roman, Times, serif;">Custom  Variation</td>\
                      <td width="26">&nbsp;</td>\
                    </tr>\
                    <tr>\
                      <td>&nbsp;</td>\
                      <td style="font-size: small">Copy current asset and set it to the same location, meta data, collection and dossiers.</td>\
                      <td>&nbsp;</td>\
                    </tr>\
                  </table></td>\
              </tr>\
              <tr>\
                <td colspan="3" class="table_cell_small_dwon"></td>\
              </tr>\
            </table>\
';

}
/*
function getNewVersionLdbarHtml(plugin_type,src_type,dest_type){
	
	var ldbar_start = '\
            <table width="100%" border="0" cellspacing="0" cellpadding="0">\
              <tr>\
                <td colspan="0" class="table_cell_small_top" ></td>\
              </tr>\
              <tr>\
                <td width="100%" class="table_cell_big_mid"><table width="470" border="0" cellpadding="0" cellspacing="0">\
                    <tr>\
                      <td width="34"><img src="images/icons/duplicate_icon24.png" alt="" width="24" height="24" /></td>\
                      <td width="370" style="font-size: x-large; font-family: Times New Roman, Times, serif;">Custom  Variation</td>\
                      <td width="26">&nbsp;</td>\
                    </tr>\
                    <tr>\
                      <td>&nbsp;</td>\
                      <td style="font-size: small">Copy current asset and set it to the same location, meta data, collection and dossiers.</td>\
                      <td>&nbsp;</td>\
                    </tr>\
                  </table></td>\
              </tr>\
              <tr>\
                <td colspan="3" class="table_cell_small_dwon"></td>\
              </tr>\
            </table>\
';

	return ldbar_start;
	
}

function getNewVariationLdbarHtml(plugin_type,src_type,dest_type){
	
	var ldbar_start = '\
            <table width="100%" border="0" cellspacing="0" cellpadding="0">\
              <tr>\
                <td colspan="0" class="table_cell_small_top" ></td>\
              </tr>\
              <tr>\
                <td width="100%" class="table_cell_big_mid"><table width="470" border="0" cellpadding="0" cellspacing="0">\
                    <tr>\
                      <td width="34"><img src="images/icons/duplicate_icon24.png" alt="" width="24" height="24" /></td>\
                      <td width="370" style="font-size: x-large; font-family: Times New Roman, Times, serif;">Custom  Variation</td>\
                      <td width="26">&nbsp;</td>\
                    </tr>\
                    <tr>\
                      <td>&nbsp;</td>\
                      <td style="font-size: small">Copy current asset and set it to the same location, meta data, collection and dossiers.</td>\
                      <td>&nbsp;</td>\
                    </tr>\
                  </table></td>\
              </tr>\
              <tr>\
                <td colspan="3" class="table_cell_small_dwon"></td>\
              </tr>\
            </table>\
';

	return ldbar_start;
	
}

function getDuplicateLdbarHtml(plugin_type,src_type,dest_type){
	
	var ldbar_start = '\
            <table width="100%" border="0" cellspacing="0" cellpadding="0">\
              <tr>\
                <td colspan="0" class="table_cell_small_top" ></td>\
              </tr>\
              <tr>\
                <td width="100%" class="table_cell_big_mid"><table width="470" border="0" cellpadding="0" cellspacing="0">\
                    <tr>\
                      <td width="34"><img src="images/icons/duplicate_icon24.png" alt="" width="24" height="24" /></td>\
                      <td width="370" style="font-size: x-large; font-family: Times New Roman, Times, serif;">Custom  Variation</td>\
                      <td width="26">&nbsp;</td>\
                    </tr>\
                    <tr>\
                      <td>&nbsp;</td>\
                      <td style="font-size: small">Copy current asset and set it to the same location, meta data, collection and dossiers.</td>\
                      <td>&nbsp;</td>\
                    </tr>\
                  </table></td>\
              </tr>\
              <tr>\
                <td colspan="3" class="table_cell_small_dwon"></td>\
              </tr>\
            </table>\
';

	return ldbar_start;
	
}*/