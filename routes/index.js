var express = require('express');
var router = express.Router();

var request = require('request');
var cheerio = require('cheerio');

var multimediaExtensions = {
    audio: ['mid', 'midi', 'rm', 'ram', 'wma', 'aac', 'wav', 'ogg', 'mp3', 'mp4'],
    video: ['mpg', 'mpeg', 'avi', 'wmv', 'mov', 'rm', 'ram', 'ogg', 'webm', 'mp4']
};

url = 'http://art19.com/shows/recode-decode/episodes/167e0f2a-832a-4bda-81b5-316879e0f236';

request(url, function (error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);
        console.log($.html());
    }
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'URL Extractor'});
});

module.exports = router;
