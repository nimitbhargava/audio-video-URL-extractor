'use strict';
var websites = {
    'https://fireandfragrance.com/podcasts/2017/1/15/andy-byrd-boundless-love': 'https://static1.squarespace.com/static/50dc8cece4b03955129656eb/t/587bb6e5db29d69a1a276170/1484502978069/701_0231+%28online-audio-converter.com%29.mp3/original/701_0231+%28online-audio-converter.com%29.mp3',
    'https://www.archaeologypodcastnetwork.com/archyfantasies/66': 'https://static1.squarespace.com/static/544b30c0e4b0023e70482546/t/58996bd944024399dae27e39/1486450657175/AF+Ep66.mp3/original/AF+Ep66.mp3?download=true',
    'http://www.cornell.edu/video/john-cleese-on-creativity-group-dynamics-and-celebrity ': 'http://cdnapi.kaltura.com/p/537811/sp/53781100/playManifest/entryId/1_zaatpsw0/flavorId/1_9ymnkm7b/protocol/http/format/url/a.mp3, http://cdnapi.kaltura.com/p/537811/sp/53781100/playManifest/entryId/1_zaatpsw0/flavorId/1_vs6gl6x6/protocol/http/format/url/a.mp4',
    'https://art19.com/shows/recode-decode/episodes/167e0f2a-832a-4bda-81b5-316879e0f236': 'https://rss.art19.com/episodes/167e0f2a-832a-4bda-81b5-316879e0f236.mp3'
};

Object.keys(obj).forEach(function (key) {
    const puppeteer = require('puppeteer');

    (async() => {

        const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(key);
    const DOMstring = await page.content();
    const cheerio = require('cheerio');

    const $ = cheerio.load(DOMstring);

    getAudioVideoURLs();
    console.log(obj[key]);


    browser.close();


})();
});

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