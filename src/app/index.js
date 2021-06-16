const express = require('express');
//const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({entended:false}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./controllers/AuthController')(app);
require('./controllers/ProjectController')(app);

app.listen(3333);