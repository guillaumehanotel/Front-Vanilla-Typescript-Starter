import { LitElement } from 'lit';
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    count: number;
    render(): import("lit").TemplateResult<1>;
    private _onClick;
    foo(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
