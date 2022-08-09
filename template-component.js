import {LitElement, html, css} from 'lit-element';

export class TemplateComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
        --var-color: red;
      }
      h1 {
        color: magenta;
      }
      .color-button {
        color: (--var-color);
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      count: {type: Number},
      incremento: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
    this.incremento = 1;
  }

  render() {
    return html`
      <h1>Valor de apuesta, $${this.count}</h1>
      <button @click=${this._onClick} part="button" class="color-button">
       Subir Apuesta
      </button>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count += this.incremento;
  }
}

window.customElements.define('template-component', TemplateComponent);