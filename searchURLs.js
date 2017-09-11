
'use strict';

const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://www.w3schools.com/tags/tag_video.asp');

const DOMstring = await page.content();

const cheerio = require('cheerio');
var testHTML = '<audio controls>    <source src="horse.ogg" type="audio/ogg">    <source src="horse.mp3" type="audio/mpeg">    Your browser does not support the audio tag.</audio><video width="320" height="240" controls>    <source src="movie.mp4" type="video/mp4">    <source src="movie.ogg" type="video/ogg">    Your browser does not support the video tag.</video>';
const $ = cheerio.load(testHTML);

var audioSource = [], videoSource = [];
$('audio source, video source').each(function () {
    var source = $(this).attr('src');
    var isAudioSource = $(this).is('audio source');
    if (isAudioSource) audioSource.push(source);
    else videoSource.push(source);
});

browser.close();

})();