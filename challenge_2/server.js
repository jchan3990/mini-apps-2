const path = require('path');
const Parser = require('body-parser');
const axios = require('axios');
const express = require('express');

const app = express();
const port = 3000;

app.use(Parser.urlencoded({extended: true}));
app.use(Parser.json());
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))