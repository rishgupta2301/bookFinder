const express = require('express');
const exphbs = require('express-handlebars');
const { engine } = require("express-handlebars");
const app = express();

app.engine('handlebars', engine({
    defaultLayout: 'main'
}));

// app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.use(express.static('public')); //this is to link the css files to the main file

const port = process.env.PORT || 3000;

app.get('/', (req, res) => { //ROUTES are getting created by "get" method
    // res.send('Welcome to BookFinder');
    res.render('home');
});



app.listen(port, () => { // after the port that is the callback function
    console.log(`Server is running on port ${port}`);
});