const ScraperManager = require("../components/ScraperManager/init");

/**
 * Searches a particular novel
 * @param {String} scraperSource - Scraper source
 * @param {String} novelName - Novel name
 * @returns {Object[]} - Novel Results
 */

function searchroute(req, res){
    console.log(req.query.scraperSource);
    let scraperSource = req.query.scraperSource;
    let novelName = req.query.novelName;
    
    // get our scraper using the scraper source
    let scraper = ScraperManager.getScraperBySource(scraperSource)
    // if scraper null, respond with error
    if(scraper == null){
        return res.json({
            error: "Scraper for source " + scraperSource + " not found"
        });
    }

    scraper.searchNovel(novelName)
    .then(results => {
        res.json(results);
    })
}

module.exports = searchroute