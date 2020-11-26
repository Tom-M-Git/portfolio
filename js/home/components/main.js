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

            Html = () => {
                html = `
                    ${initCss}
                    <style>
                        #main {
                            color: #444444;
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
                            left: 0;
                            right: 0;
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
                                                        <ul>
                                                            <li><label for="progress-react">HTML: </label><progress max="100" value="30"></progress></li>
                                                            <li><label for="progress-react">CSS: </label><progress max="100" value="30"></progress></li>
                                                            <li><label for="progress-react">Javascript: </label><progress max="100" value="30"></progress></li>
                                                            <li><label for="progress-react">React: </label><progress max="100" value="30"></progress></li>
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
                                                        <ul>
                                                            <li><label for="progress-react">i18next: </label><progress max="100" value="30"></progress></li>
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
                                                        <ul>
                                                            <li><label for="progress-react">lorem: </label><progress max="100" value="30"></progress></li>
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
                                                    <details>
                                                        <ul>
                                                            <li><label for="progress-react">lorem: </label><progress max="100" value="30"></progress></li>
                                                        </ul>
                                                    </details>
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
                                                    <details>
                                                        <ul>
                                                            <li><label for="progress-react">lorem: </label><progress max="100" value="30"></progress></li>
                                                        </ul>
                                                    </details>
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
                        <section id="projects">
                            <h2>Projects</h2>
                            <section id="projects-development">
                                <h3>Web Development</h3>
                            </section>
                            <section id="projects-video-editing">
                                <h3>Video Editing</h3>
                            </section>
                            <section id="projects-translation">
                                <h3>Translation</h3>
                            </section>
                        </section>
                        <section id="about">
                            <h2>About</h2>
                            <section id="about-about">
                                <h3>About the author</h3><hr>
                                <p>something</p>
                            </section>
                            <section id="about-education">
                                <h3>Education</h3><hr>
                                <p>High School Diploma — Daimon High School of Hiroshima, Japan — in March, 2013</p>
                            </section>
                            <section id="about-experience">
                                <details>
                                    <summary class="collapsed-section-title"><h3>Experience</h3></summary>
                                    <hr>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </details>
                            </section>
                        </section>
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
                        <section id="other" name="other">
                            <details>
                                <summary class="collapsed-section-title"><h2>Other</h2></summary>
                                <p><strong>Contains personal affairs such as blog posts.</strong></p>
                                <ul class="ul-with-title" aria-label="Extertal Links">
                                    <li><a href="#">Book Shelf</a></li>
                                    <li><a href="#">Personal Blog</a></li>
                                </ul>
                            </details>
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

        }
    });
}
window.addEventListener("componentReady", ()=>{
    Main();
});