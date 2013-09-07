// Main Configurations:

var PLUGIN_TYPE = "CustomCopy"; //CustomCopy,NewVersion,NewVariation,Duplicate
var SERVER_FILESTORE_PATH = "c://test/customcopy/server";// no slash at the end
var ELVIS_FILESTORE_PATH = "c://test/customcopy/server/elvis";// no slash at the end

// Default Configurations:
/*
Guide to configure Plugin.
Please consider we think the default setting is the best.
    upload: an Upload function to let user to add new files from client syetm
    server: a 3 column JS will be used for access to specified filestore folder at server
    elvis: a 3 column JS will be used for access to specified filestore folder at elvis file store
    asset: selected asset path (will be over written at destination)
    same: selected asset parent folder path (New name will be asked)
    all: user can select it (don't use this as it has not implemented yet)
*/
//Features: "all" and "upload" options are planed for next phase!

var CUSTOMCOPY_SRC = "server";//upload, server, elvis, asset, all
var CUSTOMCOPY_DEST = "elvis";//server, elvis, asset, same, all
var CUSTOMCOPY_METADATA = "enable";// enable, disable | enable to appear
var CUSTOMCOPY_DOSSIER = "enable";// enable, disable | enable to appear
var CUSTOMCOPY_COLLECTION = "enable";// enable, disable | enable to appear

var NewVersion_SRC = "server";//upload, server, elvis, asset, all
var NewVersion_DEST = "asset";//server, elvis, asset, same, all
var NewVersion_METADATA = "asset";// enable, disable | enable to appear
var NewVersion_DOSSIER = "enable";// enable, disable | enable to appear
var NewVersion_COLLECTION = "enable";// enable, disable | enable to appear

var NewVariation_SRC = "server";//upload, server, elvis, asset, all
var NewVariation_DEST = "same";//server, elvis, asset, same, all
var NewVariation_METADATA = "enable";// enable, disable | enable to appear
var NewVariation_DOSSIER = "enable";// enable, disable | enable to appear
var NewVariation_COLLECTION = "enable";// enable, disable | enable to appear

var Duplicate_SRC = "asset";//upload, server, elvis, asset, all
var Duplicate_DEST = "elvis";//server, elvis, asset, same, all
var Duplicate_METADATA = "enable";// enable, disable | enable to appear
var Duplicate_DOSSIER = "enable";// enable, disable | enable to appear
var Duplicate_COLLECTION = "enable";// enable, disable | enable to appear

// Development Configurations:

//please don't change after this line if you don't know what is it (they only works for development and debugging purpose):
var MyTemp ="default"; //use only as a temporary global variable.