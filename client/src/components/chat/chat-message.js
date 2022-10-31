import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import './chat-modal.js';
import style from '../../styles/chat-message.css.js';

export class ChatMessage extends LitElement {
  static get properties() {
    return {
      message: {},
      isDisplayModal: {},
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
    const messageClasses = {
      'my-message': message.from === 'me',
      'other-message': message.from !== 'me',
      'question-message': message.type === 'question',
      'answer-message': message.type === 'answer',
      'bot-answer-message': message.type === 'answer-from-bot',
      'bot-no-answer-message': message.type === 'suggestions-from-bot' || message.type === 'no-answer-from-bot',
    };

    return html`
      <div class='message-container'>
        <div class='message ${classMap(messageClasses)}'>
          ${message.question && html`
          <div class='message-question'>${message.question}</div>
          `}
          <div class='message-content'>
            ${['answer-from-bot', 'suggestions-from-bot', 'no-answer-from-bot'].includes(message.type) ? html`
            <img src='/src/icons/bot.png' class='respond-img' alt="respond" />
            ` : ''}
            ${message.content}
          </div>
          ${message.suggestions && html`
          ${message.suggestions.map(suggestion => html`
          <p @click=${(e) => _sendMessage(e, suggestion)}>${suggestion}</p>
          `)}
          `}  
          <div class='message-time'>${message.time}</div>
        </div>
        ${(message.type === 'question') ? html`
        <div class='change'>
          <img src='/src/icons/respond.png' @click=${_toggleModal} class='respond-img' alt="respond" />
        </div>
        ` : ''}
      </div>
      <chat-modal .question=${message.content} .isDisplayModal=${isDisplayModal}></chat-modal>
    `;
  }
}

window.customElements.define('chat-message', ChatMessage);