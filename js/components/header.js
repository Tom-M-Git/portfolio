class Header {
    constructor() {
        window.customElements.define('header-component', class extends HTMLElement {
            constructor(){
                super();
                class Html {
                    constructor(){
                        this.html = `
                            <header>
                                <h1>Hi, ${i18next.t("author")}</h1>
                                <button onclick="i18next.changeLanguage('ja')">日本語</button>
                                <button onclick="i18next.changeLanguage('en')">English</button>
                            </header>
                        `;
                    }
                }
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
        });
    }
}
export default Header;