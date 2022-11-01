import { LitElement, html } from 'lit';
import { addEnterInputEvent } from '../../utils.js';
import style from '../../styles/chat-modal.css.js';

export class ChatModal extends LitElement {
  static get properties() {
    return {
      question: { type: String },
      questionID: { type: String },
      answer: { type: String }
    };
  }

  constructor() {
    super();
    this.answer = '';
  }

  firstUpdated() {
    addEnterInputEvent(this.renderRoot, 'answerInput', 'sendAnswerButton');
  }

  static styles = [style];

  _toggleModal() {
    const event = new CustomEvent('toggle-modal', {
      composed: true
    });
    this.dispatchEvent(event);
  }

  _answerChanged(e) {
    this.answer = e.target.value;
  }

  _sendAnswer() {
    if (this.answer === '') return;
    const event = new CustomEvent('send-message', {
      detail: {
        type: 'answer',
        content: this.answer,
        question: this.question,
        questionID: this.questionID
      },
      composed: true
    });
    this.dispatchEvent(event);
    this.answer = '';
    this._toggleModal();
  }

  render() {
    const { answer, _toggleModal, question, _sendAnswer, _answerChanged } = this;
    return html`
      <div class='modal'>
        <div class="modal-content">
          <span class="close-button" @click=${_toggleModal}>&times;</span>
          <p class='question'>${question}</p>
          <textarea type="text" id='answerInput' .value="${answer}" @change=${_answerChanged} class='answer' placeholder='Write your answer here...' rows="4" cols="50"></textarea>
          <button id='sendAnswerButton' class='send-answer' @click=${_sendAnswer}>Send Answer</button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('chat-modal', ChatModal);