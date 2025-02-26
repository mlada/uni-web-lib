export class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
        <style>
          p {
            color: blue;
            font-size: 20px;
          }
        </style>
        <p>Hello, I'm a Web Component!</p>
      `;
  }
}
customElements.define("my-component", MyComponent);
