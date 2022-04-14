browser.runtime.onMessage.addListener(getImageLinks);

function getImageLinks() {
    const elementList = document.querySelectorAll(".fileText");
    const linkList = [];
    elementList.forEach(element => {
        const imageLink = element.children[0]; 
        const linkObject = {}; 
        linkObject[imageLink.innerText] = imageLink.href;
        linkList.push(linkObject);
    });
    browser.runtime.sendMessage(linkList);
};