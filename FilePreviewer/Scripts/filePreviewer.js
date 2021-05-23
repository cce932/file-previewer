window.onload = function () {
    filePreviewerRegister();
}

function filePreviewerRegister() {
    // not using for now because fileinput needs uploadUrl
    // only while uploadUrl exists, other features of fileinput can be access
    // uploadUrl is a backend endpoint for uploading files but we don't have that
    $("#image-data").fileinput()
}