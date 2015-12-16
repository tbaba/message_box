var MessageForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var user = this.refs.user.value.trim(),
        text = this.refs.text.value.trim();
    if (!user || !text) { return; }

    this.props.onMessageSubmit({ user: user, text: text });
    this.refs.user.value = "";
    this.refs.text.value = "";
  },

  render: function() {
    return (
      <form className="messageForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Input your name" ref="user" />
        <input type="text" placeholder="Input your message" ref="text" />
        <button type="submit">Post</button>
      </form>
    );
  }
});
