var MessageBox = React.createClass({
  getInitialState: function() {
    return {
      messages: [
        { id: 1, user: '馬場', text: 'ほげえええええ' },
        { id: 2, user: '達郎', text: 'まさかの本名プレイ' }
      ]
    }
  },

  handleMessageSubmit: function(message) {
    message.id = new Date();
    var newMessage = this.state.messages.concat(message);
    this.setState({ messages: newMessage });
  },

  render: function() {
    var messageItems = this.state.messages.map(function(message) {
      return (
        <MessageItem key={message.id} message={message}/>
      );
    });

    return (
      <div className="messageBox">
        {messageItems}
        <MessageForm onMessageSubmit={this.handleMessageSubmit} />
      </div>
    );
  }
});
