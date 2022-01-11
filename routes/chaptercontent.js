const ScraperManager = require("../components/ScraperManager/init");

/**
 * Fetches novel chapter content
 * @param {String} scraperSource - Scraper source
 * @param {String} chapterURL - Chapter url
 * @returns {String} - Chapter content
 */

function chaptercontentroute(req, res) {
  let scraperSource = req.query.scraperSource;
  let chapterURL = req.query.chapterURL;

  // get our scraper using the scraper source
  let scraper = ScraperManager.getScraperBySource(scraperSource);
  scraper.getNovelChapterContent(chapterURL)
  .then((content) => {
    res.json(content);
  });
}

module.exports = chaptercontentroute;
