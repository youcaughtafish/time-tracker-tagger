var React = require('react'); 
var NewTagBox = require('./views/newtagbox.jsx');
var $ = require('jquery');

$(document).ready(function() {
  $.get('/data/initial-data', function(data) {
    React.render(<NewTagBox data={data} />, document.getElementById('app'));
  });
});
