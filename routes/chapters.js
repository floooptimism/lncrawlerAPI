const ScraperManager = require("../components/ScraperManager/init");

/**
 * API Route - Fetches all novel chapters info
 * @param {String} scraperSource - Scraper source
 * @param {String} novelURL - Novel url
 * @returns {Object[]} - Novel chapters info
 */

function chaptersroute(req, res){
    let scraperSource = req.query.scraperSource;
    let novelURL = req.query.novelURL;
    
    // get our scraper using the scraper source
    let scraper = ScraperManager.getScraperBySource(scraperSource);
    scraper.getNovelChaptersInfo(novelURL)
    .then(chapters => {
        res.json(chapters);
    });
}

module.exports = chaptersroute