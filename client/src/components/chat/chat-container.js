import { LitElement, html } from 'lit';
import './chat-header.js';
import './chat-body.js';
import './custom-hr.js';
import style from '../../styles/chat-container.css.js';

export class ChatContainer extends LitElement {
  static get properties() {
    return {
      messages: {}
    };
  }

  constructor() {
    super();
  }

  static styles = [style];

  render() {
    return html`
      <div class='chat-container'>
        <chat-header></chat-header>
        <custom-hr></custom-hr>
        <chat-body .messages=${this.messages}></chat-body>
      </div>
    `;
  }
}

window.customElements.define('chat-container', ChatContainer);