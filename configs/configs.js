// Main Configurations:

var PLUGIN_TYPE = "CustomCopy"; //CustomCopy,NewVersion,NewVariation,Duplicate

// Default Configurations:
/*
Guide to configure Plugin.
Please consider we think the default setting is the best.
    upload: an Upload function to let user to add new files from client syetm
    server: a 3 column JS will be used for access to specified folder at server
    elvis: a 3 column JS will be used for access to specified folder at elvis file store
    asset: selected asset path (will be over written at destination)
    folder: selected asset parent folder path (New name will be asked)
    all: user can select it
*/

var CUSTOMCOPY_SRC = "all";//upload, server, elvis, asset, all
var CUSTOMCOPY_DEST = "all";//upload, server, elvis, asset, folder, all
var CUSTOMCOPY_METADATA = "enable";// enable, disable
var CUSTOMCOPY_DOSSIER = "enable";// enable, disable
var CUSTOMCOPY_COLLECTION = "enable";// enable, disable

var NewVersion_SRC = "";//upload, server, elvis, asset, all
var NewVersion_DEST = "";//upload, server, elvis, asset, folder, all
var NewVersion_METADATA = "enable";// enable, disable
var NewVersion_DOSSIER = "enable";// enable, disable
var NewVersion_COLLECTION = "enable";// enable, disable

var NewVariation_SRC = "";//upload, server, elvis, asset, all
var NewVariation_DEST = "";//upload, server, elvis, asset, folder, all
var NewVersion_METADATA = "enable";// enable, disable
var NewVersion_DOSSIER = "enable";// enable, disable
var NewVersion_COLLECTION = "enable";// enable, disable

var Duplicate_SRC = "";//upload, server, elvis, asset, all
var Duplicate_DEST = "";//upload, server, elvis, asset, folder, all
var Duplicate_METADATA = "enable";// enable, disable
var Duplicate_DOSSIER = "enable";// enable, disable
var Duplicate_COLLECTION = "enable";// enable, disable

// Development Configurations:

//please don't change after this line if you don't know what is it (they only works for development and debugging purpose):
var MyTemp ="default"; //use only as a temporary global variable.