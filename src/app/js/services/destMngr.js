
function setDestPathDefault (prop){
//    alert("setDestPathDefault PLUGIN_TYPE:\n<br> " + PLUGIN_TYPE );


    prop.dest_path = ELVIS_3COL_DEFAULT_PATH;

//    prop.dest_path = "No path has been defined yet!";
    return prop;
}

function setDestPath(prop, path){
//    alert("Dest setDestPath is started: " + path );
    switch(PLUGIN_TYPE)
    {
        case "CustomCopy":
//            alert ("CustomCopy is started");
            prop = selectTemplate(prop, path, CUSTOMCOPY_DEST );break;
        case "NewVersion":
//            alert ("NewVersion is started");
            prop = selectTemplate(prop, path, NewVersion_DEST );break;
        case "NewVariation":
//            alert ("NewVariation is started");
            prop = selectTemplate(prop, path, NewVariation_DEST );break;
        case "Duplicate":
//            alert ("Duplicate is started");
            prop = selectTemplate(prop, path, Duplicate_DEST );break;
    }
    return prop;

    function selectTemplate(prop, path, type){
//        alert ("selectTemplate is started, Type: " + type);
//        alert ("selectTemplate is started, path: " + path);

        prop.dest_path = getPathErrorHtmlTemplate("Wrong Configuration! Please check this variable at config file: "+ type);
        switch(type)
        {
            case "server":
                prop.dest_path = getPleaseSelectTemplate();break;
//                alert ("prop.dest_path: server" + prop.getDest_path());
            case "elvis":
                prop.dest_path = getPathHtmlTemplate(ELVIS_FILESTORE_PATH,path);break;
//                alert ("prop.dest_path: elvis" + prop.getDest_path());
            case "asset":
                prop.dest_path = getPathHtmlTemplate(SERVER_FILESTORE_PATH,path);break;
//                alert ("prop.dest_path: asset" + prop.getDest_path());
            case "same":
//                alert ("prop.dest_path:before same" + prop.getDest_path());
                prop.dest_path = getAssetFolderHtmlTemplate(SERVER_FILESTORE_PATH, path);break;
//                alert ("prop.dest_path:after same" + prop.getDest_path());
            case "all":
                prop.dest_path = getAllDestHtmlTemplate(SERVER_FILESTORE_PATH,ELVIS_FILESTORE_PATH,path);break;
//                alert ("prop.dest_path: all" + prop.getDest_path());

        }
//        alert ("prop.dest_path: before return" + prop.getDest_path());
        return prop;
    }
}

function setDestPathError (prop){

    prop.dest_path = getPathErrorHtmlTemplate("No destination path is created!");
    return prop;
}



function isCheckedDossier ( amd){

    $('#check_box_dossier').click(function(){
        if ($('#check_box_dossier').attr('checked')) {
            //todo make asset path
            //todo make metadata
        }
    })

    return prop
}

function setAssetIDs(prop){
    prop.getMetadata();
    //todo set destAssetId
}