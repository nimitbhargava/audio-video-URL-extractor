## Audio/Video URL Extractor

#### Steps to Run - 

1. Clone/Download the repo to local machine
2. `npm install` at the local repo
3. Replace the page.goto() parameter with your **URL string** and uncomment the await page.goto('.. line
4. Replace cheerio.load(..) with `cheerio.load(DOMstring)`
5. At command prompt/terminal `node searchURLs.js`
 
 
#### Test Cases - 

| Input                                                                               | Output                                                                                                                                                                                                                     |
|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| https://fireandfragrance.com/podcasts/2017/1/15/andy-byrd-boundless-love            | Audio Links -https://static1.squarespace.com/static/50dc8cece4b03955129656eb/t/587bb6e5db29d69a1a276170/1484502978069/701_0231+%28online-audio-converter.com%29.mp3/original/701_0231+%28online-audio-converter.com%29.mp3 |
| https://www.archaeologypodcastnetwork.com/archyfantasies/66                         | Audio Links -https://static1.squarespace.com/static/544b30c0e4b0023e70482546/t/58996bd944024399dae27e39/1486450657175/AF+Ep66.mp3/original/AF+Ep66.mp3                                                                     |
| http://www.cornell.edu/video/john-cleese-on-creativity-group-dynamics-and-celebrity | Audio Links -http://cdnapi.kaltura.com/p/537811/sp/53781100/playManifest/entryId/1_zaatpsw0/flavorId/1_9ymnkm7b/protocol/http/format/url/a.mp3 Video Links - http://cdnapi.kaltura.com/p/537811/sp/53781100/playManifest/entryId/1_zaatpsw0/flavorId/1_vs6gl6x6/pro
tocol/http/format/url/a.mp4                                   |
| https://art19.com/shows/recode-decode/episodes/167e0f2a-832a-4bda-81b5-316879e0f236 | X                                                                                                                                                                                                                          |

