import { LitElement, html } from 'lit';
import './chat-message.js';
import style from '../../styles/chat-messages.css.js';

export class ChatMessages extends LitElement {
  static get properties() {
    return {
      messages: {}
    };
  }

  constructor() {
    super();
  }

  static styles = [style];

  updated(changed) {
    console.log(changed);
    const element = this.renderRoot.getElementById(`chat-message-${this.messages.length-1}`);
    console.log(element);
    console.log(this.messages);
    if (element) {
      console.log('in');
      element.scrollIntoView();
    }
  }

  // willUpdate() {
  //   const chatMessages = this.renderRoot.getElementById('chat-messages');
  //   if (chatMessages) {
  //     console.log('in');
  //     chatMessages.scrollTop = chatMessages.scrollHeight;
  //   }
  // }

  render() {
    const { messages } = this;
    return html`
      <div id='chat-messages' class='chat-messages'>
        ${messages.map((message, index) => html`
          <chat-message id='chat-message-${index}' .message=${message}></chat-message>
        `)}
      </div>
    `;
  }

  

}

window.customElements.define('chat-messages', ChatMessages);