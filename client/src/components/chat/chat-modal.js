import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import style from '../../styles/chat-modal.css.js';

export class ChatModal extends LitElement {
  static get properties() {
    return {
      question: {},
      isDisplayModal: {},
      answer: {}
    };
  }
  
  constructor() {
    super();
    this.answer = ''
  }
  
  static styles = [style];

  _toggleModal() {
    this.isDisplayModal = !this.isDisplayModal;
  }

  _answerChanged(e) {
    this.answer = e.target.value;
  }

  _sendAnswer() {
    console.log('answer', this.answer);
    const event = new CustomEvent('send-message', {
      detail: {
        type: 'answer',
        content: this.answer,
        question: this.question
      },
      composed: true,
    });
    this.dispatchEvent(event);
    this.answer = '';
    this._toggleModal();
  }

  render() {
    const { answer, isDisplayModal, _toggleModal, question, _sendAnswer, _answerChanged } = this;
    const modalClasses = {
      'modal': true,
      'show-modal': isDisplayModal
    }
    return html`
      <div class=${classMap(modalClasses)}>
        <div class="modal-content">
          <span class="close-button" @click=${_toggleModal}>&times;</span>
          <p class='question'>${question}</p>
          <textarea type="text" .value="${answer}" @change=${_answerChanged} class='answer' placeholder='Write your answer here...' rows="4" cols="50"></textarea>
          <button @click=${_sendAnswer}>Send Answer</button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('chat-modal', ChatModal);