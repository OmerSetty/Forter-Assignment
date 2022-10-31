import { LitElement, html } from 'lit';
import './chat-messages.js';
import './chat-controls.js';
import './custom-hr.js';

export class ChatBody extends LitElement {
  static get properties() {
    return {
      messages: {}
    };
  }

  render() {
    const { messages } = this;
    return html`
      <chat-messages .messages=${messages}></chat-messages>
      <custom-hr></custom-hr>
      <chat-controls></chat-controls>
    `;
  }
}

window.customElements.define('chat-body', ChatBody);