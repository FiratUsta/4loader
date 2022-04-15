let allowedTypes = ["jpg", "jpeg", "png", "gif", "webm"];
let downloadDir = "4loader/";

const pathInput = document.getElementById("pathInput");
const jpgCheckbox = document.getElementById("jpgCheckbox");
const pngCheckbox = document.getElementById("pngCheckbox");
const gifCheckbox = document.getElementById("gifCheckbox");
const webmCheckbox = document.getElementById("webmCheckbox");

pathInput.onchange = () => saveSetting("downloadDir", pathInput.value);
jpgCheckbox.onchange = () => {typeCheck(jpgCheckbox, ["jpg", "jpeg"]); saveSetting("allowedTypes", allowedTypes)};
pngCheckbox.onchange = () => {typeCheck(pngCheckbox, ["png"]); saveSetting("allowedTypes", allowedTypes)};
gifCheckbox.onchange = () => {typeCheck(gifCheckbox, ["gif"]); saveSetting("allowedTypes", allowedTypes)};
webmCheckbox.onchange = () => {typeCheck(webmCheckbox, ["webm"]); saveSetting("allowedTypes", allowedTypes)};

function typeCheck(element, types) {
    if(element.checked){
        types.forEach(type => {
            allowedTypes.push(type);
        });
    }
    else{
        types.forEach(type => {
            if (allowedTypes.indexOf(type) !== -1) {
                allowedTypes.splice(allowedTypes.indexOf(type), 1);
            };
        });
    };
}

function domRefresh() {
    pathInput.value = downloadDir;
    if(allowedTypes.includes("jpg")){
        jpgCheckbox.checked = true;
    };
    if(allowedTypes.includes("png")){
        pngCheckbox.checked = true;
    };
    if(allowedTypes.includes("gif")){
        gifCheckbox.checked = true;
    };
    if(allowedTypes.includes("webm")){
        webmCheckbox.checked = true;
    };
}

async function loadSettings() {
    let init = await browser.storage.local.get("init");
    if(init["init"] !== true){
        browser.storage.local.set({"downloadDir": "4loader/"});
        browser.storage.local.set({"allowedTypes": ["jpg", "jpeg", "png", "gif", "webm"]});
        browser.storage.local.set({"init": true});
    };
    let storedTypes = await browser.storage.local.get("allowedTypes");
    if(storedTypes != undefined){
        allowedTypes = storedTypes["allowedTypes"];
    };
    let storedDir = await browser.storage.local.get("downloadDir");
    if(storedDir != undefined){
        downloadDir = storedDir["downloadDir"];
    };
    domRefresh();
}

function saveSetting(key, value) {
    saveObject = {};
    saveObject[key] = value;
    browser.storage.local.set(saveObject);
}

loadSettings();