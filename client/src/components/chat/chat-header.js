import { LitElement, html } from 'lit';
import style from '../../styles/chat-header.css.js';

export class ChatHeader extends LitElement {
  static get properties() {
    return {

    };
  }

  constructor() {
    super();
  }

  static styles = [style];

  render() {
    return html`
      <div class='chat-header'>
        <div class='chat-headline'>Q&A chatbot</div>
        <div class='chat-data'>
          <span class='online'>3 people online</span> &nbsp;•&nbsp;
          <span class='answered'>4/6 questions were answered</span>
        <div/>
      </div>
    `;
  }
}

window.customElements.define('chat-header', ChatHeader);