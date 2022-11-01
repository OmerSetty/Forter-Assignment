import { LitElement, html } from 'lit';
import style from '../../styles/chat-controls.css.js';
import { addQuestionMark, addEnterInputEvent } from '../../utils.js';

export class ChatControls extends LitElement {
  static get properties() {
    return {
      input: { type: String }
    };
  }

  constructor() {
    super();
    this.input = '';
  }

  firstUpdated() {
    addEnterInputEvent(this.renderRoot, 'questionInput', 'sendQuestionButton');
    const inputElement = this.renderRoot.getElementById(`questionInput`);

    document.addEventListener('keypress', e => {
      if (e.key !== 'q' && e.key !== 'Q') return;
      e.preventDefault()
      inputElement.focus();
    });
  }

  _inputChanged(e) {
    this.input = e.target.value;
  }

  _sendMessage() {
    if (this.input === '') return;
    this.input = addQuestionMark(this.input);
    const event = new CustomEvent('send-message', {
      detail: {
        type: 'question',
        content: this.input
      },
      composed: true
    });
    this.dispatchEvent(event);
    this.input = '';
  }

  static styles = [style];

  render() {
    const { input, _inputChanged, _sendMessage } = this;
    return html`
      <div class='chat-controls'>
        <input .value='${input}' id='questionInput' class='messages-input' placeholder='Ask your question here...' type="text" @change=${_inputChanged}/>
        <button id='sendQuestionButton' class='send-button' @click=${_sendMessage}>Send Question</button>
      </div>
      `;
  }
}

window.customElements.define('chat-controls', ChatControls);