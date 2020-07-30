const Parser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(Parser.json())
app.use(Parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => '');

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))