import { LitElement, html } from 'lit';
import style from '../../styles/chat-header.css.js';

export class ChatHeader extends LitElement {
  static get properties() {
    return {
      onlineMembersCount: {},
      newMessageType: {}
    };
  }

  constructor() {
    super();
    this.questionsCount = 0,
    this.answersCount = 0
  }

  willUpdate(changedProperties) {
    if (!changedProperties.has('newMessageType')) return;
    console.log(this.newMessageType);
    if (this.newMessageType === 'question') this.questionsCount++;
    else if (this.newMessageType === 'answer' || this.newMessageType === 'answer-from-bot') this.answersCount++;
  }

  static styles = [style];

  render() {
    const { onlineMembersCount, questionsCount, answersCount } = this;
    return html`
      <div class='chat-header'>
        <div class='chat-headline'>Q&A chatbot</div>
        <div class='chat-data'>
          <span class='online'>${onlineMembersCount} people online</span> &nbsp;•&nbsp;
          <span class='answered'>${answersCount}/${questionsCount} questions were answered</span>
        <div/>
      </div>
    `;
  }
}

window.customElements.define('chat-header', ChatHeader);