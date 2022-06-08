
function callIfElse(condition, truefunc, falsefunc) {
    return condition ? truefunc() : falsefunc();
  }

class Scraper {

    constructor(sourceURL, searchString, informationExtractor, pageFetcher){
        this.sourceURL = sourceURL;
        this.searchString = searchString;

        this.informationExtractor = new informationExtractor(sourceURL);
        this.pageFetcher = new pageFetcher();
    }

    getSource(){
        return this.sourceURL;
    }

    async getNovelInfo(novelURL){
        let page = await this.pageFetcher.fetchPage(novelURL);
        let res = callIfElse(this.informationExtractor.parseHTML(page),
                          this.informationExtractor.getNovelInformation.bind(this.informationExtractor),
                          () => null);
        if(res) res.url = novelURL;
        return res;
    }
    

    async getNovelChaptersInfo(novelURL){
        let page = await this.pageFetcher.fetchPage(novelURL);
        return callIfElse(this.informationExtractor.parseHTML(page),
                          this.informationExtractor.getNovelChaptersInfo.bind(this.informationExtractor),
                          () => null);
    }

    async getNovelChapterContent(chapterURL){
        let page = await this.pageFetcher.fetchPage(chapterURL);
        console.log(page);
        return callIfElse(this.informationExtractor.parseHTML(page),
                            this.informationExtractor.getNovelChapterContent.bind(this.informationExtractor),
                            () => null);
    }

    async searchNovel(searchQuery){
        let page = await this.pageFetcher.fetchPage(this.getSource() + this.searchString + encodeURIComponent(searchQuery));
        console.log(this.getSource() + this.searchString + encodeURIComponent(searchQuery))
        this.informationExtractor.parseHTML(page);
        console.log(page);
        return callIfElse(this.informationExtractor.parseHTML(page),
                            this.informationExtractor.getNovelSearchResults.bind(this.informationExtractor),
                            () => null);
    }

}

module.exports = Scraper;