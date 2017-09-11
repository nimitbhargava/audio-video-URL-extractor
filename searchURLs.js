
'use strict';

const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('http://example.com');

const DOMstring = await page.content();
console.log(DOMstring);

browser.close();

})();