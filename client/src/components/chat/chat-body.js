import { LitElement, html } from 'lit';
import './chat-messages.js';
import './chat-controls.js';
import './custom-hr.js';

export class ChatBody extends LitElement {
  static get properties() {
    return {
      messages: {},
      socketID: {}
    };
  }

  render() {
    const { messages, socketID } = this;
    return html`
      <chat-messages .messages=${messages} .socketID=${socketID}></chat-messages>
      <custom-hr></custom-hr>
      <chat-controls></chat-controls>
    `;
  }
}

window.customElements.define('chat-body', ChatBody);