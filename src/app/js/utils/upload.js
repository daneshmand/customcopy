
$(function () {

    //fileupload
    var count = {
    success: 0,
    failed: 0,
    fnames: []
    }
var infoTimer, dropTimer;
$("#fileupload-form").bind("submit", function(){ return false; });
$("input.submit").bind("click", function(){
    $("div.file-list-box div.item").each(function(){
        var data = $(this).data("data");
        if (data && data.submit && !data.jqXHR) {
            data.jqXHR = data.submit();
            $(this).removeData("data");
        } else {
    $(this).fadeOut(function(){
        $(this).remove();
    });
}
});
});
$("#fileupload").fileupload({
    dataType: "json",
    add: function (e, data) {
    $("div.upload-info-box").hide();
    count.success = 0;
    count.failed = 0;
    count.fnames = [];
    window.clearTimeout(infoTimer);

    var filename = [];
    $.each(data.files, function(index, file){
    filename[filename.length] = file.name;
    });
var box = $("<div/>").addClass("progress-text-box").addClass("item").append($("<span/>").addClass("text").text(filename.join(", ")));
$("div.file-list-box").append(box);
data.context = box;
data.context.progressbar({value: 0});
box.data("data", data);
},
send: function (e, data) {
    if (data.context.is("div.progress-text-box"))
    data.context.progressbar({value: 0});
},
progress: function (e, data) {
    var progress = parseInt(data.loaded / data.total * 100, 10);
    if (data.context.is("div.progress-text-box"))
    data.context.progressbar({value: progress});
},
progressall: function (e, data) {
    //
    },
done: function (e, data) {
    if (data.result && ! data.result.errorcode) {
    count.success++;
    if (data.context.is("div.progress-text-box")) {
    data.context.fadeOut(function(){
    $(this).remove();
    });
}
} else {
    count.failed++;
    $.each(data.files, function(index, file){
    count.fnames[count.fnames.length] = file.name;
    });
if (data.context.is("div.progress-text-box")) {
    data.context.addClass("progress-text-message-box").find("span.text").text(data.result.message ? data.result.message : "Error");
    }
}
},
fail: function (e, data) {
    count.failed++;
    $.each(data.files, function(index, file){
    count.fnames[count.fnames.length] = file.name;
    });
if (data.context.is("div.progress-text-box")) {
    data.context.addClass("progress-text-message-box").find("span.text").text("Error");
    }
},
stop: function (e, data) {
    var m = "Uploaded: " + count.success + " file(s).";
    if (count.failed > 0)
    m += " Error files upload: " + count.failed + " (" + count.fnames.join(", ") + ")";
    else
    infoTimer = setTimeout(function(){$("div.upload-info-box").fadeOut();}, 30000);
setTimeout(function(){
    $("div.upload-info-box").html(m).fadeIn();
    }, 800);
},
dragover: function(e) {
    window.clearTimeout(dropTimer);
    $("#dropIndicator").addClass("dropMarker");
    dropTimer = window.setTimeout(function(){$("#dropIndicator").removeClass("dropMarker");}, 2000);
},
drop: function() {
    window.clearTimeout(dropTimer);
    $("#dropIndicator").removeClass("dropMarker");
    }
});

});