import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  postText = (text) => {
    const newMessage = {
      role: ROLE.CUSTOMER,
      text,
    };
    this.setState((prev) => ({
      messages: prev.messages.concat(newMessage),
    }));
    const answerMessage = answersData.filter((answer) => answer.tags.includes(text));
    if (answerMessage !== undefined) {
      this.setState((prev) => ({
        messages: prev.messages.concat(answerMessage),
      }));
    }
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput onSubmit={this.postText} />
      </main>
    );
  }
}

export default Chat;
