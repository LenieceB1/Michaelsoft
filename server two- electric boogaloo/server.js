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
  res.send('HTML placeholder');
});





app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
