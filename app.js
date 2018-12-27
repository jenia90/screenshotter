const puppeteer = require("puppeteer");
const fs = require('fs')

let intD = 0;

function process () {
    let urlText = document.getElementById('urlText').value;
    let scrName = document.getElementById('scrName').value;
    let interval = document.getElementById('interval').value;
    if(!scrName || !urlText){
        return;
    }

    fs.existsSync(scrName) || fs.mkdirSync(scrName); // Create a dir if one doesnt exist
    
    var counter = 0;
    console.log('Saving \'' + urlText + '\' as ' + scrName + '#');
    var capture = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        page.setViewport({width: 1920, height: 1200});
        await page.goto(urlText);
        await page.screenshot({path: scrName + '/' + scrName + (counter++) + ".jpg"});
        await browser.close();
    }
    capture();
    intD = setInterval(capture, interval);
    
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('processBtn').addEventListener('click', process);
    document.getElementById('stopBtn').addEventListener('click', () => { 
        console.log('Stopping capture.')
        clearInterval(intD); 
    });
});