const ScraperManager = require("../components/ScraperManager/init");

/**
 * Gets the novel information
 * @param {String} scraperSource - Scraper source
 * @param {String} novelURL - Novel url
 * @returns {Object} - Novel info
 */
function novelinforoute(req, res){
    let scraperSource = req.query.scraperSource;
    let novelURL = req.query.novelURL;

    // get our scraper using the scraper source
    let scraper = ScraperManager.getScraperBySource(scraperSource);
    scraper.getNovelInfo(novelURL)
    .then(info => {
        res.json(info);
    })
}

module.exports = novelinforoute;
