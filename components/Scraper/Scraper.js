class Scraper {
    static sourceURL = "";
    static queryString = "";

    constructor(informationExtractor, pageFetcher){
        this.informationExtractor = informationExtractor;
        this.pageFetcher = pageFetcher;
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