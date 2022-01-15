// create express server
const express = require('express');
const app = express();
const cors = require('cors');

//import middlewares
    const middlewareCheckParameter = require('./middlewares/middlewareCheckParameter');
    const compression = require('compression');

// import routes
    const novelinforoute = require('./routes/novelinfo');
    const chaptersroute = require('./routes/chapters');
    const chaptercontentroute = require('./routes/chaptercontent');
    const searchroute = require('./routes/search');

// middleware
    app.use(cors());
    app.use(compression());

// routes
    app.get('/', (req, res) => {
        res.send('henlo worl');
        });
    app.get('/novelinfo',middlewareCheckParameter('scraperSource'), 
                        middlewareCheckParameter('novelURL'), 
                        novelinforoute);
    app.get('/chapters', middlewareCheckParameter('scraperSource'),
                        middlewareCheckParameter('novelURL'),
                        chaptersroute)
    app.get('/chaptercontent', middlewareCheckParameter('scraperSource'),
                            middlewareCheckParameter('chapterURL'),
                            chaptercontentroute)
    app.get('/search', middlewareCheckParameter('scraperSource'),
                    middlewareCheckParameter('novelName'),
                    searchroute)


app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000');
}
);

