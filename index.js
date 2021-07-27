var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({
    defaultLayout:'main'
}));
app.set('view engine', 'handlebars');

//path or folder where your images are in
app.use(express.static('images'))

app.get('/', function (req, res) {
    res.render('index', {
        greeting: "Welcome to my home page"
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        greeting: "Welcome to my about page"
    });
});

const port = 5005;

app.listen(port, ()=>{
    console.log('Server started '+port)
});