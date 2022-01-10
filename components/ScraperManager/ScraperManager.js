class ScraperManager{
    constructor(){
        this.scrapers = {};
    }

    getScraperBySource(scraperSource){
        if(!this.scrapers[scraperSource]){
            throw new Error(`Scraper with source ${scraperSource} not found`);
        }
        return this.scrapers[scraperSource];
    }

    registerScraper(scraper){
        let scraperSource = scraper.getSource();
        if(this.scrapers[scraperSource]){
            throw new Error(`Scraper with source ${scraperSource} already exists`);
        }
        this.scrapers[scraperSource] = scraper;
    }

}

module.exports = ScraperManager;