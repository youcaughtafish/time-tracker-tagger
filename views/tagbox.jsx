var React = require('react');

var TagList = require('./taglist.jsx');

module.exports = React.createClass({
  render: function() {
    console.log('TagBox: '+JSON.stringify(this.props.tags));

    return (
      <div className="tagBox">
        <h1>{this.props.tagBoxTitle}</h1>
        <TagList data = {this.props.tags} />
      </div>
    );
  }
});


