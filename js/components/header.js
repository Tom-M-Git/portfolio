function Header () {
    window.customElements.define('header-component', class extends HTMLElement {
        constructor(){
            super();
            let Html, html, template, shadow, updateComponent;
            const githubUrl = "tom-m-git.github.io", hostVar = window.location.host, rootPath = (hostVar == githubUrl) ? "/portfolio/" : "/", initCss = document.querySelector("link[href*='init.css']")?.getAttribute("href") ?? "404";

            Html = () => {
                html = `
                    <link rel="stylesheet" href="${initCss}">
                    <style>
                        #header-header {
                            grid-area: header;
                            display: grid;
                            grid-template-columns: auto;
                            grid-template-rows: auto auto auto;
                            grid-template-areas:
                                'image'
                                'title'
                                'subtitle';
                            justify-content: center;
                            background-color: #5F5F5F;
                            color: #ffffff;
                            padding: 2rem 0;
                        }
                        ul {
                            list-style: none;
                        }
                        #profile-image {
                            grid-area: image;
                            justify-self: center;
                            max-width: 100%;
                            width: 7rem;
                            border-radius: 50%;
                            margin-bottom: 1rem;
                            box-shadow: 0 3px 6px 0 rgba(0,0,0,0.4);
                        }
                        nav {
                            grid-area: nav;
                        }
                        #language-button {
                            position: fixed;
                            bottom: 2rem;
                            left: 1rem;
                            background-color: #00b0d0;
                            width: 60px;
                            height: 60px;
                            border: none;
                            border-radius: 50%;
                            box-shadow: 0 3px 6px 0 rgba(0,0,0,0.4);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        #language-button:hover {
                            transform: scale3d(0.97, 0.97, 1);
                            box-shadow: 0 0 5px 1px rgba(0, 176, 208, 1);
                        }
                        #language-button select {
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                            position: relative;
                            z-index: 1;
                        }
                        #language-button select:hover {
                            cursor: pointer;
                        }
                        #language-button svg {
                            position: absolute;
                        }
                        #menu-button {
                            position: fixed;
                            bottom: 6.5rem;
                            left: 1rem;
                            background-color: #00b0d0;
                            width: 60px;
                            height: 60px;
                            border: none;
                            border-radius: 50%;
                            box-shadow: 0 3px 6px 0 rgba(0,0,0,0.4);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        #menu-button:hover {
                            cursor: pointer;
                            transform: scale3d(0.97, 0.97, 1);
                            box-shadow: 0 0 5px 1px rgba(0, 176, 208, 1);
                        }
                        #menu-button:focus {
                            outline: none;
                        }
                        #menu-button.active {
                            transform: scale3d(0.97, 0.97, 1);
                            box-shadow: 0 0 5px 1px rgba(0, 176, 208, 1);
                        }
                    </style>
                    <section id="header-header">
                        <img id="profile-image" src="../../assets/img/tomoaki-morioka-icon-540x540.png" alt="profile image">
                        <h1 id="header-title">Tomoaki&nbsp;Morioka</h1>
                        <h2 id="header-subtitle">Portfolio</h2>
                    </section>
                    <nav>
                        <button id="language-button">
                            <select onchange="i18next.changeLanguage(this.value)">
                                <option>--${i18next.t("chooseALanguage")}--</option>
                                <option value="en">English</option>
                                <option value="ja">日本語</option>
                            </select>
                            <svg viewBox="0 0 448 512" fill="#ffffff" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#globe"></use></svg>
                        </button>
                        <button id="menu-button" class="" onclick="this.classList.toggle('active')">
                            <svg viewBox="0 0 448 512" fill="#ffffff" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#bars"></use></svg>
                        </button>
                        <ul>
                            <li>Summary</li>
                            <li>Project</li>
                            <li>About</li>
                            <li>Technical Details</li>
                            <li>Other</li>
                        </ul>
                    </nav>
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