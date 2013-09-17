function updateAssetMetadata(prop){

    var amd = prop.getMetadata();
//    alert('amd.....updateAssetMetadata...1...'+JSON.stringify(amd));

    var mdPath;
    if ($('#check_box_metadata').prop('checked')) {

//        alert('amd.....updateAssetMetadata...if....');
        var assetName = amd.filename;
        var folderPath =amd.folderPath;
        mdPath = 'metadata=' + JSON.stringify(amd);
//        alert('amd.....updateAssetMetadata...mdPath...: ' + mdPath);
//        window.mdPath_ = mdPath;//only for debug
        updateAssetAllMetadataViaRest(prop.getDestAssetId(),prop.getMetadata());
    }else{
//        alert('amd.....updateAssetMetadata...else....');
        //reserve for update single metadata if needed.
//        var assetName = amd.filename;
//        var folderPath =amd.folderPath;
//        mdPath = 'assetPath=' + folderPath +"/"+ assetName;
//        alert('amd.....updateAssetMetadata...mdPath...' + mdPath);
    }

    return mdPath;
}