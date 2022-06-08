const ScraperManager = require("./ScraperManager");
const LightNovelDotWorldScraper = require("../Scraper/concrete/LightNovelDotWorldScraper");

let scraperManager = new ScraperManager();


//register your scrapers here
scraperManager.registerScraper(LightNovelDotWorldScraper);

module.exports = scraperManager;