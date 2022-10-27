import { LitElement, html } from 'lit';
import style from '../../styles/chat-controls.css.js';

export class ChatControls extends LitElement {
  static get properties() {
    return {
      input: {},
      questionToAnswer: {}
    };
  }

  constructor() {
    super();
    this.input = '';
    this.questionToAnswer = '';
  }

  _inputChanged(e) {
    this.input = e.target.value;
  }

  _sendMessage() {
    const event = new CustomEvent('send-message', {
      detail: {
        type: 'question',
        content: this.input
      },
      composed: true,
    });
    this.dispatchEvent(event);
    this.input = '';
  }

  static styles = [style];

  render() {
    const { input, _inputChanged, _sendMessage, questionToAnswer } = this;
    console.log('question', questionToAnswer);
    return html`
    ${questionToAnswer ? html`
      <div class='question-to-answer'>${questionToAnswer}</div>
    ` : ``}
      <div class='chat-controls'>
        <input .value="${input}" class='messages-input' placeholder='Ask your question here...' type="text" @change=${_inputChanged}/>
        <button class='send-button' @click=${_sendMessage}>Send Message</button>
      </div>
      `;
  }
}

window.customElements.define('chat-controls', ChatControls);