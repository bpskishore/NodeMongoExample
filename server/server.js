var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/Todo');


var app = express();
app.use(bodyParser.json());
app.post('/Todos', (req, res)=> {
  console.log(req.body.text);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then( (doc) => {
    console.log(doc);
  }, (err) => {
    res.send(err);
  });
});
app.listen(3000, (req, res) => {
  console.log("listening...");
});
