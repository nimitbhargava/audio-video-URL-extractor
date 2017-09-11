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
var testCase1 = '<div class="sqs-audio-embed" data-url="https://static1.squarespace.com/static/50dc8cece4b03955129656eb/t/587bb6e5db29d69a1a276170/1484502978069/701_0231+%28online-audio-converter.com%29.mp3/original/701_0231+%28online-audio-converter.com%29.mp3">'
var testCase2 = '<div class="sqs-audio-embed" data-url="https://static1.squarespace.com/static/544b30c0e4b0023e70482546/t/58996bd944024399dae27e39/1486450657175/AF+Ep66.mp3/original/AF+Ep66.mp3">';
var testCase3 = '<div class="dropdown share-dropdown" id="downloadsButton"><button class="share-drop dropdown-toggle" data-toggle="dropdown"><i class="fa fa-download"></i><span class="hidden-xs">download</span></button><div class="dropdown-menu" role="menu" aria-labelledby="dLabel"><a class="btn" href="http://cdnapi.kaltura.com/p/537811/sp/53781100/playManifest/entryId/1_zaatpsw0/flavorId/1_vs6gl6x6/protocol/http/format/url/a.mp4" download="john-cleese-on-creativity-group-dynamics-and-celebrity-lq.mp4">SD video</a><a class="btn" href="http://cdnapi.kaltura.com/p/537811/sp/53781100/playManifest/entryId/1_zaatpsw0/flavorId/1_9ymnkm7b/protocol/http/format/url/a.mp3" download="john-cleese-on-creativity-group-dynamics-and-celebrity.mp3">audio</a></div></div>';
const $ = cheerio.load(testCase3);

getAudioVideoURLs();

browser.close();

function getAudioVideoURLs() {
    var audioSource = [], videoSource = [];
    $('audio source, video source, .sqs-audio-embed, .share-dropdown > .dropdown-menu > .btn').each(function () {
        var source = $(this).attr('src');

        var isAudioSource = $(this).is('audio source');
        var isSQSAudioEmbed = $(this).is('.sqs-audio-embed');
        var isShareDropDownAnchorButton = $(this).is('.share-dropdown > .dropdown-menu > .btn');
        var href = $(this).attr('href');


        if (isAudioSource) {
            audioSource.push(source);
        }
        else if (isSQSAudioEmbed) {
            audioSource.push($(this).data('url'));
        }
        else if (isShareDropDownAnchorButton) {
            var hrefIsAudio = href.indexOf("mp3") !== -1;
            if (hrefIsAudio) {
                audioSource.push(href);
            }
            else {
                videoSource.push(href);
            }
        } else {
            videoSource.push(source);
        }
    });

    showLinksIfAvailable(audioSource, "Audio");
    showLinksIfAvailable(videoSource, "Video");
}

function showLinksIfAvailable(source, type) {
    if (source.length) {
        console.log(type + " Links -");
        source.forEach(function (link) {
            console.log(link);
        });
    }
}
})();