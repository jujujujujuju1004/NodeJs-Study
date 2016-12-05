var express = require('express');
var app = express();

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
    response.json(blocks);
  }
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
