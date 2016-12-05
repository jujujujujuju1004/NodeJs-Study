var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

/*app.get('/', function(request, response) {
  response.send('Hello world');
  response.end();
});*/

/*app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});*/

app.get('/blocks', function(request, response) {
  var blocks = ['Fixed', 'Movable', 'Rotaling'];
  response.json(blocks);
});

app.listen(3000, function() {
  console.log('Listening on port 3000 Node Study Server');
});
