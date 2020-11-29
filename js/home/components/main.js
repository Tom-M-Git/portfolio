function Main () {
    window.customElements.define('main-component', class extends HTMLElement {
        constructor(){
            super();
            let Html, html, template, shadow, updateComponent;
            const githubUrl = "tom-m-git.github.io",
            hostVar = window.location.host,
            rootPath = (hostVar == githubUrl) ? "/portfolio/" : "/",
            //initCss = document.querySelector("link[href*='init.css']")?.outerHTML ?? "404";
            initCss = document.querySelector("link[href*='init.css']").outerHTML;

            window.MyMain = {
                "projects": new Projects().projects
            }

            Html = () => {
                html = `
                    ${initCss}
                    <style>
                        #main {
                            color: #444444;
                            background-color: #ffffff;
                            padding: 1rem;
                        }
                        img {
                            max-width: 100%;
                        }
                        details summary {
                            cursor: pointer;
                        }
                        #summary {
                            display: grid;
                            grid-template-columns: auto;
                            grid-template-rows: auto auto;
                            grid-template-areas:
                                'title'
                                'progress';
                            grid-auto-rows: 3rem;
                        }
                        #skills {
                            display: grid;
                            grid-template-columns: auto;
                            grid-template-rows: auto;
                        }
                        .skills-list, .skills-category {
                            list-style: none;
                        }
                        .progress-bar {
                            background-color: #cccccc;
                            height: 1rem;
                            width: 100%;
                        }
                        .progress-value {
                            position: absolute;
                            height: auto;
                            margin: auto;
                            width: max-content;
                            font-size: small;
                        }
                        .collapsed-section-title > *{
                            display: inline-block;
                        }
                        .ul-with-title::before {
                            content: attr(aria-label);
                        }
                        #about p, #about address {
                            margin: 0 0 1rem 1rem;
                            line-height: 1.5rem;
                        }
                        #about-about ul {
                            margin: 0 0 1rem 0;
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
                            cursor: pointer;
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
                        .link-to-category {
                            grid-area: 1/1/-1/-1;
                            width: 100%;
                            height: 100%;
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
                        .see-all {
                            height: 100%;
                            background-color: rgba(0,0,0,0.7);
                        }
                        .see-all-text {
                            grid-area: card;
                            align-self: center;
                            justify-self: center;
                        }
                    </style>

                    <main id="main">

                        <section id="summary" name="summary">
                            <h2>Summary</h2>
                            <section id="skills">
                                <h3>Skills</h3>
                                <ul class="skills-list">
                                    <li>
                                        <ul class="ul-with-title skills-category" aria-label="WEB" id="skills-web">
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">Front-End Development</span>
                                                    <div class="progress-bar" >
                                                        <div class="current-progress" style="width:60%;height:100%;background-color:#89e9ff;"><span class="progress-value">Intermediate</span></div>
                                                    </div>
                                                    <details>
                                                        <summary>Details</summary>
                                                        <ul>
                                                            <li><label for="progress-html">HTML: </label><progress id="progress-html" max="100" value="60"></progress></li>
                                                            <li><label for="progress-css">CSS: </label><progress id="progress-css" max="100" value="60"></progress></li>
                                                            <li><label for="progress-javascript">Javascript: </label><progress id="progress-javascript" max="100" value="50"></progress></li>
                                                            <li><label for="progress-react">React: </label><progress id="progress-react" max="100" value="30"></progress></li>
                                                        </ul>
                                                    </details>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">i18n/l10n</span>
                                                    <div class="progress-bar">
                                                        <div class="current-progress" style="width:40%;height:100%;background-color:#fdff89;"><span class="progress-value"></span></div>
                                                    </div>
                                                    <details>
                                                        <summary>Details</summary>
                                                        <ul>
                                                            <li><label for="progress-i18next">i18next: </label><progress id="progress-i18next" max="100" value="30"></progress></li>
                                                        </ul>
                                                    </details>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">UI/UX</span>
                                                    <div class="progress-bar">
                                                        <div class="current-progress" style="width:30%;height:100%;background-color:#fdff89;"><span class="progress-value"></span></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul class="ul-with-title skills-category" aria-label="DTP" id="skills-dtp">
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">Video Editing</span>
                                                    <div class="progress-bar">
                                                        <div class="current-progress" style="width:50%;height:100%;background-color:#d789ff;"><span class="progress-value">Non linear, Keyframes, Composition</span></div>
                                                    </div>
                                                    <details>
                                                        <summary>Details</summary>
                                                        <ul>
                                                            <li><label for="progress-davinci">DaVinci Resolve: </label><progress id="progress-davinci" max="100" value="30"></progress></li>
                                                        </ul>
                                                    </details>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">Audio Editing</span>
                                                    <div class="progress-bar">
                                                        <div class="current-progress" style="width:40%;height:100%;background-color:#fdff89;"><span class="progress-value">Cutting, Connecting, Fixing Sound</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul class="ul-with-title skills-category" aria-label="Office Suites" id="skills-office-suites">
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">Word Processor</span>
                                                    <div class="progress-bar" >
                                                        <div class="current-progress" style="width:30%;height:100%;background-color:#ff8989;"><span class="progress-value">Beginner</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">Spreadsheets
                                                    </span>
                                                    <div class="progress-bar" >
                                                        <div class="current-progress" style="width:30%;height:100%;background-color:#ff8989;"><span class="progress-value">Beginner</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul class="ul-with-title skills-category" aria-label="Translation" id="skills-translation">
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">Translation En-Ja/Ja-En</span>
                                                    <div class="progress-bar">
                                                        <div class="current-progress" style="width:50%;height:100%;background-color:#d789ff;"><span class="progress-value">Casual, Internet, Social Media</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">Cat Tools</span>
                                                    <div class="progress-bar">
                                                        <div class="current-progress" style="width:20%;height:100%;background-color:#ff8989;"><span class="progress-value">Beginner</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul class="ul-with-title skills-category" aria-label="Language" id="skills-language">
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">Japanese</span>
                                                    <div class="progress-bar">
                                                        <div class="current-progress" style="width:100%;height:100%;background-color:#00b0d0;"><span class="progress-value">Native</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="progress" aria-label="progress">
                                                    <span class="progress-title">English</span>
                                                    <div class="progress-bar">
                                                        <div class="current-progress" style="width:65%;height:100%;background-color:#89e9ff;"><span class="progress-value">Conversational (>=B2)</span></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </section>
                        </section>
<!-- ======================================================= -->
                        <section id="projects">
                            <h2>Projects</h2>
                            <section class="projects-category" id="projects-development">
                                <header class="projects-header" id="projects-header-dev">
                                    <svg class="projects-category-icon" viewBox="0 0 640 512" fill="#444444" style="width:60px;"><use xlink:href="${rootPath}lib/solid.svg#code"></use></svg>
                                    <h3 class="projects-category-title">Web Development</h3>
                                    <svg class="projects-category-arrow" viewBox="0 0 320 512" fill="#444444" style="width:20px;"><use xlink:href="${rootPath}lib/solid.svg#chevron-right"></use></svg>
                                    <a class="link-to-category" href="./projects/development/"></a>
                                </header>
                                <ul class="projects-list">
                                    <li>
                                        <a href="./projects/development/#i18n-with-React-Intl-and-multilingual-posts">
                                            <div class="projects-card">
                                                <img class="projects-thumb" src="${MyMain.projects.development['i18n-with-React-Intl-and-multilingual-posts'].thumbnail}">
                                                <span class="projects-title">${MyMain.projects.development['i18n-with-React-Intl-and-multilingual-posts'].name}</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./projects/development/#Implementing-Gettext-js">
                                            <div class="projects-card">
                                                <img class="projects-thumb" src="${MyMain.projects.development['Implementing-Gettext-js'].thumbnail}">
                                                <span class="projects-title">${MyMain.projects.development['Implementing-Gettext-js'].name}</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./projects/development/">
                                            <div class="projects-card see-all">
                                                <div class="projects-thumb"></div>
                                                <span class="see-all-text">See all</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </section>
                            <section class="projects-category" id="projects-video-editing">
                                <header class="projects-header" id="projects-header-video">
                                    <svg class="projects-category-icon" viewBox="0 0 512 512" fill="#444444" style="width:60px;"><use xlink:href="${rootPath}lib/solid.svg#film"></use></svg>
                                    <h3 class="projects-category-title">Video Editing</h3>
                                    <svg class="projects-category-arrow" viewBox="0 0 320 512" fill="#444444" style="width:20px;"><use xlink:href="${rootPath}lib/solid.svg#chevron-right"></use></svg>
                                    <a class="link-to-category" href="./projects/videos/"></a>
                                </header>
                                <ul class="projects-list">
                                    <li>
                                        <a href="./projects/videos/#Musashi-x-Express-The-report">
                                            <div class="projects-card">
                                                <img class="projects-thumb" src="${MyMain.projects.videos['Musashi-x-Express-The-report'].thumbnail}">
                                                <span class="projects-title">${MyMain.projects.videos['Musashi-x-Express-The-report'].name}</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./projects/videos/#Musashi-vol2-Compilation-Video">
                                            <div class="projects-card">
                                                <img class="projects-thumb" src="${MyMain.projects.videos['Musashi-vol2-Compilation-Video'].thumbnail}">
                                                <span class="projects-title">${MyMain.projects.videos['Musashi-vol2-Compilation-Video'].name}</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./projects/videos/">
                                            <div class="projects-card see-all">
                                                <div class="projects-thumb"></div>
                                                <span class="see-all-text">See all</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </section>
<!-- ======================================================= -->
                        <section id="about">
                            <h2>About</h2>
                            <section id="about-about">
                                <h3>About the author</h3><hr>
                                <h4>Basic Information: </h4>
                                <ul>
                                    <li>Name: Tomoaki Morioka (森岡 知映)</li>
                                    <li>Gender: Male</li>
                                    <li>From: Japan</li>
                                    <li>Birth: June 17, 1994</li>
                                </ul>
                                <h4>Department: </h4>
                                <p>En-Ja/Ja-En Translation, Front-End Development, Video Editing</p>
                                <h4>Languages: </h4>
                                <p>Native in Japanese; Can speak conversational English (>=B2 in CEFR)<br>
                                    (Reading/Writing English requiring dictionaries and understanding daily conversation in English.<br>
                                    Translating English-Japanese/Japanese-English, currently at least more accurate than machine translators. It's been improving over time.)</p>
                                <h4>Web: </h4>
                                <p>Basic knowledge of front-end development, design, building a website and deployment—HTML, CSS, Javascript<br>
                                    Learning: Front-end, WordPress, and Internationalization/Localization</p>
                                <h4>Contact: </h4>
                                <address>
                                    <a href="mailto:tomoaki.morioka.email@gmail.com">tomoaki.morioka.email@gmail.com</a>
                                </address>
                            </section>
                            <section id="about-education">
                                <h3>Education</h3><hr>
                                <p>High School Diploma — Daimon High School of Hiroshima, Japan — in March, 2013</p>
                            </section>
                        </section>
<!-- ======================================================= -->
                        <section id="technical-details">
                            <details>
                                <summary class="collapsed-section-title"><h2>Technical Details</h2></summary>
                                <h3>Details about this website</h3><hr>
                                <ul class="ul-with-title" aria-label="Mainly used technologies">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>i18next.js</li>
                                    <li>Fontawesome icons</li>
                                </ul>
                            </details>
                        </section>
<!-- ======================================================= -->
                        <!--
                        <section id="other">
                            <details>
                                <summary class="collapsed-section-title"><h2>Other</h2></summary>
                                <p><strong>Contains personal affairs such as in blog posts.</strong></p>
                                <ul class="ul-with-title" aria-label="Extertal Links">
                                    <li><a href="#">Book Shelf</a></li>
                                    <li><a href="#">Personal Blog</a></li>
                                </ul>
                            </details>
                        </section>
                        -->
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

        }
    });
}
window.addEventListener("componentReady", ()=>{
    Main();
});