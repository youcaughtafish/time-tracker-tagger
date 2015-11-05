var React = require('react'); 
var TagBox = require('./views/tagbox.jsx');

var data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

React.render(<TagBox data={data} />, document.getElementById('app'));
