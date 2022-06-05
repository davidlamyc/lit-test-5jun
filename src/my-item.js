import { LitElement, html, css } from 'lit';

export class MyItem extends LitElement {
    static properties = {
        text: {}
    };

    static styles = css`
        .mybox {
            color: gray;
        }
    `;

    constructor() {
        super();
        this.text = '';
    }

    render() {
        return html`
            <p class="mybox">${this.text}</p>
        `;
    }
}

window.customElements.define('my-item', MyItem);
