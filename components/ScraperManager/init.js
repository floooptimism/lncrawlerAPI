const Scraper = require("../Scraper/Scraper");
const ScraperManager = require("./ScraperManager");


// SCRAPERS

    // www.lightnovel.world
    const LightNovelDotWorldIE = require("../../subcomponents/InformationExtractor/concretes/LightNovelDotWorldIE");
    const DefaultPageFetcher = require("../../subcomponents/PageFetcher/concretes/DefaultPageFetcher");
    const LightNovelDotWorldScraper = require("../Scraper/concrete/LightNovelDotWorldScraper");




    

let scraperManager = new ScraperManager();

//register your scrapers here
scraperManager.registerScraper(new LightNovelDotWorldScraper(LightNovelDotWorldIE, DefaultPageFetcher));

module.exports = scraperManager;