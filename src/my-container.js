import {LitElement, html, css} from 'lit';

export class MyContainer extends LitElement {
  static properties = {
    title: {},
  };

  constructor() {
    super();
    this.title = 'Todos';
  }

  handleClick = (e) => {
    console.log('clicked', e)
    this.title = 'Todos Clicked'
  }

  render() {
    return html`
      <h1 @click=${this.handleClick}>${this.title}</h1>
      <div>
        <my-list></my-list>
      </div
    `;
  }
}

window.customElements.define('my-container', MyContainer);
