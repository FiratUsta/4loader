browser.runtime.onMessage.addListener(downloadMedia);
browser.storage.onChanged.addListener(loadSettings);

let allowedTypes = ["jpg","jpeg","png","gif","webm"]
let downloadDir = "4loader/";

function downloadMedia(linkList) {
    linkList.forEach(link => {
        const fnameArray = link["filename"].split(".");
        const type = fnameArray[fnameArray.length - 1];
        if(allowedTypes.includes(type)){
            link["filename"] = downloadDir + link["filename"];
            link["conflictAction"] = "uniquify";
            browser.downloads.download(link);
        };
    });
}

function loadSettings()  {
    let storedTypes = await browser.storage.local.get("allowedTypes");
    if(storedTypes != undefined){
        allowedTypes = storedTypes;
    };
    let storedDir = await browser.storage.local.get("downloadDir");
    if(storedDir != undefined){
        downloadDir = storedDir;
    };
}

loadSettings();