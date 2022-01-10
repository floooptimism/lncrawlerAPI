const Scraper = require("../Scraper");

class LightNovelDotWorldScraper extends Scraper{
    static sourceURL = "https://www.lightnovel.world";
    static searchString = "/search?keyword=";

    constructor(informationExtractor, pageFetcher){
        super(informationExtractor, pageFetcher);
    }

    async getNovelInfo(novelURL){
        let page = await this.pageFetcher.fetchPage(novelURL);
        if(!this.informationExtractor.parseHTML(page)){
            return null;
        }
        return this.informationExtractor.getNovelInformation();
    }

    async getNovelChaptersInfo(novelURL){
        let page = await this.pageFetcher.fetchPage(novelURL);
        if(!this.informationExtractor.parseHTML(page)){
            return null;
        }
        return this.informationExtractor.getNovelChaptersInfo();
    }

    async getNovelChapterContent(chapterURL){
        let page = await this.pageFetcher.fetchPage(chapterURL);
        if(!this.informationExtractor.parseHTML(page)){
            return null;
        }
        return this.informationExtractor.getNovelChapterContent();
    }

    async searchNovel(searchQuery){
        let page = await this.pageFetcher.fetchPage(this.constructor.sourceURL + this.constructor.searchString + encodeURIComponent(searchQuery));
        if(!this.informationExtractor.parseHTML(page)){
            return null;
        }
        return this.informationExtractor.getNovelSearchResults();
    }
}

module.exports = LightNovelDotWorldScraper;