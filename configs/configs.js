// Main Configurations:

var PLUGIN_TYPE = "NewVariation"; //CustomCopy,NewVersion,NewVariation,Duplicate
var SERVER_FILESTORE_PATH = "c://test/customcopy/server";// no slash at the end
var ELVIS_FILESTORE_PATH = "c://test/customcopy/server/elvis";// no slash at the end
var ELVIS_SERVER_BASE_URL = ""; //no slash at the end, eg.: http://localhost:8080
var enterpriseEndpoint = 'http://localhost/Enterprise822/index.php'; //no slash at the end
var USERNAME = "smAdmin";
var PASSWORD = "Apple00";

// Default Configurations:
/*
    upload: an Upload function to let user to add new files from client syetm
    server: a 3 column JS will be used for access to specified filestore folder at server
    elvis: a 3 column JS will be used for access to specified filestore folder at elvis file store
    asset: selected asset path (will be over written at destination)
    same: selected asset parent folder path (New name will be asked)
    all: user can select it (don't use this as it has not implemented yet)

    enable: Enable and Show the checkbox at screen
    disable: checkbox will not be rendered at all

    checked : default value is set to checked but user can change it
    unchecked : default value is set to unchecked but user can change it
*/
//Features: "all" and "upload" options are planed for next phase!

var CUSTOMCOPY_SRC = "upload";//asset, upload, [elvis, server, all]
var CUSTOMCOPY_DEST = "elvis";//elvis, [all]
var CUSTOMCOPY_METADATA = "enable";// enable, disable | enable to appear
var CUSTOMCOPY_METADATA_DEFAULT = "unchecked";//checked, unchecked
var CUSTOMCOPY_DOSSIER = "enable";// enable, disable | enable to appear
var CUSTOMCOPY_DOSSIER_DEFAULT = "checked";//checked, unchecked
var CUSTOMCOPY_COLLECTION = "disable";// [enable, disable | enable to appear]
var CUSTOMCOPY_COLLECTION_DEFAULT = "unchecked";//[checked, unchecked]

var NewVersion_SRC = "upload";
var NewVersion_DEST = "elvis";
var NewVersion_METADATA = "asset";// enable, disable | enable to appear
var NewVersion_METADATA_DEFAULT = "checked";//checked, unchecked
var NewVersion_DOSSIER = "enable";// enable, disable | enable to appear
var NewVersion_DOSSIER_DEFAULT = "checked";//checked, unchecked
var NewVersion_COLLECTION = "disable";// enable, disable | enable to appear
var NewVersion_COLLECTION_DEFAULT = "checked";//checked, unchecked

var NewVariation_SRC = "upload";
var NewVariation_DEST = "elvis";
var NewVariation_METADATA = "enable";// enable, disable | enable to appear
var NewVariation_METADATA_DEFAULT = "checked";//checked, unchecked
var NewVariation_DOSSIER = "enable";// enable, disable | enable to appear
var NewVariation_DOSSIER_DEFAULT = "checked";//checked, unchecked
var NewVariation_COLLECTION = "disable";// enable, disable | enable to appear
var NewVariation_COLLECTION_DEFAULT = "checked";//checked, unchecked

var Duplicate_SRC = "asset";
var Duplicate_DEST = "elvis";
var Duplicate_METADATA = "enable";// enable, disable | enable to appear
var Duplicate_METADATA_DEFAULT = "checked";//checked, unchecked
var Duplicate_DOSSIER = "enable";// enable, disable | enable to appear
var Duplicate_DOSSIER_DEFAULT = "checked";//checked, unchecked
var Duplicate_COLLECTION = "disable";// enable, disable | enable to appear
var Duplicate_COLLECTION_DEFAULT = "checked";//checked, unchecked

// Development Configurations:

//please don't change after this line if you don't know what is it (they only works for development and debugging purpose):
var MyTemp ="default"; //use only as a temporary global variable.
var SERVER_BASE_URL = ELVIS_SERVER_BASE_URL + "/";

//set app to test mode, only for variation
var Local_TEST_DEBUG = false; //Don't forget change popup to browser at action.config.xml

 var src_test_elvis_id = "4Bsou_OLqXE8MH7BLeT_bZ";
var src_test_assetPath = "/Demo Zone/Images/Abstract/Stream.jpg";
 var dest_test_elvis_id = "9xIsF6RX4gpBeoFE7HJ2AM";
var dest_test_assetPath = "/Demo Zone/Images/Abstract/Wave Dark.jpg";
var collection_testelvis_id = "30bBGrRb4FQBWcPP3Dv791";
var collection_test_assetPath = "/Demo Zone/Images/Abstract/Waves.collection"

