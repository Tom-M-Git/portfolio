function Footer() {
    class CustomElements extends HTMLElement {
        constructor(){
            super();
            let Html, html, template, shadow, updateComponent;

            Html = () => {
                html = `
                    <footer>
                        <h1>Hi, ${i18next.t("howManyApples", {count: 3})}</h1>
                    </footer>
                `;
                return html;
            };

            template = document.createElement('template');
            shadow = this.attachShadow({mode:'open'});

            updateComponent = () => {
                template.innerHTML = Html();
                shadow.innerHTML = "";
                shadow.appendChild(template.content.cloneNode(true));
            }; updateComponent();

            document.querySelector("html").addEventListener("update", ()=>{
                updateComponent();
            });
        }
    }
    window.customElements.define('footer-component', CustomElements);
}
document.querySelector("html").addEventListener("componentReady", ()=>{
    Footer();
});