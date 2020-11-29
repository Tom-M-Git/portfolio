function Footer() {
    class CustomElements extends HTMLElement {
        constructor(){
            super();
            let Html, html, template, shadow, updateComponent;
            const githubUrl = "tom-m-git.github.io", hostVar = window.location.host, rootPath = (hostVar == githubUrl) ? "/portfolio/" : "/",
            //initCss = document.querySelector("link[href*='init.css']")?.getAttribute("href") ?? "404";
            initCss = document.querySelector("link[href*='init.css']").getAttribute("href");
            
            Html = () => {
                html = `
                    <link rel="stylesheet" href="${initCss}">
                    <style>
                        #footer {
                            color: #ffffff;

                        }
                        #social-links {
                            background-color: #5f5f5f;
                            padding: 1rem 1rem;
                            display: flex;
                            justify-content: center;
                            flex-wrap: wrap;
                        }
                        #social-links h3 {
                            width: 100%;
                            text-align: center;
                        }
                        #social-links a {
                            margin: 0 0.5rem;
                        }
                        #footer-footer {
                            background-color: #2F2F2F;
                            display: flex;
                            text-align: center;
                            padding: 1rem 1rem 12rem 1rem;
                            justify-content: center;
                        }
                    </style>
                    <footer id="footer">
                        <div id="social-links">
                            <h3>-Social-</h3>
                            <a href="https://github.com/Tom-M-Git" target="_blank">
                                <svg class="social-icon" viewBox="0 0 448 512" fill="#cccccc" style="width:2em;vertical-align:bottom;"><use xlink:href="${rootPath}lib/brands.svg#github"></use></svg>
                            </a>
                            <a href="https://www.facebook.com/tomoaki.morioka.5/" target="_blank">
                                <svg class="social-icon" viewBox="0 0 448 512" fill="#cccccc" style="width:2em;vertical-align:bottom;"><use xlink:href="${rootPath}lib/brands.svg#facebook"></use></svg>
                            </a>
                        </div>
                        <div id="footer-footer">
                            Last Modified: November 29, 2020
                            <br>
                            Copyright &copy; 2020 Tomoaki Morioka. All rights reserved.
                        </div>
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
            
        }
    }
    window.customElements.define('footer-component', CustomElements);
}
window.addEventListener("componentReady", ()=>{
    Footer();
});