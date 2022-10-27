import { LitElement, html } from 'lit';
import './chat-messages.js';
import './chat-controls.js';
import './custom-hr.js';
import style from '../../styles/chat-body.css.js';

export class ChatBody extends LitElement {
  static get properties() {
    return {
      messages: {},
      questionToAnswer: {}
    };
  }
  
  constructor() {
    super();
  }
  
  static styles = [style];

  _setQuestionToAnswer(event) {
    this.questionToAnswer = event.detail;
  }

  render() {
    const { messages, questionToAnswer, _setQuestionToAnswer } = this;
    return html`
      <div class='chat-body'>
        ${this.test}
        <chat-messages .messages=${messages} @pass-question=${_setQuestionToAnswer}></chat-messages>
        <custom-hr></custom-hr>
        <chat-controls .questionToAnswer=${questionToAnswer}></chat-controls>
      </div>
    `;
  }
}

window.customElements.define('chat-body', ChatBody);