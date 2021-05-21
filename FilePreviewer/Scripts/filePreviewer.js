window.onload = function () {
    filePreviewerRegister();
}

function filePreviewerRegister() {
    $("#image-data").fileinput({
        uploadUrl: "http://localhost:9090/image", // need an enapoint for uploading files
        maxFileCount: 5
    });
}