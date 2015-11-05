var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.children}</td> 
      </tr> 
    );
  }
});