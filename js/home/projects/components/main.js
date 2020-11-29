function Main () {
    window.customElements.define('main-component', class extends HTMLElement {
        constructor(){
            super();
            let Html, html, projectsDev, projectsVideos, chooseCategory, template, shadow, updateComponent;
            const githubUrl = "tom-m-git.github.io",
            hostVar = window.location.host,
            rootPath = (hostVar == githubUrl) ? "/portfolio/" : "/",
            //initCss = document.querySelector("link[href*='init.css']")?.outerHTML ?? "404";
            initCss = document.querySelector("link[href*='init.css']").outerHTML;

            window.MyMain = {
                "projects": new Projects().projects,
                "modalToggled": new Event("modalToggled"),
                "projectsModal": "",
                "hash": window.location.hash,
                "key": "",
                "html": "",
                get category(){
                    if(window.location.pathname.match(/development\/$|development\/index.html/) != null){
                        return "development";
                    } else if (window.location.pathname.match(/videos\/$|videos\/index.html/) != null) {
                        return "videos";
                    }
                },
                "toggleModal": function(hash){
                    this.hash = hash;
                    this.projectsModal = document.getElementById("page-main").shadowRoot.getElementById("projects-modal");
                    this.projectsModal.classList.toggle("modal-toggled");
                    window.dispatchEvent(MyMain.modalToggled);
                }
            };

            window.addEventListener("modalToggled", ()=>{
                if(MyMain.projectsModal.classList.contains("modal-toggled") == true){
                    MyMain.key = MyMain.hash.replace(/^#/, "");
                    //.replace(/-./gi, (match)=> match[1].toUpperCase());
                    MyMain.html = MyMain.projects[MyMain.category][MyMain.key].article;
                    MyMain.projectsModal.querySelector("#modal-container").innerHTML = MyMain.html;
                }
            });

            Html = () => {

                projectsDev = `
                    <section class="projects-category" id="projects-development">
                        <header class="projects-header" id="projects-header-dev">
                            <svg class="projects-category-icon" viewBox="0 0 640 512" fill="#444444" style="width:60px;"><use xlink:href="${rootPath}lib/solid.svg#code"></use></svg>
                            <h3 class="projects-category-title">Web Development</h3>
                        </header>
                        <ul class="projects-list">
                            <li>
                                <a href="#i18n-with-React-Intl-and-multilingual-posts" id="i18n-with-React-Intl-and-multilingual-posts" onclick="MyMain.toggleModal(this.id)">
                                    <div class="projects-card">
                                        <img class="projects-thumb" src="${MyMain.projects.development["i18n-with-React-Intl-and-multilingual-posts"].thumbnail}">
                                        <span class="projects-title">${MyMain.projects.development["i18n-with-React-Intl-and-multilingual-posts"].name}</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#Implementing-Gettext-js" id="Implementing-Gettext-js" onclick="MyMain.toggleModal(this.id)">
                                    <div class="projects-card">
                                        <img class="projects-thumb" src="${MyMain.projects.development["Implementing-Gettext-js"].thumbnail}">
                                        <span class="projects-title">${MyMain.projects.development["Implementing-Gettext-js"].name}</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#Multilingual-Blog-With-Vanilla-JS-And-JSON" id="Multilingual-Blog-With-Vanilla-JS-And-JSON" onclick="MyMain.toggleModal(this.id)">
                                    <div class="projects-card">
                                        <img class="projects-thumb" src="${MyMain.projects.development["Multilingual-Blog-With-Vanilla-JS-And-JSON"].thumbnail}">
                                        <span class="projects-title">${MyMain.projects.development["Multilingual-Blog-With-Vanilla-JS-And-JSON"].name}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </section>
                `;
                projectsVideos = `
                    <section class="projects-category" id="projects-video-editing">
                        <header class="projects-header" id="projects-header-video">
                            <svg class="projects-category-icon" viewBox="0 0 512 512" fill="#444444" style="width:60px;"><use xlink:href="${rootPath}lib/solid.svg#film"></use></svg>
                            <h3 class="projects-category-title">Video Editing</h3>
                        </header>
                        <ul class="projects-list">
                            <li>
                                <a href="#Musashi-x-Express-The-report" id="Musashi-x-Express-The-report" onclick="MyMain.toggleModal(this.id)">
                                    <div class="projects-card">
                                        <img class="projects-thumb" src="${MyMain.projects.videos['Musashi-x-Express-The-report'].thumbnail}">
                                        <span class="projects-title">${MyMain.projects.videos['Musashi-x-Express-The-report'].name}</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#Musashi-vol2-Compilation-Video" id="Musashi-vol2-Compilation-Video" onclick="MyMain.toggleModal(this.id)">
                                    <div class="projects-card">
                                        <img class="projects-thumb" src="${MyMain.projects.videos['Musashi-vol2-Compilation-Video'].thumbnail}">
                                        <span class="projects-title">${MyMain.projects.videos['Musashi-vol2-Compilation-Video'].name}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </section>
                `

                chooseCategory = ()=>{
                    switch (MyMain.category) {
                        case "development":
                            return projectsDev;
                        case "videos":
                            return projectsVideos;
                        default:
                            return "something went wrong";
                    }
                }
                html = `
                    ${initCss}
                    <style>
                        #main {
                            color: #444444;
                        }
                        img {
                            max-width: 100%;
                        }
                        details summary {
                            cursor: pointer;
                        }
                        .collapsed-section-title > *{
                            display: inline-block;
                        }
                        .ul-with-title::before {
                            content: attr(aria-label);
                        }
                        .projects-category {
                            display: grid;
                            grid-template-columns: auto auto;
                            grid-template-areas:
                                'header .'
                                'list list';
                        }
                        .projects-header {
                            grid-area: header;
                            display: grid;
                            width: 220px;
                            height: 130px;
                            grid-template-columns: 1fr auto;
                            grid-template-rows: 3fr 1fr;
                            grid-template-areas:
                                'icon arrow'
                                'title arrow';
                            align-items: center;
                        }
                        #projects-header-dev {
                            background-color: #fdff89;
                        }
                        #projects-header-video {
                            background-color: #9cadff;
                        }
                        .projects-category-icon {
                            grid-area: icon;
                        }
                        .projects-category-title {
                            grid-area: title;
                        }
                        .projects-category-arrow {
                            grid-area: arrow;
                            height: 100%;
                            background-color: rgba(0,0,0,0.1);
                        }
                        .projects-list {
                            grid-area: list;
                            list-style: none;
                            display: grid;
                            grid-template-columns: minmax(auto, 640px);
                            grid-auto-rows: 1fr;
                        }
                        .projects-card {
                            display: grid;
                            grid-template-rows: auto;
                            grid-template-areas: 'card';
                            color: #ffffff;
                        }
                        .projects-thumb {
                            grid-area: card;
                        }
                        .projects-title {
                            background-color: rgba(0,0,0,0.7);
                            grid-area: card;
                            align-self: end;
                            min-height: 3em;
                        }
                        #projects-modal {
                            display: none;
                            grid-template-columns: 1fr;
                            justify-content: center;
                            align-items: center;
                            position: fixed;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 997;
                        }
                        #projects-modal.modal-toggled {
                            display: grid;
                        }
                        #modal-background {
                            position: absolute;
                            height: 100%;
                            width: 100%;
                            background-color: rgba(0,0,0,0.5);
                            cursor: pointer;
                        }
                        #close-button {
                            position: fixed;
                            bottom: 2rem;
                            right: 2rem;
                            transform: rotate(45deg);
                            z-index: 998;
                            font-size: 3rem;
                            text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
                        }
                        #modal-container {
                            position: relative;
                            width: 100%;
                            min-height: 10rem;
                            background-color: #ffffff;
                            display: grid;
                            justify-content: center;
                        }
                        #modal-container article {
                            display: grid;
                        }
                        #modal-container iframe {
                            max-width:100%;
                            justify-self: center;
                        }
                        #modal-container header img {
                            display: block;
                            margin: auto;
                        }
                    </style>

                    <main id="main">

                        <section id="projects">
                            <h2>Projects</h2>
                            ${chooseCategory()}
<!-- ======================================================= -->
                            <section id="projects-modal" class="">
                                <div id="modal-background" onclick="MyMain.toggleModal()"><span id="close-button">+</span></div>
                                <div id="modal-container">

                                </div>
                            </section>
                        </section>
<!-- ======================================================= -->
                        <section id="go-back">
                            <h2><a href="../../">
                                <svg class="" viewBox="0 0 320 512" fill="#777777" style="width:20px;vertical-align:bottom;"><use xlink:href="${rootPath}lib/solid.svg#chevron-left"></use></svg>
                                Go Back
                            </a></h2>
                        </section>
                    </main>
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

            if(MyMain.hash != ""){MyMain.toggleModal(MyMain.hash);}

        }
    });
}
window.addEventListener("componentReady", ()=>{
    Main();
});