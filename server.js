const express = require('express');
const mongoose = require('body-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

let moistureTreshold = 400;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/treshold', (req, res) => {
    res.send( moistureTreshold.toString());
});

app.post('/treshold', (req, res) => {
    const { treshold } = req.body;
    if (treshold) {
    moistureTreshold = parseInt(treshold);
    res.send({ message: "Treshold Updated." });
    } else {
        res.status(400).send({ error: "Treshold not provided." });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});