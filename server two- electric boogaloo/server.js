const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({extended: false}));
//Treys code lol

app.get('/', function(req, res){
    res.format({
        html: function () {
          res.send('<p>Hello</p');
        },
        text: function () {
          res.send('Hello');
        },
        json: function () {
          res.send({ message: 'Hello' });
        }
    });
});

app.get('/home', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page Placeholder For HTML');
});

app.get('/trey', (req, res) => {
  res.send('Trey Placeholder For HTML');
});

app.get('/parker', (req, res) => {
  res.send('Parker Placeholder For HTML');
});

app.get('/leniece', (req, res) => {
  res.send('This is the about page Placeholder For HTML');
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
