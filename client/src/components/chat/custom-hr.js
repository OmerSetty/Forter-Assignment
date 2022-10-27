import { LitElement, html } from 'lit';
import style from '../../styles/custom-hr.css.js';

export class CustomHr extends LitElement {
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
      <hr>
    `;
  }
}

window.customElements.define('custom-hr', CustomHr);