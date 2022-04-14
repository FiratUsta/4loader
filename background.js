browser.browserAction.onClicked.addListener(sendMessage);

function sendMessage(tab){
    browser.tabs.sendMessage(tab.id,"run")
};