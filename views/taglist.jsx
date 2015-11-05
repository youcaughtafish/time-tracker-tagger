var React = require('react');
var Tag = require('./tag.jsx');

module.exports = React.createClass({ 
  render: function() {
    console.log('taglist.jsx: props.data: ' + JSON.stringify(this.props.data));
    var tagEles = this.props.data.map(function(obj) { 
      console.log('taglist.jsx: obj: ' + JSON.stringify(obj));
      return <Tag>{obj.name}</Tag>;
    }.bind(this)); 

    return ( 
      <div className = "tagList"> 
        <table style={{border: "2px solid black"}}> 
          <tbody> 
            {tagEles} 
          </tbody> 
        </table> 
      </div> 
    ); 
  } 
});