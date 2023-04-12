class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="card-title"><i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)</div>
        `;
    }
};

customElements.define("cart-component", CartComponent);