var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/history/*', function (req, res) {
  console.log(req.path);
  res.sendFile(__dirname + '/public/history.html');
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
