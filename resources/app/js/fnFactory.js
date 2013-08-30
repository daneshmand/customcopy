var callbacks = $.Callbacks();

function step1() {
    var prop1 = retrieveOriginalObjectProperties();
    setView(prop1);
    console.log("Step1: " + prop1.getStep());

}
callbacks.empty()
callbacks.add( step1 );
callbacks.fire();

function step2() {
    var prop2 = copyAsset();
    setView(prop2);
    console.log("Step2: " + prop2.getStep());

}
//callbacks.empty()
//callbacks.add( step2 );
//callbacks.fire();

function step3() {
    var prop3 = updateMetadata();
    setView(prop3);
    console.log("Step3: " + prop3.getStep());

}

//callbacks.empty()
//callbacks.add( step3 );
//callbacks.fire();

function step4() {
    var prop4 = updateCollection();
    setView(prop4);
    console.log("Step4: " + prop4.getStep());

}
//callbacks.empty()
//callbacks.add( step4 );
//callbacks.fire();


function step5() {
    var prop5 = updateRelation();
    setView(prop5);
    console.log("Step5: " + prop5.getStep());

}

//callbacks.empty()
//callbacks.add( step5 );
//callbacks.fire();

function step6() {
    var prop6 = AddVariationToEnterprise();
    setView(prop6);
    console.log("Step6: " + prop6.getStep());

}

//callbacks.empty()
//callbacks.add( step6 );
//callbacks.fire();

function setView(prop){

    ldbar_html = prop.getLdbar_html();
    src_path = prop.getSrc_path();
    dest_path = prop.getDest_path();
    nav_buttons = prop.getNav_buttons();
    title_src = prop.getTitle_src();
    title_dest = prop.getTitle_dest();
    properties = prop;

}

$(document).ready(function () {
    //$("show#ldbar_message").html("test html");
    $("div#ldbar_html").html(ldbar_html);
    $("div#src_path").html(src_path);
    $("div#dest_path").html(dest_path);
    $("div#nav_buttons").html(nav_buttons);
    $("div#title_src").html(title_src);
    $("div#title_dest").html(title_dest);
});