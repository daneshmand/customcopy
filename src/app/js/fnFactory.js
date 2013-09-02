var callbacks = $.Callbacks();
var trace;

function step1() {
//    alert("inside first line step1");
    retrieveOriginalObjectProperties();
}
callbacks.empty()
callbacks.add( step1 );
callbacks.fire();

function step2() {
    copyAsset();
}
callbacks.empty()
callbacks.add( step2 );
callbacks.fire();

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
