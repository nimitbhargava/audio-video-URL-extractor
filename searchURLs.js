
'use strict';

const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
const page = await browser.newPage();
// await page.goto('https://fireandfragrance.com/podcasts/2017/1/15/andy-byrd-boundless-love');

const DOMstring = await page.content();

const cheerio = require('cheerio');

// HTML <audio> Tag - https://www.w3schools.com/tags/tag_audio.asp
var audioTag = '<audio controls>    <source src="horse.ogg" type="audio/ogg">    <source src="horse.mp3" type="audio/mpeg">    Your browser does not support the audio tag.</audio>';
// HTML <video> Tag - https://www.w3schools.com/tags/tag_video.asp
var videoTag = '<video width="320" height="240" controls>    <source src="movie.mp4" type="video/mp4">    <source src="movie.ogg" type="video/ogg">    Your browser does not support the video tag.</video>';
var testCase1  = '<div class="sqs-audio-embed" data-url="https://static1.squarespace.com/static/50dc8cece4b03955129656eb/t/587bb6e5db29d69a1a276170/1484502978069/701_0231+%28online-audio-converter.com%29.mp3/original/701_0231+%28online-audio-converter.com%29.mp3">'
var testCase2 = '<div class="sqs-audio-embed" data-url="https://static1.squarespace.com/static/544b30c0e4b0023e70482546/t/58996bd944024399dae27e39/1486450657175/AF+Ep66.mp3/original/AF+Ep66.mp3">';
const $ = cheerio.load(testCase2);

var audioSource = [], videoSource = [];
$('audio source, video source, .sqs-audio-embed').each(function () {
    var source = $(this).attr('src');
    var isAudioSource = $(this).is('audio source');
    if (isAudioSource){
        audioSource.push(source);
    }
    else {
        if ($(this).is('.sqs-audio-embed')) {
            audioSource.push($(this).data('url'));
        }
        else {
            videoSource.push(source);
        }
    }
});

if (audioSource.length) {
    console.log("Audio Links -");
    audioSource.forEach(function (audio) {
        console.log(audio);
    });
}

if (videoSource.length) {
    console.log("Video Links -");
    videoSource.forEach(function (video) {
        console.log(video);
    });
}

browser.close();

})();