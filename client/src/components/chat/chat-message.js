import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { getColorByType } from '../../styles/messages-colors.js';
import './chat-modal.js';
import style from '../../styles/chat-message.css.js';

export class ChatMessage extends LitElement {
  static get properties() {
    return {
      message: { type: Object },
      socketID: { type: String },
      isDisplayModal: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.message = {}
    this.isDisplayModal = false
  }

  static styles = [style];

  _toggleModal() {
    this.isDisplayModal = !this.isDisplayModal;
  }

  _sendMessage(e, suggestion) {
    const event = new CustomEvent('send-message', {
      detail: {
        type: 'question',
        content: suggestion
      },
      composed: true,
    });
    e.target.dispatchEvent(event);
  }

  render() {
    const { message, _toggleModal, _sendMessage, isDisplayModal } = this;
    console.log(message.id);
    console.log(typeof message.id);
    const messageClasses = {
      'my-message': message.from === this.socketID,
      'other-message': message.from !== this.socketID
    };
    const styles = {
      backgroundColor: getColorByType(message.type)
    };

    return html`
      <div class='message-container'>
        <div class='message ${classMap(messageClasses)}' style=${styleMap(styles)}>
          ${message.question && html`
          <div class='message-question'>${message.question}</div>
          `}
          <div class='message-content'>
            ${['answer-from-bot', 'suggestions-from-bot', 'no-answer-from-bot', 'greeting'].includes(message.type) ? html`
            <img src='/src/icons/bot.png' class='img' alt="bot" />
            ` : ''}
            ${message.content}
          </div>
          ${message.suggestions && html`
          ${message.suggestions.map(suggestion => html`
          <p class='suggestion' @click=${(e) => _sendMessage(e, suggestion)}>${suggestion}</p>
          `)}
          `}  
          <div class='message-time'>${message.time}</div>
        </div>
        ${(message.type === 'question' && message.from !== this.socketID) ? html`
        <div class='change'>
          <img src='/src/icons/respond.png' @click=${_toggleModal} class='img' alt="respond" />
        </div>
        ` : ''}
        ${isDisplayModal ? html`
        <chat-modal .question=${message.content} .questionID=${message.id} @toggle-modal=${_toggleModal}></chat-modal>
        ` : ''}
      </div>
      `;
  }
}

window.customElements.define('chat-message', ChatMessage);