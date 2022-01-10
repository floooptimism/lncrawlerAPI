class Scraper {
    static sourceURL = "";
    static queryString = "";

    constructor(informationExtractor, pageFetcher){
        this.informationExtractor = new informationExtractor(this.constructor.sourceURL);
        this.pageFetcher = new pageFetcher();
    }

    static getSource(){
        return this.sourceURL;
    }

    async getNovelInfo(novelURL){
        // get novel information and return object
    }

    async getNovelChaptersInfo(novelURL){
        // get chapters info and return array of chapters info
    }

    async getChapterContent(chapterURL){
        // get chapter content and return string
    }

    async getChaptersContents(novelURL, minChapter, maxChapter){
        // get all chapters base on minChapter and maxChapter and return array of chapter content
    }

    async searchNovel(searchQuery){
        // search novel and return array of novels
    }

}

module.exports = Scraper;