const { default: axios } = require('axios');
const InterfacePageFetcher = require('../PageFetcher');

class DefaultPageFetcher extends InterfacePageFetcher{
    static httpClient = axios;
    
    async fetchPage(url){
        // get request axios and return response
        try{
            return await PageFetcher.httpClient.get(url).data;
        }catch(err){
            return null;
        }
    }
}

module.exports = DefaultPageFetcher;