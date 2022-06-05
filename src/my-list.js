import { LitElement, html, css } from 'lit';

export class MyList extends LitElement {
    static properties = {
        todos: [],
        inputText: {}
    };

    constructor() {
        super();
        this.todos = ['run', 'eat'];
        this.inputText = 'Enter todo';
    }

    addTodo() {
        this.todos = [
            ...this.todos,
            this.input.value,
        ];
        this.input.value = '';
    }

    removeTodo(todoToRemove) {
        this.todos = this.todos.filter(todo => todo !== todoToRemove);
    }

    get input() {
        return this.renderRoot?.querySelector('#newitem') ?? null;
    }

    render() {
        return html`
        <p>Click to remove item</p>
        <input id="newitem" placeholder=${this.inputText} />
        <button @click=${this.addTodo}>Add</button>
        <!-- <div>${this.todos.map(todo => html`<p @click=${this.removeTodo}>${todo}</p>`)}</div> -->
        <div>${this.todos.map(todo => html`<my-item text=${todo} @click=${() => this.removeTodo(todo)}></my-item>`)}</div>
    `;
    }
}

window.customElements.define('my-list', MyList);
