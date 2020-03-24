const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client'));


app.listen(2700, () => console.log('Listening'));
