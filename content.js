browser.runtime.onMessage.addListener(mainAction);

function downloadImages() {
    const elementList = document.querySelectorAll(".fileText");
}

function mainAction() {
    browser.downloads.showDefaultFolder();
}