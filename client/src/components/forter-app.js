import { LitElement, html } from 'lit';
import './chat/chat-container.js';
import './chat-instructions.js';
import { getCurrentHourAndMinutes } from '../utils.js';
import style from '../styles/forter-app.css.js'
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

export class ForterApp extends LitElement {
  static get properties() {
    return {
      messages: {}
    };
  }

  constructor() {
    super();
    this.messages = [],
      this.socket = io('http://localhost:3000', {
        extraHeaders: {
          "Access-Control-Allow-Origin": "*"
        }
      });
    this.socket.on('new connection', console.log);
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
    console.log('sending message');
    this.messages = [...this.messages, { ...message, from: 'me' }];
    this.socket.emit('send-message', message);
  }

  render() {
    const { _onSendMessage, _onSendAnswer } = this;
    return html`
      <div class='container'>
        <chat-instructions></chat-instructions>
        <chat-container class='chat-container' @send-message=${_onSendMessage}
        .messages=${this.messages}></chat-container>
      </div>
    `;
  }
}

window.customElements.define('forter-app', ForterApp);
