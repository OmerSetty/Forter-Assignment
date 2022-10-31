import { LitElement, html } from 'lit';
import './chat/chat-container.js';
import './chat-instructions.js';
import style from '../styles/forter-app.css.js'

export class ForterApp extends LitElement {
  static styles = [style];

  render() {
    return html`
      <div class='container'>
        <chat-instructions></chat-instructions>
        <chat-container class='chat-container'></chat-container>
      </div>
    `;
  }
}

window.customElements.define('forter-app', ForterApp);
