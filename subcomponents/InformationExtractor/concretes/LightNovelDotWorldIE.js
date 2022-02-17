const InformationExtractor = require("../InformationExtractor");

class LightNovelDotWorldIE extends InformationExtractor {
    static htmlParser = require("cheerio");

    constructor(source){
        super(source);
    }

    /**
     * Parses html
     * @param {String} html 
     * @returns true if html parsed is valid, false otherwise
     */
    parseHTML(html){
        if(html == null){
            return null;
        }
        this.parsedHTML = this.constructor.htmlParser.load(html);
        return true;
    }

    getNovelSearchResults(){
        let $ = this.parsedHTML;
        let searchResult = [];
        $("div#contnet").children().each((index, element) => {
            let novelResult = {};
            let infos = $(element).find(".book_info_r > ul").children();

            ([novelResult.title, novelResult.author] = infos.eq(0).text()
                .split("\n")
                .map(val => val.trim())
                .filter(val => val != ""));

            novelResult.latestChapter = infos.eq(1).text();
            novelResult.description = infos.eq(2).text();
            novelResult.url = this.source + infos.eq(3).children().last().attr("href");
            
            infos = $(element).find(".book_info_l > img");
            novelResult.cover = this.source + infos.attr("src");
            
            searchResult.push(novelResult);
        })

        return searchResult;
                              
    }

    getNovelInformation(){
        let novelInformation = {};

        novelInformation.name = this.getNovelName();
        novelInformation.author = this.getNovelAuthor();
        novelInformation.cover = this.getNovelCover();
        novelInformation.description = this.getNovelDescription();
        novelInformation.status = this.getNovelStatus();
        novelInformation.genres = this.getNovelGenres();
        novelInformation.tags = this.getNovelTags();
        novelInformation.type = this.getNovelType();
        novelInformation.lastUpdate = this.getNovelLastUpdate();
        novelInformation.lastChapter = this.getNovelLastChapter();
        novelInformation.views = this.getNovelViews();
        novelInformation.rating = this.getNovelRating();

        return novelInformation;
    }

    getNovelName(){
        let novelName = this.parsedHTML(".book_info_r .text1.textC000").text();
        return novelName.split("\n")[0].trim();
    }

    getNovelAuthor(){
        let novelAuthor = this.parsedHTML(".book_info_r .text1.textC000").text();
        return novelAuthor.split("\n")[1].trim();
    }

    getNovelCover(){
        let novelCover = this.parsedHTML(".book_info_l img").attr("src");
        return this.source + novelCover;
    }

    getNovelDescription(){
        let novelDescription = this.parsedHTML(".book_info_desc.text4.textC999").text();
        return novelDescription;
    }

    getNovelStatus(){
        // source doesn't show status
        return null;
    }

    getNovelGenres(){
        // source doesn't show genres
        return null;
    }

    getNovelTags(){
        // source doesn't show tags
        return null;
    }

    getNovelType(){
        // source doesn't show type
        return null;
    }

    getNovelLastUpdate(){
        //source doesn't show last update
        return null;
    }

    getNovelLastChapter(){
        let $ = this.parsedHTML;

        let element = $(".book_info_r ul").children().eq(1).children().first();
        let chapterName = element.text();
        let chapterURL = this.source + $(element).attr("href");
        return {
            name: chapterName,
            url: chapterURL
        }
    }

    getNovelViews(){
        // source doesn't show views
        return null;
    }

    getNovelRating(){
        //source doesn't show rating
        return null;
    }

    getNovelChaptersInfo(){
        let novelChaptersInfo = [];

        let $ = this.parsedHTML;
        let chapters = $("div.chapter_content ul").children();

        chapters.each((index, element) => {
            let chapterInfo = {};
            chapterInfo.name = $(element).children().first().text();
            chapterInfo.url = this.source + $(element).children().first().attr("href");
            novelChaptersInfo.push(chapterInfo);
        })

        return novelChaptersInfo;
    }

    getNovelChapterContent(){
        let novelChapterContent = this.parsedHTML("div#content_detail").text();
        return novelChapterContent;
    }

}

module.exports = LightNovelDotWorldIE;
