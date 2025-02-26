export class AppLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["size", "src", "svg"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  get size() {
    return this.getAttribute("size") || "md";
  }

  get src() {
    return this.getAttribute("src") || "";
  }

  get svg() {
    return this.getAttribute("svg") || this.innerHTML.trim(); // Используем innerHTML, если svg не задан
  }

  async loadSvgContent(svgPath) {
    try {
      const response = await fetch(svgPath);
      if (!response.ok) {
        throw new Error(`Failed to load SVG: ${response.statusText}`);
      }
      return await response.text();
    } catch (error) {
      console.error("Error loading SVG:", error);
      return "";
    }
  }

  async render() {
    const sizeMap = {
      sm: "50px",
      md: "100px",
      lg: "150px",
    };

    const size = sizeMap[this.size] || sizeMap["md"];

    let content = "";

    debugger;
    if (this.src) {
      content = `<img src="${this.src}" alt="Logo">`;
    } else if (this.svg) {
      if (this.svg.trim().startsWith("<")) {
        content = this.svg;
      } else {
        content = await this.loadSvgContent(this.svg);
      }
    }

    this.shadowRoot.innerHTML = `
      <style>
        .logo {
          width: ${size};
          height: auto;
          display: inline-block;
        }
      </style>
      <div class="logo">${content}</div>
    `;
  }
}

customElements.define("app-logo", AppLogo);
