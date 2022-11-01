import { LitElement, html } from 'lit';
import './chat-message.js';
import style from '../../styles/chat-messages.css.js';

export class ChatMessages extends LitElement {
  static get properties() {
    return {
      messages: { type: Array },
      socketID: { type: String }
    };
  }

  static styles = [style];

  render() {
    const { messages, socketID } = this;
    return html`
      <div class='wrapper'>
        <span class="scroll-start-at-top">&nbsp;</span>
        <div class='chat-messages'>
          ${messages.map(message => html`
          <chat-message .message=${message} .socketID=${socketID}></chat-message>
          `)}
        </div>
      </div>
    `;
  }
}

window.customElements.define('chat-messages', ChatMessages);