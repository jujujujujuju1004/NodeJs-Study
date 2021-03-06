var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended:false});

var blocks = {
  'Fixed':'Fastened securely in position',
  'Movable':'Capable of being moved',
  'Rotaling':'Moving in a circle around its center'
};

var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

app.get('/blocks/', function(request, response) {
  if (request.query.limit >= 0) {
    response.json(block.slice(0, request.query.limit));
  } else {
    response.json(Object.keys(blocks));
  }
});

app.post('/blocks/', parseUrlencoded, function(request, response) {
  var newBlock = request.body;
  blocks[newBlock.name] = newBlock.description;

  response.status(201).json(newBlock.name);
});

app.get('/blocks/:name', function(request, response) {
  var description = blocks[request.params.name];
  if(!description) {
    response.status(404).json('No description found for Banana');
  } else {
    response.json(description);
  }
});

app.listen(3000, function() {
  console.log('Listening on port 3000 Node Study Server');
});
