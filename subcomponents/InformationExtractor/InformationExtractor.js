const { Cheerio } = require("cheerio");

class InformationExtractor {
    static htmlParser = null;
    constructor(){
        this.parsedHTML = null;
    }

    parseHTML(html){}

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