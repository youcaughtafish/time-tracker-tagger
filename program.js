var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

var React = require('react'); 
var DOM = React.DOM; 
var body = DOM.body; 
var head = DOM.head;
var link = DOM.link;
var div = DOM.div; 
var script = DOM.script;

var browserify = require('browserify');

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

require('node-jsx').install();

app.get('/data/initial-data', function(req, res) {
  res.json([
    {
      id:   1,
      name: 'Planning'
    },
    {
      id:   2,
      name: 'Java'
    },
    {
      id:   3,
      name: 'JavaScript'
    },
    {
      id:   4,
      name: 'HTML/CSS'
    }
  ]);
});

app.get('/js/bundle.js', function(req, res) { 
  res.setHeader('content-type', 'application/javascript'); 
  browserify('./app.js') 
    .transform('reactify') 
    .bundle() 
    .pipe(res); 
});

app.use('/', express.static('public/html'));
app.use('/css', express.static('public/css'));

app.listen(app.get('port'), function() {});

console.log('listening on port '+app.get('port'));

