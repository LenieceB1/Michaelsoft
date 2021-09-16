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
  res.sendfile('bios/home.html');
});

app.get('/parker', (req, res) => {
  res.sendfile('bios/parker.html');
});



app.get('/trey', (req, res) => {
  res.sendfile('bios/trey.html');
});



app.get('/logan', (req, res) => {
  res.sendfile('bios/logan.html');
});



app.get('/leniece', (req, res) => {
  res.sendfile('bios/leniece.html');
});








app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
