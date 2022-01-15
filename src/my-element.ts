import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
    static styles = css`
      $toto = 3;
      :host {
        display: block;
        border: solid 5px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
    @property()
    name = "World";

    @property({ type: Number })
    count = 0;

    render() {
        return html`
            <h1>Hello, ${this.name}!</h1>
            <button @click="${this._onClick}" part="button">
                Click Count: ${this.count}
            </button>
            <slot></slot>
        `;
    }

    private _onClick() {
        this.count++;
    }

    foo(): string {
        return "foo";
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement;
    }
}
