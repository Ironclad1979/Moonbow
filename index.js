

const { listenerCount } = require('events');
const express = require('express');
const app = express();
const path = require('path');
const { Z_PARTIAL_FLUSH } = require('zlib');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app listen(3000, () => {
    console.log("listening on port 3000")
})
