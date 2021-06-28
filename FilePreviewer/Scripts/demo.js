window.onload = function () {
    //toggleActiveAlways();
    inputBasicSetting();
    inputAdvancedSetting();
    inputResSetting();
    inputFolderSetting();
    inputAvatarSetting;
    inputMultiLanguageSetting();
    inputThemeSetting();
    inputPreviewMangementSetting();
    inputFilePreviewIconSetting();
    inputImageDimensionsSetting();
    inputImageManagementSetting();
    inputAutoReplaceSetting();
    inputFileCountSetting();
    inputPluginMethodsSetting();
    inputAjaxSetting();
}
sidebarToggle();
window.addEventListener('scroll', () => {
    CurrentPosition();
})

function toggleActiveAlways() {
    const sidebarList = document.getElementById("sidebar-list");
    const listItems = sidebarList.getElementsByClassName("list-item");
    const path = location.href;
    Array.prototype.forEach.call(listItems, (listItem) => {
        let aHref = listItem.getElementsByTagName("a")[0].href;
        listItem.classList.toggle("active-always", aHref === path);
    });
}

function sidebarToggle() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const sidebarBrand = document.getElementById("sidebar-brand");
    sidebarBrand.addEventListener("click", () => {
        sidebar.classList.toggle('toggle');
        content.classList.toggle('toggle', sidebar.classList.contains('toggle'));
    })
}

function CurrentPosition() {
    const sidebarList = document.getElementById("sidebar-list");
    const content = document.getElementById("content");
    const contentDivs = content.children;
    for (let i = 0; i < contentDivs.length; i++) {
        let isReached = contentDivs[i].offsetTop ? contentDivs[i].offsetTop <= window.scrollY +20 : !contentDivs[i].offsetTop;
        let haveNotPassThrough = contentDivs[i + 1] ? window.scrollY + 20 < contentDivs[i+1].offsetTop : !contentDivs[i + 1];
        let targetListItem = document.getElementsByName(contentDivs[i].id)[0];
        console.log(isReached && haveNotPassThrough);
        targetListItem.classList.toggle("active", isReached && haveNotPassThrough);
    }
}

function inputBasicSetting() {
    $("#input-b5").fileinput({
        showCaption: false,
        dropZoneEnabled: false
    });

    $("#input-b6").fileinput({
        showUpload: false,
        dropZoneEnabled: false,
        maxFileCount: 10,
        mainClass: "input-group-lg"
    });

    $("#input-b8").fileinput({
        rtl: true,
        dropZoneEnabled: false,
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
}

function inputAdvancedSetting() {
    let url1 = 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg',
        url2 = 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/600px-Earth_Eastern_Hemisphere.jpg';
    $("#input-a1").fileinput({
        initialPreview: [url1, url2],
        initialPreviewAsData: true,
        initialPreviewConfig: [
            { caption: "Moon.jpg", downloadUrl: url1, size: 930321, width: "120px", key: 1 },
            { caption: "Earth.jpg", downloadUrl: url2, size: 1218822, width: "120px", key: 2 }
        ],
        deleteUrl: "/site/file-delete",
        overwriteInitial: false,
        maxFileSize: 100,
        initialCaption: "The Moon and the Earth"
    });

    $("#input-a2").fileinput({
        initialPreview: [url1, url2],
        initialPreviewAsData: true,
        initialPreviewConfig: [
            { caption: "Moon.jpg", filename: "MoonFull.jpg", downloadUrl: url1, size: 930321, width: "120px", key: 1 },
            { caption: "Earth.jpg", filename: "EarthFull.jpg", downloadUrl: url2, size: 1218822, width: "120px", key: 2 }
        ],
        deleteUrl: "/site/file-delete",
        overwriteInitial: true,
        maxFileSize: 100,
        initialCaption: "The Moon and the Earth"
    });

    $("#input-a3").fileinput({
        browseClass: "btn btn-info btn-block",
        showCaption: false,
        showRemove: false,
        showUpload: false
    });

    $("#input-a4").fileinput({
        previewFileType: "image",
        browseClass: "btn btn-success",
        browseLabel: "Pick Image",
        browseIcon: "<i class=\"bi-file-image\"></i> ",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class=\"bi-trash\"></i> ",
        uploadClass: "btn btn-info",
        uploadLabel: "Upload",
        uploadIcon: "<i class=\"bi-upload\"></i> "
    });

    $("#input-a5").fileinput({
        previewFileType: "text",
        allowedFileExtensions: ["txt", "md", "ini", "text"],
        previewClass: "bg-primary"
    });

    $("#input-a6").fileinput({
        showUpload: false,
        layoutTemplates: {
            main1: "{preview}\n" +
                "<div class=\'input-group {class}\'>\n" +
                "   <div class=\'input-group-btn\ input-group-prepend'>\n" +
                "       {browse}\n" +
                "       {upload}\n" +
                "       {remove}\n" +
                "   </div>\n" +
                "   {caption}\n" +
                "</div>"
        }
    });

    $(".btn-modify").on("click", function () {
        var $btn = $(this), $input = $("#input-a7");
        if ($btn.text() == "Modify") {
            $("#input-a7").fileinput("disable").fileinput("refresh", { showUpload: false });
            $btn.html("Revert");
            alert("Hurray! I have disabled the input and hidden the upload button.");
        }
        else {
            $("#input-a7").fileinput("enable").fileinput("refresh", { showUpload: true });
            $btn.html("Modify");
            alert("Hurray! I have reverted back the input to enabled with the upload button.");
        }
    });

    $("#input-a8").fileinput({
        maxFileCount: 10,
        allowedFileTypes: ["image", "video"]
    });

    $("#input-a9").fileinput({
        maxFileCount: 10,
        allowedFileExtensions: ["jpg", "gif", "png", "txt"]
    });

    $("#input-a10").fileinput({
        showPreview: false,
        allowedFileExtensions: ["jpg", "jpeg", "gif", "png"],
        elErrorContainer: "#errorBlock"
    });

    $("#input-a11").fileinput({
        // uploadUrl: '/FileInput/MultipleUpload',
        maxFilePreviewSize: 10240
    });
}

function inputResSetting() {
    $("#input-res-1").fileinput({
        enableResumableUpload: true,
        initialPreviewAsData: true,
        maxFileCount: 5,
        theme: 'fas',
        deleteUrl: '/site/file-delete',
        fileActionSettings: {
            showZoom: function (config) {
                if (config.type === 'pdf' || config.type === 'image') {
                    return true;
                }
                return false;
            }
        }
    });

    $("#input-res-2").fileinput({
        enableResumableUpload: true,
        initialPreviewAsData: true,
        allowedFileTypes: ['image'],
        showCancel: true,
        resumableUploadOptions: {
            testUrl: "/site/test-file-chunks",
            chunkSize: 1024, // 1 MB chunk size
        },
        maxFileCount: 5,
        theme: 'fas',
        deleteUrl: '/site/file-delete',
        fileActionSettings: {
            showZoom: function (config) {
                if (config.type === 'pdf' || config.type === 'image') {
                    return true;
                }
                return false;
            }
        }
    });

    $("#input-res-3").fileinput({
        enableResumableUpload: true,
        initialPreviewAsData: true,
        maxFileCount: 5,
        theme: 'fas',
        deleteUrl: '/site/file-delete',
        uploadExtraData: {
            uploadToken: "SOME_VALID_TOKEN"
        },
        overwriteInitial: false,
        initialPreview: [
            // TEXT DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/SampleTextFile_10kb.txt',
            // PDF DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/pdf-sample.pdf',
            // VIDEO DATA
            "https://kartik-v.github.io/bootstrap-fileinput-samples/samples/small.mp4"
        ],
        initialPreviewAsData: true, // defaults markup  
        initialPreviewConfig: [
            { caption: "Lorem Ipsum.txt", type: "text", size: 1430, url: "/site/file-delete", key: 12 },
            { type: "pdf", size: 8000, caption: "PDF Sample.pdf", url: "/site/file-delete", key: 14 },
            { type: "video", size: 375000, filetype: "video/mp4", caption: "Krajee Sample.mp4", url: "/site/file-delete", key: 15 }
        ],
        preferIconicPreview: true,
        previewFileIconSettings: { // configure your icon file extensions
            'doc': '<i class="fas fa-file-word text-primary"></i>',
            'xls': '<i class="fas fa-file-excel text-success"></i>',
            'ppt': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
            'htm': '<i class="fas fa-file-code text-info"></i>',
            'txt': '<i class="fas fa-file-alt text-info"></i>',
            'mov': '<i class="fas fa-file-video text-warning"></i>',
            'mp3': '<i class="fas fa-file-audio text-warning"></i>',
            // note for these file types below no extension determination logic 
            // has been configured (the keys itself will be used as extensions)
            'jpg': '<i class="fas fa-file-image text-danger"></i>',
            'gif': '<i class="fas fa-file-image text-muted"></i>',
            'png': '<i class="fas fa-file-image text-primary"></i>'
        },
        previewFileExtSettings: { // configure the logic for determining icon file extensions
            'doc': function (ext) {
                return ext.match(/(doc|docx)$/i);
            },
            'xls': function (ext) {
                return ext.match(/(xls|xlsx)$/i);
            },
            'ppt': function (ext) {
                return ext.match(/(ppt|pptx)$/i);
            },
            'zip': function (ext) {
                return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
            },
            'htm': function (ext) {
                return ext.match(/(htm|html)$/i);
            },
            'txt': function (ext) {
                return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
            },
            'mov': function (ext) {
                return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
            },
            'mp3': function (ext) {
                return ext.match(/(mp3|wav)$/i);
            }
        }
    }).on('fileuploaded', function (event, previewId, index, fileId) {
        console.log('File Uploaded', 'ID: ' + fileId + ', Thumb ID: ' + previewId);
    }).on('fileuploaderror', function (event, previewId, index, fileId) {
        console.log('File Upload Error', 'ID: ' + fileId + ', Thumb ID: ' + previewId);
    }).on('filebatchuploadcomplete', function (event, preview, config, tags, extraData) {
        console.log('File Batch Uploaded', preview, config, tags, extraData);
    });
}

function inputFolderSetting() {
    $("#input-folder-1").fileinput({
        browseLabel: 'Select Folder...'
    });

    $("#input-folder-2").fileinput({
        browseLabel: 'Select Folder...',
        previewFileIcon: '<i class="fas fa-file"></i>',
        allowedPreviewTypes: null, // set to empty, null or false to disable preview for all types
        previewFileIconSettings: {
            'doc': '<i class="fas fa-file-word text-primary"></i>',
            'xls': '<i class="fas fa-file-excel text-success"></i>',
            'ppt': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'jpg': '<i class="fas fa-file-image text-warning"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
            'htm': '<i class="fas fa-file-code text-info"></i>',
            'txt': '<i class="fas fa-file-alt text-info"></i>',
            'mov': '<i class="fas fa-file-video text-warning"></i>',
            'mp3': '<i class="fas fa-file-audio text-warning"></i>',
        },
        previewFileExtSettings: {
            'doc': function (ext) {
                return ext.match(/(doc|docx)$/i);
            },
            'xls': function (ext) {
                return ext.match(/(xls|xlsx)$/i);
            },
            'ppt': function (ext) {
                return ext.match(/(ppt|pptx)$/i);
            },
            'jpg': function (ext) {
                return ext.match(/(jp?g|png|gif|bmp)$/i);
            },
            'zip': function (ext) {
                return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
            },
            'htm': function (ext) {
                return ext.match(/(php|js|css|htm|html)$/i);
            },
            'txt': function (ext) {
                return ext.match(/(txt|ini|md)$/i);
            },
            'mov': function (ext) {
                return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
            },
            'mp3': function (ext) {
                return ext.match(/(mp3|wav)$/i);
            },
        }
    });

    $("#input-folder-3").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        hideThumbnailContent: true // hide image, pdf, text or other content in the thumbnail preview
    });
}

function inputAvatarSetting() {
    let btnCust = '<button type="button" class="btn btn-secondary" title="Add picture tags" ' +
        'onclick="alert(\'Call your custom code here.\')">' +
        '<i class="bi-tag"></i>' +
        '</button>';
    $("#avatar-1").fileinput({
        overwriteInitial: true,
        maxFileSize: 1500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<i class="bi-folder2-open"></i>',
        removeIcon: '<i class="bi-x-lg"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src="/samples/default-avatar-male.png" alt="Your Avatar">',
        layoutTemplates: { main2: '{preview} ' + btnCust + ' {remove} {browse}' },
        allowedFileExtensions: ["jpg", "png", "gif"],
    });
}

function inputMultiLanguageSetting() {
    $("#input-ru").fileinput({
        language: "ru",
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $("#input-fr").fileinput({
        language: "fr",
        // uploadUrl: "/FileInput/MultipleUpload",
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $("#input-pt-br").fileinput({
        language: "pt-BR",
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
}

function inputThemeSetting() {
    $("#input-fa").fileinput({
        theme: "fa",
        // uploadUrl: "/FileInput/MultipleUpload",
    });

    $("#input-fa-1").fileinput({
        theme: "fa",
        // uploadUrl: "/FileInput/MultipleUpload",
        hideThumbnailContent: true // hide image, pdf, text or other content in the thumbnail preview
    });

    $("#input-fas").fileinput({
        theme: "fas",
        // uploadUrl: "/FileInput/MultipleUpload",
    });

    $("#input-fas-1").fileinput({
        theme: "fas",
        // uploadUrl: "/FileInput/MultipleUpload",
        hideThumbnailContent: true // hide image, pdf, text or other content in the thumbnail preview
    });

    $("#input-gly").fileinput({
        theme: "gly",
        // uploadUrl: "/FileInput/MultipleUpload",
    });

    $("#input-gly-1").fileinput({
        theme: "gly",
        // uploadUrl: "/FileInput/MultipleUpload",
        hideThumbnailContent: true // hide image, pdf, text or other content in the thumbnail preview
    });
}

function inputPreviewMangementSetting() {
    $("#input-pd").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        minFileCount: 2,
        maxFileCount: 5,
        overwriteInitial: false,
        initialPreview: [
            // IMAGE DATA
            "https://kartik-v.github.io/bootstrap-fileinput-samples/samples/Desert.jpg",
            // IMAGE DATA
            "https://kartik-v.github.io/bootstrap-fileinput-samples/samples/Lighthouse.jpg",
            // VIDEO DATA
            "https://kartik-v.github.io/bootstrap-fileinput-samples/samples/small.mp4",
            // OFFICE WORD DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/SampleDOCFile_100kb.doc',
            // OFFICE EXCEL DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/SampleXLSFile_38kb.xls',
            // OFFICE POWERPOINT DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/SamplePPTFile_500kb.ppt',
            // TIFF IMAGE FILE
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/multipage_tiff_example.tif',
            // ADOBE ILLUSTRATOR FILE
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/sample_ai.ai',
            // ENCAPSULATED POST SCRIPT FILE
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/sample_eps.eps',
            // PDF DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/pdf-sample.pdf',
            // TEXT DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/SampleTextFile_10kb.txt',
            // HTML DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/SampleHTML.htm',
        ],
        initialPreviewAsData: true, // identify if you are sending preview data only and not the raw markup
        initialPreviewFileType: 'image', // image is the default and can be overridden in config below
        initialPreviewDownloadUrl: 'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/{filename}', // includes the dynamic `filename` tag to be replaced for each config
        initialPreviewConfig: [
            { caption: "Desert.jpg", size: 827000, width: "120px", url: "/file-upload-batch/2", key: 1 },
            { caption: "Lighthouse.jpg", size: 549000, width: "120px", url: "/file-upload-batch/2", key: 2 },
            {
                type: "video",
                size: 375000,
                filetype: "video/mp4",
                caption: "KrajeeSample.mp4",
                url: "/FileInput/MultipleUpload",
                key: 3,
                downloadUrl: 'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/small.mp4', // override url
                filename: 'KrajeeSample.mp4' // override download filename
            },
            { type: "office", size: 102400, caption: "SampleDOCFile_100kb.doc", url: "/file-upload-batch/2", key: 4 },
            { type: "office", size: 45056, caption: "SampleXLSFile_38kb.xls", url: "/file-upload-batch/2", key: 5 },
            { type: "office", size: 512000, caption: "SamplePPTFile_500kb.ppt", url: "/file-upload-batch/2", key: 6 },
            { type: "gdocs", size: 811008, caption: "multipage_tiff_example.tif", url: "/file-upload-batch/2", key: 7 },
            { type: "gdocs", size: 375808, caption: "sample_ai.ai", url: "/file-upload-batch/2", key: 8 },
            { type: "gdocs", size: 40960, caption: "sample_eps.eps", url: "/file-upload-batch/2", key: 9 },
            { type: "pdf", size: 8000, caption: "About.pdf", url: "/file-upload-batch/2", key: 10, downloadUrl: false }, // disable download
            { type: "text", size: 1430, caption: "LoremIpsum.txt", url: "/file-upload-batch/2", key: 11, downloadUrl: false },  // disable download
            { type: "html", size: 3550, caption: "LoremIpsum.html", url: "/file-upload-batch/2", key: 12, downloadUrl: false }  // disable download
        ],
        uploadExtraData: {
            img_key: "1000",
            img_keywords: "happy, places"
        }
    }).on('filesorted', function (e, params) {
        console.log('File sorted params', params);
    }).on('fileuploaded', function (e, params) {
        console.log('File uploaded params', params);
    });

    $("#input-pr").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        minFileCount: 2,
        maxFileCount: 5,
        overwriteInitial: false,
        initialPreview: [
            // IMAGE RAW MARKUP
            '<img src="https://picsum.photos/id/239/1920/1080" class="kv-preview-data file-preview-image">',
            // IMAGE RAW MARKUP
            '<img src="https://picsum.photos/id/279/1920/1080" class="kv-preview-data file-preview-image">',
            // TEXT RAW MARKUP
            '<textarea class="kv-preview-data file-preview-text" readonly>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut mauris ut libero fermentum feugiat eu et dui. Mauris condimentum rhoncus enim, sed semper neque vestibulum id. Nulla semper, turpis ut consequat imperdiet, enim turpis aliquet orci, eget venenatis elit sapien non ante. Aliquam neque ipsum, rhoncus id ipsum et, volutpat tincidunt augue. Maecenas dolor libero, gravida nec est at, commodo tempor massa. Sed id feugiat massa. Pellentesque at est eu ante aliquam viverra ac sed est.</textarea>'
        ],
        initialPreviewAsData: false, // allows you to set a raw markup
        initialPreviewFileType: 'image', // image is the default and can be overridden in config below
        initialPreviewDownloadUrl: 'https://picsum.photos/id/{key}/1920/1080', // includes the dynamic key tag to be replaced for each config
        initialPreviewConfig: [
            { type: "image", caption: "Image-1.jpg", size: 847000, url: "/site/file-delete", key: 1 },
            { type: "image", caption: "Image-2.jpg", size: 817000, url: "/site/file-delete", key: 2 },  // set as raw markup
            { type: "text", size: 1430, caption: "LoremIpsum.txt", url: "/site/file-delete", key: 3, downloadUrl: false } // do not show download
        ],
        uploadExtraData: {
            img_key: "1000",
            img_keywords: "happy, nature"
        }
    }).on('filesorted', function (e, params) {
        console.log('File sorted params', params);
    }).on('fileuploaded', function (e, params) {
        console.log('File uploaded params', params);
    });

    $("#input-pa").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        minFileCount: 2,
        maxFileCount: 5,
        overwriteInitial: false,
        initialPreview: [
            // IMAGE DATA
            'https://picsum.photos/id/700/1920/1080',
            // IMAGE RAW MARKUP
            '<img src="https://picsum.photos/id/701/1920/1080" class="kv-preview-data file-preview-image">',
            // PDF DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/pdf-sample.pdf',
            // VIDEO DATA
            "https://kartik-v.github.io/bootstrap-fileinput-samples/samples/small.mp4"
        ],
        initialPreviewAsData: true, // defaults markup
        initialPreviewFileType: 'image', // image is the default and can be overridden in config below
        initialPreviewConfig: [
            { caption: "Business-1.jpg", size: 762980, url: "/site/file-delete", key: 8 },
            { previewAsData: false, size: 823782, caption: "Business-2.jpg", url: "/site/file-delete", key: 9 },
            { type: "pdf", size: 8000, caption: "PDF-Sample.pdf", url: "/FileInput/MultipleUpload", key: 10 },
            { type: "video", size: 375000, filetype: "video/mp4", caption: "KrajeeSample.mp4", url: "/FileInput/MultipleUpload", key: 11 }
        ],
        uploadExtraData: {
            img_key: "1000",
            img_keywords: "happy, nature"
        }
    }).on('filesorted', function (e, params) {
        console.log('File sorted params', params);
    }).on('fileuploaded', function (e, params) {
        console.log('File uploaded params', params);
    });

    $("#input-iconic").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        minFileCount: 2,
        maxFileCount: 5,
        overwriteInitial: false,
        initialPreview: [
            // IMAGE DATA
            'https://picsum.photos/id/702/1920/1080',
            // IMAGE RAW MARKUP
            '<img src="https://picsum.photos/id/703/1920/1080" class="kv-preview-data file-preview-image">',
            // TEXT DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/SampleTextFile_10kb.txt',
            // PDF DATA
            'https://kartik-v.github.io/bootstrap-fileinput-samples/samples/pdf-sample.pdf',
            // VIDEO DATA
            "https://kartik-v.github.io/bootstrap-fileinput-samples/samples/small.mp4"
        ],
        initialPreviewAsData: true, // defaults markup
        initialPreviewFileType: 'image', // image is the default and can be overridden in config below
        initialPreviewConfig: [
            { caption: "Business 1", filename: "Business-1.jpg", size: 762980, url: "/site/file-delete", key: 11 },
            { previewAsData: false, size: 823782, caption: "Business 2", filename: "Business-2.jpg", url: "/site/file-delete", key: 13 },
            { caption: "Lorem Ipsum", filename: "LoremIpsum.txt", type: "text", size: 1430, url: "/site/file-delete", key: 12 },
            { type: "pdf", size: 8000, caption: "PDF Sample", filename: "PDF-Sample.pdf", url: "/FileInput/MultipleUpload", key: 14 },
            { type: "video", size: 375000, filetype: "video/mp4", caption: "Krajee Sample", filename: "KrajeeSample.mp4", url: "/FileInput/MultipleUpload", key: 15 }
        ],
        uploadExtraData: {
            img_key: "1000",
            img_keywords: "happy, nature",
        },
        preferIconicPreview: true, // this will force thumbnails to display icons for following file extensions
        previewFileIconSettings: { // configure your icon file extensions
            'doc': '<i class="fas fa-file-word text-primary"></i>',
            'xls': '<i class="fas fa-file-excel text-success"></i>',
            'ppt': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
            'htm': '<i class="fas fa-file-code text-info"></i>',
            'txt': '<i class="fas fa-file-alt text-info"></i>',
            'mov': '<i class="fas fa-file-video text-warning"></i>',
            'mp3': '<i class="fas fa-file-audio text-warning"></i>',
            // note for these file types below no extension determination logic 
            // has been configured (the keys itself will be used as extensions)
            'jpg': '<i class="fas fa-file-image text-danger"></i>',
            'gif': '<i class="fas fa-file-image text-muted"></i>',
            'png': '<i class="fas fa-file-image text-primary"></i>'
        },
        previewFileExtSettings: { // configure the logic for determining icon file extensions
            'doc': function (ext) {
                return ext.match(/(doc|docx)$/i);
            },
            'xls': function (ext) {
                return ext.match(/(xls|xlsx)$/i);
            },
            'ppt': function (ext) {
                return ext.match(/(ppt|pptx)$/i);
            },
            'zip': function (ext) {
                return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
            },
            'htm': function (ext) {
                return ext.match(/(htm|html)$/i);
            },
            'txt': function (ext) {
                return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
            },
            'mov': function (ext) {
                return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
            },
            'mp3': function (ext) {
                return ext.match(/(mp3|wav)$/i);
            }
        }
    }).on('filesorted', function (e, params) {
        console.log('File sorted params', params);
    }).on('fileuploaded', function (e, params) {
        console.log('File uploaded params', params);
    });

    $("#input-pr-rev").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        theme: 'explorer-fas',
        uploadAsync: true,
        reversePreviewOrder: true,
        initialPreviewAsData: true,
        overwriteInitial: false,
        initialPreview: [
            "https://picsum.photos/id/900/1920/1080",
            "https://picsum.photos/id/901/1920/1080",
            "https://picsum.photos/id/902/1920/1080",
            "https://picsum.photos/id/903/1920/1080",
            "https://picsum.photos/id/904/1920/1080"
        ],
        initialPreviewConfig: [
            { caption: "Picture-3.jpg", size: 628782, width: "120px", url: "/site/file-delete", key: 3 },
            { caption: "Picture-4.jpg", size: 628782, width: "120px", url: "/site/file-delete", key: 4 },
            { caption: "Picture-5.jpg", size: 628782, width: "120px", url: "/site/file-delete", key: 5 },
            { caption: "Picture-6.jpg", size: 628782, width: "120px", url: "/site/file-delete", key: 6 },
            { caption: "Picture-7.jpg", size: 628782, width: "120px", url: "/site/file-delete", key: 7 }
        ],
        allowedFileExtensions: ["jpg", "png", "gif"]
    }).on('filesorted', function (e, params) {
        console.log('Modified initial preview is ', $("#input-pr-rev").data('fileinput').initialPreview);
    })

    $('#file-kv-pdf').fileinput({
        // uploadUrl: "/file-upload-batch/1",
        pdfRendererUrl: 'https://plugins.krajee.com/pdfjs/web/viewer.html',
        overwriteInitial: false,
        initialPreviewAsData: true,
        initialPreview: [
            'https://plugins.krajee.com/samples/sample-2.pdf'
        ],
        initialPreviewConfig: [
            { type: 'pdf', size: 3072 }
        ]
    });
}

function inputFilePreviewIconSetting() {
    $("#input-ficons-1").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: true,
        previewFileIcon: '<i class="fas fa-file"></i>',
        allowedPreviewTypes: null, // set to empty, null or false to disable preview for all types
        previewFileIconSettings: {
            'docx': '<i class="fas fa-file-word text-primary"></i>',
            'xlsx': '<i class="fas fa-file-excel text-success"></i>',
            'pptx': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'jpg': '<i class="fas fa-file-image text-warning"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
        }
    });

    $("#input-ficons-2").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        previewFileIcon: '<i class="fas fa-file"></i>',
        allowedPreviewTypes: null, // set to empty, null or false to disable preview for all types
        previewFileIconSettings: {
            'doc': '<i class="fas fa-file-word text-primary"></i>',
            'xls': '<i class="fas fa-file-excel text-success"></i>',
            'ppt': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'jpg': '<i class="fas fa-file-image text-warning"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
            'htm': '<i class="fas fa-file-code text-info"></i>',
            'txt': '<i class="fas fa-file-text text-info"></i>',
            'mov': '<i class="fas fa-file-movie-o text-warning"></i>',
            'mp3': '<i class="fas fa-file-audio text-warning"></i>',
        },
        previewFileExtSettings: {
            'doc': function (ext) {
                return ext.match(/(doc|docx)$/i);
            },
            'xls': function (ext) {
                return ext.match(/(xls|xlsx)$/i);
            },
            'ppt': function (ext) {
                return ext.match(/(ppt|pptx)$/i);
            },
            'zip': function (ext) {
                return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
            },
            'htm': function (ext) {
                return ext.match(/(php|js|css|htm|html)$/i);
            },
            'txt': function (ext) {
                return ext.match(/(txt|ini|md)$/i);
            },
            'mov': function (ext) {
                return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
            },
            'mp3': function (ext) {
                return ext.match(/(mp3|wav)$/i);
            },
        }
    });

    $("#input-ficons-3").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        previewFileIcon: '<i class="fas fa-file"></i>',
        allowedPreviewTypes: ['image', 'text'], // allow only preview of image & text files
        previewFileIconSettings: {
            'docx': '<i class="fas fa-file-word text-primary"></i>',
            'xlsx': '<i class="fas fa-file-excel text-success"></i>',
            'pptx': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
        }
    });

    $("#input-ficons-4").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        previewFileIcon: '<i class="fas fa-file"></i>',
        allowedPreviewTypes: null, // disable preview of standard types
        allowedPreviewMimeTypes: ['image/jpeg', 'text/javascript'], // allow content to be shown only for certain mime types 
        previewFileIconSettings: {
            'docx': '<i class="fas fa-file-word text-primary"></i>',
            'xls': '<i class="fas fa-file-excel text-success"></i>',
            'xlsx': '<i class="fas fa-file-excel text-success"></i>',
            'pptx': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
        }
    });

    $("#input-ficons-5").fileinput({
        // // uploadUrl:" /FileInput/MultipleUpload",
        uploadAsync: false,
        previewFileIcon: '<i class="fas fa-file"></i>',
        preferIconicPreview: true, // this will force thumbnails to display icons for following file extensions
        previewFileIconSettings: { // configure your icon file extensions
            'doc': '<i class="fas fa-file-word text-primary"></i>',
            'xls': '<i class="fas fa-file-excel text-success"></i>',
            'ppt': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
            'htm': '<i class="fas fa-file-code text-info"></i>',
            'txt': '<i class="fas fa-file-text text-info"></i>',
            'mov': '<i class="fas fa-file-movie-o text-warning"></i>',
            'mp3': '<i class="fas fa-file-audio text-warning"></i>',
            // note for these file types below no extension determination logic 
            // has been configured (the keys itself will be used as extensions)
            'jpg': '<i class="fas fa-file-image text-danger"></i>',
            'gif': '<i class="fas fa-file-image text-warning"></i>',
            'png': '<i class="fas fa-file-image text-primary"></i>'
        },
        previewFileExtSettings: { // configure the logic for determining icon file extensions
            'doc': function (ext) {
                return ext.match(/(doc|docx)$/i);
            },
            'xls': function (ext) {
                return ext.match(/(xls|xlsx)$/i);
            },
            'ppt': function (ext) {
                return ext.match(/(ppt|pptx)$/i);
            },
            'zip': function (ext) {
                return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
            },
            'htm': function (ext) {
                return ext.match(/(htm|html)$/i);
            },
            'txt': function (ext) {
                return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
            },
            'mov': function (ext) {
                return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
            },
            'mp3': function (ext) {
                return ext.match(/(mp3|wav)$/i);
            },
        }
    });

    $("#input-ficons-6").fileinput({
        // // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        previewFileIcon: '<i class="fas fa-file"></i>',
        preferIconicZoomPreview: true, // this will force zoom preview thumbnails to display icons for following file extensions
        previewFileIconSettings: { // configure your icon file extensions
            'doc': '<i class="fas fa-file-word text-primary"></i>',
            'xls': '<i class="fas fa-file-excel text-success"></i>',
            'ppt': '<i class="fas fa-file-powerpoint text-danger"></i>',
            'pdf': '<i class="fas fa-file-pdf text-danger"></i>',
            'zip': '<i class="fas fa-file-archive text-muted"></i>',
            'htm': '<i class="fas fa-file-code text-info"></i>',
            'txt': '<i class="fas fa-file-text text-info"></i>',
            'mov': '<i class="fas fa-file-movie-o text-warning"></i>',
            'mp3': '<i class="fas fa-file-audio text-warning"></i>',
            // note for these file types below no extension determination logic 
            // has been configured (the keys itself will be used as extensions)
            'jpg': '<i class="fas fa-file-image text-danger"></i>',
            'gif': '<i class="fas fa-file-image text-warning"></i>',
            'png': '<i class="fas fa-file-image text-primary"></i>'
        },
        previewFileExtSettings: { // configure the logic for determining icon file extensions
            'doc': function (ext) {
                return ext.match(/(doc|docx)$/i);
            },
            'xls': function (ext) {
                return ext.match(/(xls|xlsx)$/i);
            },
            'ppt': function (ext) {
                return ext.match(/(ppt|pptx)$/i);
            },
            'zip': function (ext) {
                return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
            },
            'htm': function (ext) {
                return ext.match(/(htm|html)$/i);
            },
            'txt': function (ext) {
                return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
            },
            'mov': function (ext) {
                return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
            },
            'mp3': function (ext) {
                return ext.match(/(mp3|wav)$/i);
            },
        }
    });
}

function inputImageDimensionsSetting() {
    $("#input-dim-1").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        allowedFileExtensions: ["jpg", "png", "gif"],
        minImageWidth: 50,
        minImageHeight: 50
    });

    $("#input-dim-2").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        allowedFileExtensions: ["jpg", "png", "gif"],
        maxImageWidth: 250,
        maxImageHeight: 250
    });
}

function inputImageManagementSetting() {
    $("#input-file-1").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        autoOrientImage: true
    });
    $("#toggleOrient").on('change', function () {
        var val = $(this).prop('checked');
        $("#input-file-1").fileinput('refresh', {
            // uploadUrl: "/FileInput/MultipleUpload",
            autoOrientImage: val
        });
        $('#togStatus').html('Fileinput is reset and <samp>autoOrientImage</samp> is set to <em>' + (val ? 'true' : 'false') + '</em>. Retry by selecting images again.');
    });

    $("#input-image-1").fileinput({
        // uploadUrl: "/FileInput/Upload",
        allowedFileExtensions: ["jpg", "png", "gif"],
        maxImageWidth: 200,
        maxFileCount: 1,
        resizeImage: true
    }).on('filepreupload', function () {
        $('#kv-success-box').html('');
    }).on('fileuploaded', function (event, data) {
        $('#kv-success-box').append(data.response.link);
        $('#kv-success-modal').modal('show');
    });

    $("#input-image-2").fileinput({
        // uploadUrl: "/FileInput/Upload",
        allowedFileExtensions: ["jpg", "png", "gif"],
        maxImageHeight: 150,
        maxFileCount: 1,
        resizeImage: true
    }).on('filepreupload', function () {
        $('#kv-success-box').html('');
    }).on('fileuploaded', function (event, data) {
        $('#kv-success-box').append(data.response.link);
        $('#kv-success-modal').modal('show');
    });

    $("#input-image-3").fileinput({
        // uploadUrl: "/FileInput/Upload",
        allowedFileExtensions: ["jpg", "png", "gif"],
        maxImageWidth: 200,
        maxImageHeight: 150,
        resizePreference: 'height',
        maxFileCount: 1,
        resizeImage: true
    }).on('filepreupload', function () {
        $('#kv-success-box').html('');
    }).on('fileuploaded', function (event, data) {
        $('#kv-success-box').append(data.response.link);
        $('#kv-success-modal').modal('show');
    });

    $("#input-image-4").fileinput({
        // uploadUrl: "/FileInput/Upload",
        allowedFileExtensions: ["jpg", "png", "gif"],
        maxImageWidth: 200,
        maxImageHeight: 150,
        resizePreference: 'height',
        maxFileCount: 1,
        resizeImage: true,
        resizeIfSizeMoreThan: 1000
    }).on('filepreupload', function () {
        $('#kv-success-box').html('');
    }).on('fileuploaded', function (event, data) {
        $('#kv-success-box').append(data.response.link);
        $('#kv-success-modal').modal('show');
    });
}

function inputAutoReplaceSetting() {
    $("#input-repl-1").fileinput({
        // uploadUrl: "/FileInput/Upload",
        autoReplace: true,
        maxFileCount: 1,
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $("#input-repl-1a").fileinput({
        // uploadUrl: "/FileInput/Upload",
        autoReplace: true,
        overwriteInitial: true,
        showUploadedThumbs: false,
        maxFileCount: 1,
        initialPreview: [
            "<img class='kv-preview-data file-preview-image' src='https://placeimg.com/1920/1080/any/grayscale'>"
        ],
        initialCaption: 'Initial-Image.jpg',
        initialPreviewShowDelete: false,
        showRemove: false,
        showClose: false,
        layoutTemplates: { actionDelete: '' }, // disable thumbnail deletion
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $("#input-repl-2").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        autoReplace: true,
        maxFileCount: 5,
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
}

function inputFileCountSetting() {
    $("#input-fcount-1").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        maxFileCount: 4,
        validateInitialCount: true,
        overwriteInitial: false,
        initialPreview: [
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/909/1920/1080'>",
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/910/1920/1080'>",
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/911/1920/1080'>"
        ],
        initialPreviewConfig: [
            { caption: "Scene-1.jpg", size: 628782, width: "120px", url: "/site/file-delete", key: 1 },
            { caption: "Scene-2.jpg", size: 982873, width: "120px", url: "/site/file-delete", key: 2 },
            { caption: "Scene-3.jpg", size: 567728, width: "120px", url: "/site/file-delete", key: 3 }
        ],
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $("#input-fcount-2").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        minFileCount: 2,
        validateInitialCount: true,
        overwriteInitial: false,
        initialPreview: [
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/1049/1920/1080'>",
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/1050/1920/1080'>"
        ],
        initialPreviewConfig: [
            { caption: "Places-1.jpg", size: 823677, width: "120px", url: "/site/file-delete", key: 1 },
            { caption: "Places-2.jpg", size: 926367, width: "120px", url: "/site/file-delete", key: 2 }
        ],
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $("#input-fcount-3").fileinput({
        maxFileCount: 4,
        validateInitialCount: true,
        overwriteInitial: false,
        initialPreview: [
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/1045/1920/1080'>",
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/1055/1920/1080'>",
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/1056/1920/1080'>",
        ],
        initialPreviewConfig: [
            { caption: "Nature-1.jpg", size: 628782, width: "120px", url: "/site/file-delete", key: 1 },
            { caption: "Nature-2.jpg", size: 982873, width: "120px", url: "/site/file-delete", key: 2 },
            { caption: "Nature-3.jpg", size: 567728, width: "120px", url: "/site/file-delete", key: 3 },
        ],
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $("#input-fcount-4").fileinput({
        minFileCount: 2,
        validateInitialCount: true,
        overwriteInitial: false,
        initialPreview: [
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/1047/1920/1080'>",
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/1054/1920/1080'>",
        ],
        initialPreviewConfig: [
            { caption: "City-1.jpg", size: 823677, width: "120px", url: "/site/file-delete", key: 1 },
            { caption: "City-2.jpg", size: 926367, width: "120px", url: "/site/file-delete", key: 2 },
        ],
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $("#kartik-input-705").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        maxFileCount: 3,
        maxTotalFileCount: 8,
        initialPreviewAsData: true,
        overwriteInitial: false,
        initialPreview: [
            "https://kartik-v.github.io/bootstrap-fileinput-samples/samples/Desert.jpg",
            "https://kartik-v.github.io/bootstrap-fileinput-samples/samples/Koala.jpg",
            "https://kartik-v.github.io/bootstrap-fileinput-samples/samples/Jellyfish.jpg",
        ],
        initialPreviewConfig: [
            { caption: "Desert.jpg", size: 628782, width: "120px", url: "/site/file-delete", key: 1 },
            { caption: "Koala.jpg", size: 982873, width: "120px", url: "/site/file-delete", key: 2 },
            { caption: "Jellyfish.jpg", size: 567728, width: "120px", url: "/site/file-delete", key: 3 }
        ],
    });

    $("#input-freqd-1").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        showUpload: false,
        showRemove: false,
        required: true,
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
    $(".btn-upload-3").on("click", function () {
        $("#input-freqd-1").fileinput('upload');
    });
    $(".btn-reset-3").on("click", function () {
        $("#input-freqd-1").fileinput('clear');
    });

    $("#input-freqd-2").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        showUpload: false,
        showRemove: false,
        required: true,
        validateInitialCount: true,
        overwriteInitial: false,
        initialPreviewAsData: true,
        initialPreview: [
            "https://picsum.photos/id/237/1920/1080"
        ],
        initialPreviewConfig: [
            { caption: "Animals-6.jpg", size: 628782, width: "120px", url: "/site/file-delete", key: 1 }
        ],
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
    $(".btn-upload-4").on("click", function () {
        $("#input-freqd-2").fileinput('upload');
    });
    $(".btn-reset-4").on("click", function () {
        $("#input-freqd-2").fileinput('clear');
    });

    $("#input-freqd-3").fileinput({
        showUpload: false,
        showRemove: false,
        required: true,
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
    $(".btn-upload-3").on("click", function () {
        $("#input-freqd-3").fileinput('upload');
    });

    $("#input-freqd-4").fileinput({
        showUpload: false,
        showRemove: false,
        required: true,
        validateInitialCount: true,
        overwriteInitial: false,
        initialPreviewAsData: true,
        initialPreview: [
            "https://picsum.photos/id/238/1920/1080"
        ],
        initialPreviewConfig: [
            { caption: "City-1.jpg", size: 628782, width: "120px", url: "/site/file-delete", key: 1 }
        ],
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
    $(".btn-upload-4").on("click", function () {
        $("#input-freqd-4").fileinput('upload');
    });
}

function inputPluginMethodsSetting() {

    /*MANIPULATION METHODS*/
    // the file input
    let $el4 = $('#file-4'), initPlugin = function () {
        $el4.fileinput({ previewClass: '' });
    };

    // initialize plugin
    initPlugin();

    // `disable` and `enable` methods
    $(".btn-disable").on('click', function () {
        let $btn = $(this);
        if (!$el4.data('fileinput')) {
            initPlugin();
        }
        if ($el4.attr('disabled')) {
            $el4.fileinput('enable');
            $btn.html('Disable').removeClass('btn-primary').addClass('btn-secondary');
        } else {
            $el4.fileinput('disable');
            $btn.html('Enable').removeClass('btn-secondary').addClass('btn-primary');
        }
    });

    // `destroy` method
    $(".btn-destroy").on('click', function () {
        if ($el4.data('fileinput')) {
            $el4.fileinput('destroy');
        }
    });

    // recreate plugin after destroy
    $(".btn-recreate").on('click', function () {
        if ($el4.data('fileinput')) {
            return;
        }
        initPlugin();
    });

    // refresh plugin with new options 
    $(".btn-refresh").on('click', function () {
        if (!$el4.data('fileinput')) {
            // just normal init when plugin is not initialized
            $el4.fileinput({ previewClass: 'bg-info' });
        } else {
            // refresh already initialized plugin with new options
            $el4.fileinput('refresh', { previewClass: 'bg-info' });
        }
    });

    // clear/reset the file input
    $(".btn-clear").on('click', function () {
        $el4.fileinput('clear');
    });

/*DELETE VALIDATION1*/
    let krajeeGetCount = function (id) {
        let cnt = $('#' + id).fileinput('getFilesCount');
        return cnt === 0 ? 'You have no files remaining.' :
            'You have ' + cnt + ' file' + (cnt > 1 ? 's' : '') + ' remaining.';
    };
    $('#file-5').fileinput({
        overwriteInitial: false,
        validateInitialCount: true,
        initialPreview: [
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/260/1920/1080'>",
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/261/1920/1080'>",
        ],
        initialPreviewConfig: [
            { caption: "Nature-1.jpg", width: "120px", url: "/site/file-delete", key: 1 },
            { caption: "Nature-2.jpg", width: "120px", url: "/site/file-delete", key: 2 }
        ],
    }).on('filebeforedelete', function () {
        let aborted = !window.confirm('Are you sure you want to delete this file?');
        if (aborted) {
            window.alert('File deletion was aborted! ' + krajeeGetCount('file-5'));
        };
        return aborted;
    }).on('filedeleted', function () {
        setTimeout(function () {
            window.alert('File deletion was successful! ' + krajeeGetCount('file-5'));
        }, 900);
    });

/*DELETE VALIDATION 2*/
    /*
    let krajeeGetCount = function (id) {
        let cnt = $('#' + id).fileinput('getFilesCount');
        return cnt === 0 ? 'You have no files remaining.' :
            'You have ' + cnt + ' file' + (cnt > 1 ? 's' : '') + ' remaining.';
    };
    */
    $('#file-6').fileinput({
        overwriteInitial: false,
        validateInitialCount: true,
        initialPreview: [
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/1038/1920/1080'>",
            "<img class='kv-preview-data file-preview-image' src='https://picsum.photos/id/1039/1920/1080'>",
        ],
        initialPreviewConfig: [
            { caption: "Nature-1.jpg", width: "120px", url: "/site/file-delete", key: 1 },
            { caption: "Cats-2.jpg", width: "120px", url: "/site/file-delete", key: 2 }
        ],
    }).on('filebeforedelete', function () {
        return new Promise(function (resolve, reject) {
            $.confirm({
                title: 'Confirmation!',
                content: 'Are you sure you want to delete this file?',
                type: 'red',
                buttons: {
                    ok: {
                        btnClass: 'btn-primary text-white',
                        keys: ['enter'],
                        action: function () {
                            resolve();
                        }
                    },
                    cancel: function () {
                        $.alert('File deletion was aborted! ' + krajeeGetCount('file-6'));
                    }
                }
            });
        });
    }).on('filedeleted', function () {
        setTimeout(function () {
            $.alert('File deletion was successful! ' + krajeeGetCount('file-6'));
        }, 900);
    });
}

function inputAjaxSetting() {
    $("#input-700").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        maxFileCount: 5
    });

    $("#input-701").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        maxFileCount: 5
    });

    $("#input-702").fileinput({
        theme: 'fa',
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        minFileCount: 2,
        maxFileCount: 5,
        overwriteInitial: false,
        initialPreview: [
            "http://lorempixel.com/800/460/people/1",
            "http://lorempixel.com/800/460/people/2"
        ],
        initialPreviewAsData: true, // identify if you are sending preview data only and not the raw markup
        initialPreviewFileType: 'image', // image is the default and can be overridden in config below
        initialPreviewConfig: [
            { caption: "People-1.jpg", size: 576237, width: "120px", url: "/site/file-delete", key: 1 },
            { caption: "People-2.jpg", size: 932882, width: "120px", url: "/site/file-delete", key: 2 },
        ],
        uploadExtraData: {
            img_key: "1000",
            img_keywords: "happy, places",
        }
    }).on('filesorted', function (e, params) {
        console.log('file sorted', e, params);
    }).on('fileuploaded', function (e, params) {
        console.log('file uploaded', e, params);
    }).on('filesuccessremove', function (e, id) {
        console.log('file success remove', e, id);
    });

    $("#input-703").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        minFileCount: 1,
        maxFileCount: 5,
        uploadExtraData: function (previewId, index) {
            return { key: index };
        },
        overwriteInitial: false,
        initialPreviewAsData: true // identify if you are sending preview data only and not the markup
    });

    $("#input-704").fileinput({
        allowedFileExtensions: ['jpg', 'png', 'gif'],
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        overwriteInitial: false,
        minFileCount: 1,
        maxFileCount: 5,
        initialPreviewAsData: true // identify if you are sending preview data only and not the markup
    });

    /*AJAX 6*/
    let $el1 = $("#input-705");
    $el1.fileinput({
        allowedFileExtensions: ['jpg', 'png', 'gif'],
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: true,
        deleteUrl: "/site/file-delete",
        showUpload: false, // hide upload button
        overwriteInitial: false, // append files to initial preview
        minFileCount: 1,
        maxFileCount: 5,
        browseOnZoneClick: true,
        initialPreviewAsData: true,
    }).on("filebatchselected", function (event, files) {
        $el1.fileinput("upload");
    });
    /*SERVER CODE(PHP EXAMPLE)
    // example of a PHP server code that is called in `uploadUrl` above
    // file-upload-batch script
    header('Content-Type: application/json'); // set json response headers
    $outData = upload(); // a function to upload the bootstrap-fileinput files
    echo json_encode($outData); // return json data
    exit(); // terminate

    // main upload function used above
    // upload the bootstrap-fileinput files
    // returns associative array
    function upload() {
        $preview = $config = $errors = [];
        $input = 'kartik-input-705'; // the input name for the fileinput plugin
        if (empty($_FILES[$input])) {
            return [];
        }
        $total = count($_FILES[$input]['name']); // multiple files
        $path = '/uploads/'; // your upload path
        for ($i = 0; $i < $total; $i++) {
            $tmpFilePath = $_FILES[$input]['tmp_name'][$i]; // the temp file path
            $fileName = $_FILES[$input]['name'][$i]; // the file name
            $fileSize = $_FILES[$input]['size'][$i]; // the file size

            //Make sure we have a file path
            if ($tmpFilePath != "") {
                //Setup our new file path
                $newFilePath = $path.$fileName;
                $newFileUrl = 'http://localhost/uploads/'.$fileName;

                //Upload the file into the new path
                if (move_uploaded_file($tmpFilePath, $newFilePath)) {
                    $fileId = $fileName.$i; // some unique key to identify the file
                    $preview[] = $newFileUrl;
                    $config[] = [
                        'key' => $fileId,
                        'caption' => $fileName,
                        'size' => $fileSize,
                        'downloadUrl' => $newFileUrl, // the url to download the file
                        'url' => 'http://localhost/delete.php', // server api to delete the file based on key
                    ];
                } else {
                    $errors[] = $fileName;
                }
            } else {
                $errors[] = $fileName;
            }
        }
        $out = ['initialPreview' => $preview, 'initialPreviewConfig' => $config, 'initialPreviewAsData' => true];
        if (!empty($errors)) {
            $img = count($errors) === 1 ? 'file "'.$error[0]. '" ' : 'files: "'.implode('", "', $errors). '" ';
            $out['error'] = 'Oh snap! We could not upload the '.$img. 'now. Please try again later.';
        }
        return $out;
    }
    */
/* END OF AJAX 6*/

    var $el2 = $("#input-706");

    // custom footer template for the scenario
    // the custom tags are in braces

    var footerTemplate = '<div class="file-thumbnail-footer" style ="height:94px">\n' +
        '  <input class="kv-input kv-new form-control input-sm form-control-sm text-center {TAG_CSS_NEW}" value="{caption}" placeholder="Enter caption...">\n' +
        '  <input class="kv-input kv-init form-control input-sm form-control-sm text-center {TAG_CSS_INIT}" value="{TAG_VALUE}" placeholder="Enter caption...">\n' +
        '   <div class="small" style="margin:15px 0 2px 0">{size}</div> {progress}\n{indicator}\n{actions}\n' +
        '</div>';

    $el2.fileinput({
        // uploadUrl: '/FileInput/MultipleUpload',
        uploadAsync: false,
        maxFileCount: 5,
        overwriteInitial: false,
        layoutTemplates: { footer: footerTemplate },
        previewThumbTags: {
            '{TAG_VALUE}': '',        // no value
            '{TAG_CSS_NEW}': '',      // new thumbnail input
            '{TAG_CSS_INIT}': 'kv-hidden'  // hide the initial input
        },
        initialPreview: [
            '<img class="file-preview-image kv-preview-data" src="http://lorempixel.com/800/460/city/1">',
            '<img class="file-preview-image kv-preview-data" src="http://lorempixel.com/800/460/city/2">',
        ],
        initialPreviewConfig: [
            { caption: "City-1.jpg", size: 327892, url: "/site/file-delete", key: 1 },
            { caption: "City-2.jpg", size: 438828, url: "/site/file-delete", key: 2 },
        ],
        initialPreviewThumbTags: [
            { '{TAG_VALUE}': 'City-1.jpg', '{TAG_CSS_NEW}': 'kv-hidden', '{TAG_CSS_INIT}': '' },
            {
                '{TAG_VALUE}': function () { // callback example
                    return 'City-2.jpg';
                },
                '{TAG_CSS_NEW}': 'kv-hidden',
                '{TAG_CSS_INIT}': ''
            }
        ],
        uploadExtraData: function () {  // callback example
            var out = {}, key, i = 0;
            $('.kv-input:visible').each(function () {
                var $thumb = $(this).closest('.file-preview-frame'); // gets the thumbnail
                var fileId = $thumb.data('fileid'); // gets the file identifier for file thumb
                out[fileId] = $el.val();
            });
            return out;
        }
    });

    $("#input-707").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        minFileCount: 2,
        maxFileCount: 5,
        overwriteInitial: false,
        initialPreview: [
            "<img class='file-preview-image kv-preview-data' src='http://lorempixel.com/800/460/nature/1'>",
            "<img class='file-preview-image kv-preview-data' src='http://lorempixel.com/800/460/nature/2'>",
            "<img class='file-preview-image kv-preview-data' src='http://lorempixel.com/800/460/nature/3'>",
        ],
        initialPreviewConfig: [
            { caption: "Food-1.jpg", size: 329892, url: "/site/file-delete", key: 1 },
            { caption: "Food-2.jpg", size: 872378, url: "/site/file-delete", key: 2 },
            { caption: "Food-3.jpg", size: 632762, url: "/site/file-delete", key: 3 },
        ],
        uploadExtraData: {
            img_key: "1000",
            img_keywords: "happy, nature",
        }
    });
    $("#input-707").on("filepredelete", function (jqXHR) {
        var abort = true;
        if (confirm("Are you sure you want to delete this image?")) {
            abort = false;
        }
        return abort; // you can also send any data/object that you can receive on `filecustomerror` event
    });

    $("#input-708").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        maxFileCount: 5
    }).on('filebatchpreupload', function (event, data) {
        var n = data.files.length, files = n > 1 ? n + ' files' : 'one file';
        if (!window.confirm("Are you sure you want to upload " + files + "?")) {
            return {
                message: "Upload aborted!", // upload error message
                data: {} // any other data to send that can be referred in `filecustomerror`
            };
        }
    });

    $("#input-709").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: true,
        showPreview: false,
        allowedFileExtensions: ['jpg', 'png', 'gif'],
        maxFileCount: 5,
        elErrorContainer: '#kv-error-1'
    }).on('filebatchpreupload', function (event, data, id, index) {
        $('#kv-success-1').html('<h4>Upload Status</h4><ul></ul>').hide();
    }).on('fileuploaded', function (event, data, id, index) {
        var fname = data.files[index].name,
            out = '<li>' + 'Uploaded file # ' + (index + 1) + ' - ' + fname + ' successfully.' + '</li>';
        $('#kv-success-1 ul').append(out);
        $('#kv-success-1').fadeIn('slow');
    });

    $("#input-710").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        uploadAsync: false,
        showPreview: false,
        allowedFileExtensions: ['jpg', 'png', 'gif'],
        maxFileCount: 5,
        elErrorContainer: '#kv-error-2'
    }).on('filebatchpreupload', function (event, data, id, index) {
        $('#kv-success-2').html('<h4>Upload Status</h4><ul></ul>').hide();
    }).on('filebatchuploadsuccess', function (event, data) {
        var out = '';
        $.each(data.files, function (key, file) {
            var fname = file.name;
            out = out + '<li>' + 'Uploaded file # ' + (key + 1) + ' - ' + fname + ' successfully.' + '</li>';
        });
        $('#kv-success-2 ul').append(out);
        $('#kv-success-2').fadeIn('slow');
    });

    $("#input-711").fileinput({
        // uploadUrl: "/FileInput/MultipleUpload",
        maxFileCount: 5,
        showBrowse: false,
        browseOnZoneClick: true
    });
}