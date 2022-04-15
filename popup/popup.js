let allowedTypes = ["jpg","jpeg","png","gif","webm"]
let downloadDir = "4loader/";

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