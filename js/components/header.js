function Header () {
    window.customElements.define('header-component', class extends HTMLElement {
        constructor(){
            super();
            let Html, html, template, shadow, updateComponent, navMenuList, modalNav, modalNavMenu, menuButton;
            const githubUrl = "tom-m-git.github.io",
            hostVar = window.location.host,
            rootPath = (hostVar == githubUrl) ? "/portfolio/" : "/",
            initCss = document.querySelector("link[href*='init.css']").getAttribute("href");
            //initCss = document.querySelector("link[href*='init.css']")?.getAttribute("href") ?? "404";

            window.MyHeader = {}
            MyHeader.toggled = new Event("toggled");
            MyHeader.scrollIntoViewAlt = (host, id) => {
                if(window.location.pathname != window.location.pathname.match(new RegExp( `^${rootPath}[^/]+/|^${rootPath}[^/]+/index.html`, "i")) ){
                    window.open("../../", "_self");
                }
                document.querySelector(host).shadowRoot.querySelector(id).scrollIntoView()
            }
            navMenuList =`
                <ul class="nav-menu-list">
                    <li>
                        <a href="#summary" onclick="MyHeader.scrollIntoViewAlt('#page-main', '#summary')">
                            <svg viewBox="0 0 448 512" fill="#777777" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#list"></use></svg>
                            ${i18next.t("summary")}
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onclick="MyHeader.scrollIntoViewAlt('#page-main', '#projects')">
                            <svg viewBox="0 0 448 512" fill="#777777" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#project-diagram"></use></svg>
                            ${i18next.t("projects")}
                        </a>
                    </li>
                    <li>
                        <a href="#about" onclick="MyHeader.scrollIntoViewAlt('#page-main', '#about')">
                            <svg viewBox="0 0 448 512" fill="#777777" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#user-circle"></use></svg>
                            ${i18next.t("about")}
                        </a>
                    </li>
                    <li>
                        <a href="#technical-details" onclick="MyHeader.scrollIntoViewAlt('#page-main', '#technical-details')">
                            <svg viewBox="0 0 448 512" fill="#777777" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#code"></use></svg>
                            ${i18next.t("technicalDetails")}
                        </a>
                    </li>
                    <li>
                        <a href="#other" onclick="MyHeader.scrollIntoViewAlt('#page-main', '#other')">
                            <svg viewBox="0 0 448 512" fill="#777777" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#external-link-alt"></use></svg>
                            ${i18next.t("other")}
                        </a>
                    </li>
                </ul>
            `;
            

            Html = () => {
                html = `
                    <link rel="stylesheet" href="${initCss}">
                    <style>
                        #header {
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
                            z-index: 996;
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
                            z-index: 997;
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
                        #modal-nav {
                            display:none;
                            position: fixed;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 994;
                        }
                        #modal-nav.toggled {
                            display: block;
                        }
                        #nav-background {
                            width: 100%;
                            height: 100%;
                            background-color: rgba(0,0,0,0.5);
                        }
                        #nav-background:hover {
                            cursor: pointer;
                        }
                        #modal-nav .nav-menu-list {
                            position: fixed;
                            top: 0;
                            z-index: 995;
                            padding-bottom: 10rem;
                            box-shadow: 0 3px 6px 0 rgba(0,0,0,0.4);
                            border-radius: 0 0 5px 5px;
                        }
                        .nav-menu-list {
                            width: 100%;
                            background-color: #ffffff;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            padding: 0.5em 1em;
                            border-radius: 0 0 2px 2px;
                        }
                        .nav-menu-list > li {
                            width: 100%;
                            border-bottom: 1px inset;
                        }
                        .nav-menu-list a {
                            text-decoration-line: none; 
                            display: inline-block;
                            width: 100%;
                        }
                        .nav-menu-list a svg {
                            vertical-align: middle;
                            margin-right: 1em;
                        }
                        .nav-menu-list a:link, .nav-menu-list a:visited {
                            color: #777777;
                        }
                    </style>
                    <header id="header">
                        <img id="profile-image" src="${rootPath}assets/img/tomoaki-morioka-icon-540x540.png" alt="profile image">
                        <h1 id="header-title">${i18next.t("author")}</h1>
                        <p id="header-subtitle">${i18next.t("siteSubtitle")}</p>
                    </header>
                    <nav id="nav-menu">
                        <button id="language-button">
                            <select onchange="i18next.changeLanguage(this.value)">
                                <option>--${i18next.t("chooseALanguage")}--</option>
                                <option value="en">English</option>
                                <option value="ja" disabled="true">日本語</option>
                            </select>
                            <svg viewBox="0 0 448 512" fill="#ffffff" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#globe"></use></svg>
                        </button>
                        <button id="menu-button" class="" onclick="window.dispatchEvent(MyHeader.toggled)">
                            <svg viewBox="0 0 448 512" fill="#ffffff" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#bars"></use></svg>
                        </button>
                        ${navMenuList}
                    </nav>
                    <nav id="modal-nav"><div id="nav-background" onclick="window.dispatchEvent(MyHeader.toggled)"></div>${navMenuList}</nav>
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

            
            menuButton = shadow.querySelector("#menu-button");
            modalNav = shadow.querySelector("#modal-nav");
            modalNavMenu = shadow.querySelector("#modal-nav .nav-menu-list");
            modalNavMenu.addEventListener("click", ()=>{window.dispatchEvent(MyHeader.toggled)});
            window.addEventListener("toggled",()=>{
                menuButton.classList.toggle("active");
                modalNav.classList.toggle("toggled");
            });
        }
    });
}
window.addEventListener("componentReady", ()=>{
    Header();
});