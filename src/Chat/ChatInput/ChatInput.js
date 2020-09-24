import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.input);
    this.setState({
      input: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input value={this.state.input} type="text" onChange={this.handleInput} />
        <button type="button" onClick={this.handleSubmit}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
