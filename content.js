//browser.runtime.onMessage.addListener(getImageLinks);

function getImageLinks() {
    const elementList = document.querySelectorAll(".fileText");
    const linkList = [];
    elementList.forEach(element => {
        const imageLink = element.children[0]; 
        const linkObject = {}; 
        linkObject["filename"] = imageLink.innerText;
        linkObject["url"] = imageLink.href;
        linkList.push(linkObject);
    });
    browser.runtime.sendMessage(linkList);
};

function createDownloadButton (){
    // Create the download button div
    const div = document.createElement('div');
    // Style the button
    div.id = "4loader";
    div.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>';
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.position = "fixed";
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.bottom = "50px";
    div.style.right = "50px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = "#f0e0d6";
    div.style.userSelect = "none";
    div.style.cursor = "pointer";
    div.style.boxShadow = "2px 2px #00000050"
    // Add onClick function to the button
    div.onclick = () => getImageLinks();
    // Inject the button
    document.body.appendChild(div);
};

createDownloadButton();