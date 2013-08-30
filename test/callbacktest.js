/**
 * Created with JetBrains WebStorm.
 * User: ramin
 * Date: 22/08/13
 * Time: 4:42 PM
 * To change this template use File | Settings | File Templates.
 */

var amd;
function fn1( value ) {
    amd = value;
    console.log("fn1 value: " + value);
    console.log("fn1 amd: " + amd);

}

function fn2( value ) {
    amd = "ssss";
    console.log("fn2 value: " + value);
    console.log("fn2 amd: " + amd);
}

function fn3( value ) {
    console.log("fn3 value: " + value);
    console.log("fn3 amd: " + amd);
}


var callbacks = $.Callbacks();

callbacks.add( fn1 );
callbacks.add( fn2 );
callbacks.add( fn3 );
callbacks.fire( "AAAA" );

callbacks.add( fn1 );
callbacks.add( fn2 );
callbacks.add( fn3 );
callbacks.fire( "BBBB" );


//callbacks.add( fn2 );


//callbacks.add( fn2 );
//
//callbacks.fire( "CCCC" );
//
//callbacks.add( fn3 );
//
//callbacks.fire( "DDDDD" );



//                var r = $.Deferred();
//                setTimeout(function () {
//                    // and call `resolve` on the deferred object, once you're done
//                    r.resolve();
//                }, 2500);

//                return r;
//}

//            searchElvis().done(function(amd){
//
//                alert("amd from setOriginalAssetMetadata: " + amd);
//                Properties.originalAssetPath = "test"+ amd;
//
//            });