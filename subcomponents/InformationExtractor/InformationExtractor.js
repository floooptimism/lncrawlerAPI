const { Cheerio } = require("cheerio");

class InformationExtractor {
    static htmlParser = null;
    constructor(source){
        this.source = source;
        this.parsedHTML = null;
    }

    parseHTML(html){}

    getNovelSearchResults(){}

    getNovelInformation(){}

    getNovelName(){}

    getNovelAuthor(){}

    getNovelCover(){}

    getNovelDescription(){}

    getNovelStatus(){}

    getNovelGenres(){}

    getNovelTags(){}

    getNovelType(){}

    getNovelLastUpdate(){}

    getNovelLastChapter(){}

    getNovelViews(){}

    getNovelRating(){}

    getNovelChaptersInfo(){}

    getNovelChapterContent(){}

}

module.exports = InformationExtractor;