import { LitElement, html } from 'lit';
import style from '../../styles/chat-controls.css.js';
import { addQuestionMark } from '../../utils.js';

export class ChatControls extends LitElement {
  static get properties() {
    return {
      input: {}
    };
  }

  constructor() {
    super();
    this.input = '';
  }

  _inputChanged(e) {
    this.input = e.target.value;
  }

  _sendMessage() {
    this.input = addQuestionMark(this.input);
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
    const { input, _inputChanged, _sendMessage } = this;
    return html`
      <div class='chat-controls'>
        <input .value='${input}' class='messages-input' placeholder='Ask your question here...' type="text" @change=${_inputChanged}/>
        <button class='send-button' @click=${_sendMessage}>Send Question</button>
      </div>
      `;
  }
}

window.customElements.define('chat-controls', ChatControls);