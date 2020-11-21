function Header () {
    window.customElements.define('header-component', class extends HTMLElement {
        constructor(){
            super();
            let Html, html, template, shadow, updateComponent;

            Html = () => {
                html = `
                    <h1>Hi, ${i18next.t("author")}</h1>
                    <button onclick="i18next.changeLanguage('ja')">日本語</button>
                    <button onclick="i18next.changeLanguage('en')">English</button>
                `;
                return html;
            }

            template = document.createElement('template');
            shadow = this.attachShadow({mode:'open'});

            updateComponent = ()=>{
                template.innerHTML = Html();
                shadow.innerHTML = "";
                shadow.appendChild(template.content.cloneNode(true));
            }; updateComponent();

            document.querySelector("html").addEventListener("update", ()=>{
                updateComponent();
            });
        }
    }, { extends: "header" });
}
document.querySelector("html").addEventListener("componentReady", ()=>{
    Header();
});