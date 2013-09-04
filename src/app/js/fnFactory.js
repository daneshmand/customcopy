var timeout;
var callbacks = $.Callbacks();

function step1() {
    retrieveOriginalObjectProperties();
}
callbacks.empty()
callbacks.add( step1 );
callbacks.fire();

function startProcess() {
    //alert("process is started");
    //var callbacks = $.Callbacks();

    function step2(Properties) {
        copyAsset(Properties);
    }
callbacks.empty()
callbacks.add( step2 );
callbacks.fire(Properties);

    function step3(Properties) {
        updateMetadata(Properties);
    }
callbacks.empty()
callbacks.add( step3 );
callbacks.fire(Properties);

    function step4(Properties) {
        updateCollection(Properties);
    }
callbacks.empty()
callbacks.add( step4 );
callbacks.fire(Properties);

    function step5(Properties) {
        updateRelation(Properties);
    }
callbacks.empty()
callbacks.add( step5 );
callbacks.fire(Properties);

    function step6(Properties) {
        addVariationToEnterprise(Properties);
    }
callbacks.empty()
callbacks.add( step6 );
callbacks.fire(Properties);

    function step7(Properties) {
        setLastView(Properties);
    }
    callbacks.empty()
    callbacks.add( step7 );
    callbacks.fire(Properties);
};


