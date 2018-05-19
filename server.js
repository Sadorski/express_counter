
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(session({
    secret: 'penguinsrock',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
  
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(`${__dirname}/static`)));
app.set('views', path.join(`${__dirname}/views`));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    if(!req.session.count) {
        req.session.count = 0
    }
    req.session.count++
    res.locals.count = req.session.count
    res.render('index')
})


app.listen(8000, function(){
    console.log("How ya doing on 8000?");
})

