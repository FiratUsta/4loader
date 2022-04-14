browser.browserAction.onClicked.addListener(requestImageLinks);
browser.runtime.onMessage.addListener(downloadImages);

function requestImageLinks(tab) {
    browser.tabs.sendMessage(tab.id,"run")
};

function downloadImages(linkList) {
    console.log(linkList)
};