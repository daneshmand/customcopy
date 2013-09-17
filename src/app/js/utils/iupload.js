function fileUpload(form, action_url, div_id) {
    // Create the iframe...
    var iframe = document.createElement("iframe");
    iframe.setAttribute("id", "upload_iframe");
    iframe.setAttribute("name", "upload_iframe");
    iframe.setAttribute("width", "0");
    iframe.setAttribute("height", "0");
    iframe.setAttribute("border", "0");
    iframe.setAttribute("style", "width: 0; height: 0; border: none;");

    // Add to document...
    form.parentNode.appendChild(iframe);
    window.frames['upload_iframe'].name = "upload_iframe";

    iframeId = document.getElementById("upload_iframe");

    // Add event...
    var eventHandler = function () {

    if (iframeId.detachEvent) iframeId.detachEvent("onload", eventHandler);
    else iframeId.removeEventListener("load", eventHandler, false);

    // Message from server...
    if (iframeId.contentDocument) {
    content = iframeId.contentDocument.body.innerHTML;
    } else if (iframeId.contentWindow) {
    content = iframeId.contentWindow.document.body.innerHTML;
    } else if (iframeId.document) {
    content = iframeId.document.body.innerHTML;
    }


var json_txt = content.substring(59,content.length -6);
 window.elvis_id_ = JSON.parse(json_txt).id;
if (JSON.parse(json_txt).errorcode){
    document.getElementById(div_id).innerHTML = getSuccessMessageTemplate(content.message);
}else{
    document.getElementById(div_id).innerHTML = getSuccessMessageTemplate("<br> - Upload is successfuly done:<br>Id: " + window.elvis_id_);
}


//document.getElementById(div_id).innerHTML = getSuccessMessageTemplate("<br> - Upload is done:<br><br>Elvis Asset Id:" + content.substring(100,125));

// Del the iframe...jQuery.parseJSON(content)
setTimeout('iframeId.parentNode.removeChild(iframeId)', 250);
}

if (iframeId.addEventListener) iframeId.addEventListener("load", eventHandler, true);
if (iframeId.attachEvent) iframeId.attachEvent("onload", eventHandler);


    // Set properties of form...
form.setAttribute("target", "upload_iframe");
form.setAttribute("action", action_url);
form.setAttribute("method", "post");
form.setAttribute("enctype", "multipart/form-data");
form.setAttribute("encoding", "multipart/form-data");
form.setAttribute("id", "fileupload-form");

// Submit the form...
form.submit();

document.getElementById(div_id).innerHTML = getSuccessMessageTemplate("<br> - Uploading...");
}
