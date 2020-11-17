class Footer {
    Html = class {
        constructor(){
            this.html = `
                <footer>
                    <h1>Hi, ${i18next.t("howManyApples", {count: 2})}</h1>
                </footer>
            `;
        }
    }
    CustomElements = class extends HTMLElement {
        constructor(){
            super();
            this.template = document.createElement('template');
            let shadow = this.attachShadow({mode:'open'});
            this.updateComponent = ()=>{
                this.template.innerHTML = new Html().html;
                shadow.innerHTML = "";
                shadow.appendChild(this.template.content.cloneNode(true));
            };this.updateComponent();
            document.querySelector("html").addEventListener("update", ()=>{
                this.updateComponent();
            });
        }
    }
    constructor() {
        window.customElements.define('footer-component', this.CustomElements);
    }
}
export default Footer;