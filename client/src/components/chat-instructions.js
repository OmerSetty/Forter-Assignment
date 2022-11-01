import { LitElement, html } from 'lit';
import style from '../styles/chat-instructions.css.js';

export class Instructions extends LitElement {
  static styles = [style];

  render() {
    return html`
      <div class='instructions'>
        <h1>Welcome to Chatbot!</h1>
        <h2>The place where you can ask anything you ever wanted, and get answers from the active users in the chat.</h2>
        <p><img src='/src/icons/bot.png' class='icons' alt="bot" /> The special guest here is the bot - which can answer questions that were already answered before.</p>
        <p><img src='/src/icons/users.png' class='icons' alt="users" /> You can answer other members questions by hovering over them and clicking
        on the respond button:</p> <img src='/src/icons/question.png' alt="example" />
        <p><img src='/src/icons/start.png' class='icons' alt="start" /> So where do we start? right to this section, is the chat itself.
        Press <code>q</code> to start asking the questions, and press <code>Enter</code> in order to send them. Enjoy!</p>
      </div>
    `;
  }
}

window.customElements.define('chat-instructions', Instructions);