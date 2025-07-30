
const express = require('express');  // Import exprerss.js
const app = express(); //The app object conventionally denotes the Express application. 
const PORT = 3000

const cors = require('cors'); 
app.use(cors());
app.use (express.json()); //Mounts the specified middleware function. In this case we are using middleware to parse 
                            //JSON data

// if running from a single server then link to the built version of angular in the dist directory.                            
//const path = require('path');
//app.use(express.static(path.join(__dirname, '../.....')));

require('./routes/api-login.js').route(app);
require('./listen.js').start(app,PORT);
