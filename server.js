var express = require('express');
var app = express();

app.use(express.static('client'));

var port = process.env.PORT || 3030;

app.listen(port);