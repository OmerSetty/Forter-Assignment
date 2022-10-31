import { LitElement, html } from 'lit';
import './chat-header.js';
import './chat-body.js';
import './custom-hr.js';
import style from '../../styles/chat-container.css.js';
import { getCurrentHourAndMinutes } from '../../utils.js';
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

export class ChatContainer extends LitElement {
  static get properties() {
    return {
      messages: {},
      onlineMembersCount: {}
    };
  }

  constructor() {
    super();
    this.messages = [],
    this.onlineMembersCount = 0,
    this.socket = io('http://localhost:3000', {
      extraHeaders: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    this.socket.on('connections-amount', message => {
      this.onlineMembersCount = message
    });
    this.socket.on('new-message', message => {
      this.messages = [...this.messages, message];
    });
  }

  static styles = [style];

  _onSendMessage(event) {
    const message = {
      type: event.detail.type,
      content: event.detail.content,
      question: event.detail.question || null,
      time: getCurrentHourAndMinutes()
    };
    this.messages = [...this.messages, { ...message, from: 'me' }];
    this.socket.emit('send-message', message);
  }
  
  render() {
    const { _onSendMessage, messages, onlineMembersCount } = this;
    return html`
      <div class='chat-container'>
        <chat-header .onlineMembersCount=${onlineMembersCount} .newMessageType=${messages[messages.length-1]?.type}></chat-header>
        <custom-hr></custom-hr>
        <chat-body .messages=${messages} @send-message=${_onSendMessage}></chat-body>
      </div>
    `;
  }
}

window.customElements.define('chat-container', ChatContainer);