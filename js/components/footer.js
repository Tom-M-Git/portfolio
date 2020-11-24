function Footer() {
    class CustomElements extends HTMLElement {
        constructor(){
            super();
            let Html, html, template, shadow, updateComponent;
            const githubUrl = "tom-m-git.github.io", hostVar = window.location.host, rootPath = (hostVar == githubUrl) ? "/portfolio/" : "/", initCss = document.querySelector("link[href*='init.css']")?.getAttribute("href") ?? "404";
            
            Html = () => {
                html = `
                    <link rel="stylesheet" href="${initCss}">
                    <section id="footer">
                        <div class="social-links">
                            <h3>Social:</h3>
                            <svg class="social-icon" viewBox="0 0 448 512" fill="#333333" style="width:2em;vertical-align:bottom;"><use xlink:href="${rootPath}lib/brands.svg#github"></use></svg>
                            <svg class="social-icon" viewBox="0 0 448 512" fill="#333333" style="width:2em;vertical-align:bottom;"><use xlink:href="${rootPath}lib/brands.svg#facebook"></use></svg>
                        </div>
                        <div class="copyright">Copyright &copy; 2020 Tomoaki Morioka. All rights reserved.</div>
                    </section>
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
    window.customElements.define('footer-component', CustomElements, { extends: "footer" });
}
document.querySelector("html").addEventListener("componentReady", ()=>{
    Footer();
});