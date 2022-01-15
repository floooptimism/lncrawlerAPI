var DefaultPageFetcher = require('../subcomponents/PageFetcher/concretes/DefaultPageFetcher');
var LightNovelDotWorldIE = require('../subcomponents/InformationExtractor/concretes/LightNovelDotWorldIE');
var pageFetcher = new DefaultPageFetcher();
var informationExtractor = new LightNovelDotWorldIE("https://lightnovel.world");

var source = "https://lightnovel.world/content/1616/263961.html";

pageFetcher.fetchPage(source)
    .then(res => {
        informationExtractor.parseHTML(res);
        var res = informationExtractor.getNovelChapterContent();
        console.log(res)
    })
    .catch(err => {
        console.log(err);
        console.log("Error page fetcher");
    })
    