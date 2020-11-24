function Header () {
    window.customElements.define('header-component', class extends HTMLElement {
        constructor(){
            super();
            let Html, html, template, shadow, updateComponent, navMenuList, modalNav, createModalNav, menuButton;
            const githubUrl = "tom-m-git.github.io",
            hostVar = window.location.host,
            rootPath = (hostVar == githubUrl) ? "/portfolio/" : "/",
            initCss = document.querySelector("link[href*='init.css']")?.getAttribute("href") ?? "404";
            
            window.MyEvents = {}
            MyEvents.toggled = new Event("toggled");
            navMenuList =`
                <ul class="nav-menu-list">
                    <li>
                        <svg viewBox="0 0 448 512" fill="#777777" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#list"></use></svg>
                        ${i18next.t("summary")}
                    </li>
                    <li>
                        <svg viewBox="0 0 448 512" fill="#777777" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#project-diagram"></use></svg>
                        ${i18next.t("project")}
                    </li>
                    <li>
                        <svg viewBox="0 0 448 512" fill="#777777" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#user-circle"></use></svg>
                        ${i18next.t("about")}
                    </li>
                    <li>
                        <svg viewBox="0 0 448 512" fill="#777777" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#code"></use></svg>
                        ${i18next.t("technicalDetails")}
                    </li>
                    <li>
                        <svg viewBox="0 0 448 512" fill="#777777" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#external-link-alt"></use></svg>
                        ${i18next.t("other")}
                    </li>
                </ul>
            `;
            

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
                        }
                    </style>
                    <section id="header-header">
                        <img id="profile-image" src="${rootPath}assets/img/tomoaki-morioka-icon-540x540.png" alt="profile image">
                        <h1 id="header-title">${i18next.t("author")}</h1>
                        <h2 id="header-subtitle">Portfolio</h2>
                    </section>
                    <nav id="nav-menu">
                        <button id="language-button">
                            <select onchange="i18next.changeLanguage(this.value)">
                                <option>--${i18next.t("chooseALanguage")}--</option>
                                <option value="en">English</option>
                                <option value="ja">日本語</option>
                            </select>
                            <svg viewBox="0 0 448 512" fill="#ffffff" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#globe"></use></svg>
                        </button>
                        <button id="menu-button" class="" onclick="window.dispatchEvent(MyEvents.toggled)">
                            <svg viewBox="0 0 448 512" fill="#ffffff" style="width:35px;"><use xlink:href="${rootPath}lib/solid.svg#bars"></use></svg>
                        </button>
                        ${navMenuList}
                    </nav>
                    <nav id="modal-nav"><div id="nav-background" onclick="window.dispatchEvent(MyEvents.toggled)"></div>${navMenuList}</nav>
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
            window.addEventListener("toggled",()=>{
                menuButton.classList.toggle("active");
                modalNav.classList.toggle("toggled");
            });
        }
    }, { extends: "header" });
}
document.querySelector("html").addEventListener("componentReady", ()=>{
    Header();
});