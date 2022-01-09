const axios = require('axios');
const PageFetcher = require('../PageFetcher');

class DefaultPageFetcher extends PageFetcher{
    static httpClient = axios;
    
    async fetchPage(url){
        // get request axios and return response
        try{
            let response = await this.constructor.httpClient.get(url);
            return response.data;
        }catch(err){
            return null;
        }
    }
}

module.exports = DefaultPageFetcher;