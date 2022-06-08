const Scraper = require("../Scraper");
const LightNovelDotWorldIE  = require('../../../subcomponents/InformationExtractor/concretes/LightNovelDotWorldIE');
const DefaultPageFetcher = require("../../../subcomponents/PageFetcher/concretes/DefaultPageFetcher");

var sourceURL = "https://lightnovel.world";
var queryString = "/search?keyword=";

const LightNovelDotWorldScraper = new Scraper(sourceURL, queryString, LightNovelDotWorldIE, DefaultPageFetcher);

module.exports = LightNovelDotWorldScraper;
