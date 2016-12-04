var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Hello world');
  response.end();
});

app.get('/blocks', function(request, response) {
  var blocks = ['Fixed', 'Movable', 'Rotaling'];
  response.json(blocks);
});

app.listen(3000, function() {
  console.log('Listening on port 3000 Node Study Server');
});
