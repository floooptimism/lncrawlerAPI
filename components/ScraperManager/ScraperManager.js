const parse = require('url-parse');

class ScraperManager{
    constructor(){
        this.scrapers = {};
    }

    getScraperBySource(scraperSource){
        let host = parse(scraperSource).host;
        if(!this.scrapers[host]){
            return null
            // throw new Error(`Scraper with source ${host} not found`);
        }
        return this.scrapers[host];
    }

    registerScraper(scraper){
        let scraperSource = parse(scraper.getSource()).host;
        console.log("Registering scraper with source: " + scraperSource);
        if(this.scrapers[scraperSource]){
            throw new Error(`Scraper with source ${scraperSource} already exists`);
        }
        this.scrapers[scraperSource] = scraper;
    }

}

module.exports = ScraperManager;