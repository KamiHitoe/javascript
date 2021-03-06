var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.get('/process_get', (req, res) => {
  var response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
})

