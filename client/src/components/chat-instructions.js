import { LitElement, html } from 'lit';
import style from '../styles/chat-instructions.css.js';

export class Instructions extends LitElement {
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
      <div class='instructions'>
        Welcome to the chat bot!
      </div>
    `;
  }
}

window.customElements.define('chat-instructions', Instructions);