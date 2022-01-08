// create express server
const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
}
);

