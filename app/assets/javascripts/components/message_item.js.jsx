var MessageItem = React.createClass({
  render: function() {
    return (
      <div className="message">
        <h2 className="messageUser">{this.props.message.user}</h2>
        <div className="messageBody">{this.props.message.text}</div>
      </div>
    );
  }
});
