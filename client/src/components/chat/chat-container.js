import { LitElement, html } from 'lit';
import './chat-header.js';
import './chat-body.js';
import './custom-hr.js';
import style from '../../styles/chat-container.css.js';
import { getCurrentHourAndMinutes } from '../../utils.js';
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import { v4 as uuidv4 } from 'uuid';

export class ChatContainer extends LitElement {
  static get properties() {
    return {
      messages: { type: Array },
      messagesIDs: { type: Object },
      onlineMembersCount: { type: Number }
    };
  }

  constructor() {
    super();
    this.messages = [],
    this.messagesIDs = {},
    this.onlineMembersCount = 0,
    this.socket = io('http://localhost:3001', {
      extraHeaders: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    this.socket.on('greeting', message => {
      this.messages = [message];
    });
    this.socket.on('connections-amount', message => {
      this.onlineMembersCount = message;
    });
    this.socket.on('new-message', message => {
      if ((message.type === 'answer' || message.type === 'answer-from-bot') && message.questionID) {
        const updatedQuestions = this._updateAnsweredQuestions(message.questionID);
        this.messages = [...updatedQuestions, message];
      }
      else this.messages = [...this.messages, message];
    });
  }

  static styles = [style];

  _onSendMessage(event) {
    const { type, content, question, questionID } = event.detail;
    let message = {
      type,
      content,
      question: question || null,
      time: getCurrentHourAndMinutes()
    };

    if (type === 'question') {
      const existingMessage = this._checkForExistingQuestion(content)
      if (existingMessage?.type === 'question') message = existingMessage;
      else {
        const id = uuidv4();
        message = { ...message, id };
        this.messagesIDs = { ...this.messagesIDs, [content]: id }
      }
      this.messages = [...this.messages, { ...message, from: this.socket.id }];
    }
    else {
      message = { ...message, questionID: questionID || null };
      const updatedQuestions = this._updateAnsweredQuestions(message?.questionID);
      this.messages = [...updatedQuestions, message];
    }

    this.socket.emit('send-message', message);
  }

  _checkForExistingQuestion(content) {
    const id = this.messagesIDs[content];
    if (!id) return null;
    const message = this.messages.find(message => message?.id === id);
    return message;
  }

  _updateAnsweredQuestions(id) {
    return this.messages.map(message => {
      if (message?.id === id) return { ...message, type: 'answered-question' };
      else return message;
    })
  }

  _onClearChat() {
    this.messages = [this.messages[0]];
  }

  render() {
    const { _onSendMessage, messages, onlineMembersCount, _onClearChat } = this;
    return html`
      <div class='chat-container'>
        <chat-header .onlineMembersCount=${onlineMembersCount}
          .newMessageType=${messages[messages.length - 1]?.type} @clear-chat=${_onClearChat}></chat-header>
        <custom-hr></custom-hr>
        <chat-body .messages=${messages} .socketID=${this.socket.id} @send-message=${_onSendMessage}></chat-body>
      </div>
    `;
  }
}

window.customElements.define('chat-container', ChatContainer);