var React = require('react');

var TagList = require('./taglist.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="tag-name-input">Tag Name</label>
          <input type="text" className="form-control" id="tag-name-input" placeholder="Enter a Tag Name..."></input>
        </div>
        <button type="submit" className="btn btn-default">Create Tag</button>
      </form>
    );
  }
});


