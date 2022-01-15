const LightNovelDotWorldScraper = require("../components/Scraper/concrete/LightNovelDotWorldScraper");

//components
const LightNovelDotWorldIE = require("../subcomponents/InformationExtractor/concretes/LightNovelDotWorldIE");
const DefaultPageFetcher = require("../subcomponents/PageFetcher/concretes/DefaultPageFetcher");

let scraper = new LightNovelDotWorldScraper(LightNovelDotWorldIE, DefaultPageFetcher);

scraper.searchNovel("Beginning")
    .then(res => {
        for(let i of res){
            console.log(i);
        }
    })
    .catch(err => {
        console.log(err);
    })