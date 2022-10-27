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
    this.message = {},
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
  // _sendMessage(question) {
  //   console.log('sending', question);
  //   const event = new CustomEvent('send-message', {
  //     detail: {
  //       type: 'question',
  //       content: question
  //     },
  //     composed: true,
  //   });
  //   this.dispatchEvent(event);
  // }

  render() {
    const { message, _toggleModal, _sendMessage, isDisplayModal } = this;
    const messageClasses = {
      'message': true,
      'my-message': message.from === 'me',
      'other-message': message.from !== 'me',
      'question-message': message.type === 'question',
      'answer-message': message.type === 'answer',
      'bot-answer-message': message.type === 'answer-from-bot',
      'bot-no-answer-message': message.type === 'suggestions-from-bot' || message.type === 'no-answer-from-bot',
    };

    return html`
      <div class='message-container'>
        <div class=${classMap(messageClasses)}>
          ${message.question && html`
          <div class='message-question'>${message.question}</div>
          `}
          <div class='message-content'>${message.content}</div>
          ${message.suggestions && html`
          ${message.suggestions.map(suggestion => html`
            <p @click=${(e) => _sendMessage(e, suggestion)}>${suggestion}</p>
          `)}
          `}  
          <div class='message-time'>${message.time}</div>
        </div>
        ${(message.type === 'question') ? html`
        <div class='change'>
          <img src='/src/icons/respond.png' @click=${_toggleModal} class='respond-img' alt="abc" />
        </div>
        ` : ''}
      </div>
      <chat-modal .question=${message.content} .isDisplayModal=${isDisplayModal}></chat-modal>
    `;
  }
}

window.customElements.define('chat-message', ChatMessage);