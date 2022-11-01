import { LitElement, html } from 'lit';
import style from '../../styles/chat-header.css.js';

export class ChatHeader extends LitElement {
  static get properties() {
    return {
      onlineMembersCount: { type: Number },
      newMessageType: { type: String }
    };
  }

  constructor() {
    super();
    this.questionsCount = 0,
    this.answersCount = 0
  }

  willUpdate(changedProperties) {
    if (!changedProperties.has('newMessageType')) return;
    if (this.newMessageType === 'question') this.questionsCount++;
    else if (this.newMessageType === 'answer' || this.newMessageType === 'answer-from-bot') this.answersCount++;
  }

  static styles = [style];

  _clearChat() {
    const event = new CustomEvent('clear-chat', {
      composed: true
    });
    this.dispatchEvent(event);
    this.questionsCount = 0;
    this.answersCount = 0;
  }

  render() {
    const { onlineMembersCount, questionsCount, answersCount, _clearChat } = this;
    return html`
      <div class='chat-header'>
        <div class='chat-headline'>Q&A chatbot</div>
        <div class='chat-data'>
          <span class='online'>${onlineMembersCount} people online &nbsp;</span>•
          <span class='answered'>&nbsp; ${answersCount}/${questionsCount} questions were answered</span>
          <img src='/src/icons/clear-chat2.png' class='clear-chat'
              @click=${_clearChat} alt="clear" />
        <div/>
      </div>
    `;
  }
}

window.customElements.define('chat-header', ChatHeader);