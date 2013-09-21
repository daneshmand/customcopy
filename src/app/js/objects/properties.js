/**
 * Created with JetBrains WebStorm.
 * User: ramin
 * Date: 22/08/13
 * Time: 9:22 AM
 * To change this template use File | Settings | File Templates.
 */

var Properties = Object.create(null);

Properties.prototype = {
    getTitle: function(){
        return this.title;
    },
    getTitle_src: function(){
        return this.title_src;
    },
    getTitle_dest: function(){
        return this.title_dest;
    },
    getTitle_ldbar: function(){
        return this.title_ldbar;
    },
    getMessage_ldbar: function(){
        return this.message_ldbar;
    },
    getIcon_ldbar: function(){
        return this.icon_ldbar;
    },
    getNav_buttons: function(){
        return this.nav_buttons;
    },
    getDest_path: function(){
        return this.dest_path;
    },
    getSrc_path: function(){
        return this.src_path;
    },
    getLdbar_html: function(){
        return this.ldbar_html;
    },
    getStep: function(){
        return this.step;
    },
    getCheck_boxes: function(){
        return this.check_boxes;
    },
    getCheck_box_dossier: function(){
        return this.check_box_dossier;
    },
    getCheck_box_collection: function(){
        return this.check_box_collection;
    },
    getCheck_box_metadata: function(){
        return this.check_box_metadata;
    },
    getMetadata: function(){
        return this.metadata;
    },
    getSrcAssetId: function(){
        return this.srcAssetId;
    },
    getDestAssetId: function(){
        return this.destAssetId;
    },
    asString: function () {
    var result = "\n" +
            " -  Step: " + this.getStep() + "\n" +
            " -  Title: " + this.getTitle() + "\n" +
            " -  Title_src: " + this.getTitle_src() + "\n" +
            " -  Title_dest: " + this.getTitle_dest() + "\n" +
            " -  Title_ldbar: " + this.getTitle_ldbar() + "\n" +
            " -  Message_ldbar: " + this.getMessage_ldbar() + "\n" +
            "-------------------------------------------------------\n" +
//    " -  Icon_ldbar " + this.getIcon_ldbar() + "\n" +
            " -  Nav_buttons: " + this.getNav_buttons() + "\n" +
//    " -  Ldbar_html " + this.getLdbar_html() + "\n" +
            " -  Check_boxes: " + this.getCheck_boxes() + "\n" +
            " -  Check_box_dossier: " + this.getCheck_box_dossier() + "\n" +
            " -  Check_box_collection: " + this.getCheck_box_collection() + "\n" +
            " -  Check_box_metadata: " + this.getCheck_box_metadata() + "\n" +
            "-------------------------------------------------------\n" +
            " -  Dest_path: " + this.getDest_path() + "\n" +
            " -  Src_path: " + this.getSrc_path() + "\n" +
            "-------------------------------------------------------\n" +
//    " -  Metadata " + this.getMetadata() + "\n" +
            " -  SrcAssetId: " + this.getSrcAssetId() + "\n" +
            " -  DestAssetId: " + this.getDestAssetId() + "\n"
        ;
    return result;
    }

}


var Properties = Object.create(Properties.prototype, {

    rawTitle: { writable: true, configurable:true, value: '' },
    title: {
        configurable:true,
        get: function ()      { return this.rawtitle;  },
        set: function (value) { this.rawtitle = value; }
    },
    rawTitle_src: { writable: true, configurable:true, value: '' },
    title_src: {
        configurable:true,
        get: function ()      { return this.rawtitle_src;  },
        set: function (value) { this.rawtitle_src = value; }
    },
    rawTitle_dest: { writable: true, configurable:true, value: '' },
    title_dest: {
        configurable:true,
        get: function ()      { return this.rawtitle_dest;  },
        set: function (value) { this.rawtitle_dest = value; }
    },
    rawTitle_ldbar: { writable: true, configurable:true, value: '' },
    title_ldbar: {
        configurable:true,
        get: function ()      { return this.rawtitle_ldbar;  },
        set: function (value) { this.rawtitle_ldbar = value; }
    },
    rawMessage_ldbar: { writable: true, configurable:true, value: '' },
    message_ldbar: {
        configurable:true,
        get: function ()      { return this.rawMessage_ldbar;  },
        set: function (value) { this.rawMessage_ldbar = value; }
    },
    rawIcon_ldbar: { writable: true, configurable:true, value: '' },
    icon_ldbar: {
        configurable:true,
        get: function ()      { return this.rawIcon_ldbar;  },
        set: function (value) { this.rawIcon_ldbar = value; }
    },
    rawNav_buttons: { writable: true, configurable:true, value: '' },
    nav_buttons: {
        configurable:true,
        get: function ()      { return this.rawNav_buttons;  },
        set: function (value) { this.rawNav_buttons = value; }
    },
    rawDest_path: { writable: true, configurable:true, value: '' },
    dest_path: {
        configurable:true,
        get: function ()      { return this.rawDest_path;  },
        set: function (value) { this.rawDest_path = value; }
    },
    rawSrc_path: { writable: true, configurable:true, value: '' },
    src_path: {
        configurable:true,
        get: function ()      { return this.rawSrc_path;  },
        set: function (value) { this.rawSrc_path = value; }
    },
    rawLdbar_html: { writable: true, configurable:true, value: '' },
    ldbar_html: {
        configurable:true,
        get: function ()      { return this.rawLdbar_html;  },
        set: function (value) { this.rawLdbar_html = value; }
    },
    rawStep: { writable: true, configurable:true, value: 'retrieveOriginalObjectProperties' },
    step: {
        configurable:true,
        get: function ()      { return this.rawStep;  },
        set: function (value) { this.rawStep = value; }
    },
    rawCheck_boxes: { writable: true, configurable:true, value:null },
    check_boxes: {
        configurable:true,
        get: function ()      { return this.rawCheck_boxes;  },
        set: function (value) { this.rawCheck_boxes = value; }
    },
    rawCheck_box_dossier: { writable: true, configurable:true, value:null },
    check_box_dossier: {
        configurable:true,
        get: function ()      { return this.rawCheck_box_dossier;  },
        set: function (value) { this.rawCheck_box_dossier = value; }
    },
    rawCheck_box_collection: { writable: true, configurable:true, value:null },
    check_box_collection: {
        configurable:true,
        get: function ()      { return this.rawCheck_box_collection;  },
        set: function (value) { this.rawCheck_box_collection = value; }
    },
    rawCheck_box_metadata: { writable: true, configurable:true, value:null },
    check_box_metadata: {
        configurable:true,
        get: function ()      { return this.rawCheck_box_metadata;  },
        set: function (value) { this.rawCheck_box_metadata = value; }
    },
    rawMetadata: { writable: true, configurable:true, value:null },
    metadata: {
    configurable:true,
        get: function ()      { return this.rawMetadata;  },
    set: function (value) { this.rawMetadata = value; }
    },
    rawSrcAssetId: { writable: true, configurable:true, value:null },
    srcAssetId: {
        configurable:true,
        get: function ()      { return this.rawSrcAssetId;  },
        set: function (value) { this.rawSrcAssetId = value; }
    },
    rawDestAssetId: { writable: true, configurable:true, value:null },
    destAssetId: {
        configurable:true,
        get: function ()      { return this.rawDestAssetId;  },
        set: function (value) { this.rawDestAssetId = value; }
    }


});
/*
// test
Properties.title = "New title";
Properties.title_src = "New title_src";
Properties.title_dest = "New title_dest";
Properties.title_ldbar = "New title_ldbar";
Properties.message_ldbar = "New message_ldbar";
Properties.icon_ldbar = "New icon_ldbar";
Properties.nav_buttons = "New nav_buttons";
Properties.dest_path = "New dest_path";
Properties.src_path = "New src_path";
Properties.ldbar_html = "New ldbar_html";

document.write(Properties.getTitle()+ "<br>");
document.write(Properties.getTitle_src()+ "<br>");
document.write(Properties.getTitle_dest()+ "<br>");
document.write(Properties.getTitle_ldbar()+ "<br>");
document.write(Properties.getMessage_ldbar()+ "<br>");
document.write(Properties.getIcon_ldbar()+ "<br>");
document.write(Properties.getNav_buttons()+ "<br>");
document.write(Properties.getDest_path()+ "<br>");
document.write(Properties.getSrc_path()+ "<br>");
document.write(Properties.getLdbar_html()+ "<br>");
 */