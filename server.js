//add dependencies
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

//initialize express app
var express = require("express");
var app = express();

// set up logger for development
app.use(logger("dev"));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
//set app engine
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"})
);
