// server.js
// where your node app starts

// init project
const path = require('path');
const express = require('express');
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(__dirname, 'dist')));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + 'dist');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
