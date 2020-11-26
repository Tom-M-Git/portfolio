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
                            color: #333333;
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
                            grid-template-areas:
                                'title';
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
                            <h3>Summary</h3>
                            <section id="skills">
                                <h4>Skills</h4>
                                <section id="skills-web" class="skills-category">
                                    <h5>WEB</h5>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">Front-End Development</h5>
                                        <div class="progress-bar" >
                                            <div class="current-progress" style="width:60%;height:100%;background-color:#89e9ff;"><span class="progress-value">Intermediate</h6></div>
                                        </div>
                                        <details>
                                            <ul>
                                                <li><label for="progress-react">HTML: </label><progress id="progress-react" max="100" value="30"></progress></li>
                                                <li><label for="progress-react">CSS: </label><progress id="progress-react" max="100" value="30"></progress></li>
                                                <li><label for="progress-react">Javascript: </label><progress id="progress-react" max="100" value="30"></progress></li>
                                                <li><label for="progress-react">React: </label><progress id="progress-react" max="100" value="30"></progress></li>
                                            </ul>
                                        </details>
                                    </div>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">i18n/l10n</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:40%;height:100%;background-color:#fdff89;"><span class="progress-value"></h6></div>
                                        </div>
                                        <details>
                                            <ul>
                                                <li><label for="progress-react">i18next: </label><progress id="progress-react" max="100" value="30"></progress></li>
                                            </ul>
                                        </details>
                                    </div>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">UI/UX</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:30%;height:100%;background-color:#fdff89;"><span class="progress-value"></h6></div>
                                        </div>
                                        <details>
                                            <ul>
                                                <li><label for="progress-react">lorem: </label><progress id="progress-react" max="100" value="30"></progress></li>
                                            </ul>
                                        </details>
                                    </div>
                                </section>
                                <section id="skills-dtp" class="skills-category">
                                    <h5>DTP</h5>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">Video Editing</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:50%;height:100%;background-color:#d789ff;"><span class="progress-value">Non linear, Keyframes, Composition</h6></div>
                                        </div>
                                        <details>
                                            <ul>
                                                <li><label for="progress-react">lorem: </label><progress id="progress-react" max="100" value="30"></progress></li>
                                            </ul>
                                        </details>
                                        <h6 class="progress-title">Audio Editing</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:40%;height:100%;background-color:#fdff89;"><span class="progress-value">Cutting, Connecting, Fixing Sound</h6></div>
                                        </div>
                                        <details>
                                            <ul>
                                                <li><label for="progress-react">lorem: </label><progress id="progress-react" max="100" value="30"></progress></li>
                                            </ul>
                                        </details>
                                    </div>
                                </section>
                                <section id="skills-translation" class="skills-category">
                                    <h5>Translation</h5>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">Translation En-Ja/Ja-En</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:50%;height:100%;background-color:#d789ff;"><span class="progress-value">Casual, Internet, Social Media</h6></div>
                                        </div>
                                    </div>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">Cat Tools</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:20%;height:100%;background-color:#ff8989;"><span class="progress-value">Beginner</h6></div>
                                        </div>
                                        <details>
                                            <ul>
                                                <li><label for="progress-react">lorem: </label><progress id="progress-react" max="100" value="30"></progress></li>
                                            </ul>
                                        </details>
                                    </div>
                                </section>
                                <section id="skills-language" class="skills-category">
                                    <h5>Language</h5>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">Japanese</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:100%;height:100%;background-color:#00b0d0;"><span class="progress-value">Native</h6></div>
                                        </div>
                                    </div>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">English</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:65%;height:100%;background-color:#89e9ff;"><span class="progress-value">Conversational (>=B2)</h6></div>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </section>
                        <section id="projects">
                            <h3>Projects</h3>
                            <section id="projects-development">Web Development</section>
                            <section id="projects-video-editing">Video Editing</section>
                            <section id="projects-translation">Translation</section>
                        </section>
                        <section id="about">
                            <h3>About</h3>
                            <details>
                                <summary>Education</summary>
                                <p></p>
                            </details>
                        </section>
                        <section id="technical-details">
                            <details>
                                <summary class="collapsed-section-title"><h3>Technical Details</h3></summary>
                            </details>
                        </section>
                        <section id="other" name="other">
                            <details>
                                <summary class="collapsed-section-title"><h3>Other</h3></summary>
                                <ul class="ul-with-title" aria-label="Extertal Links">
                                    <li>Book Shelf</li>
                                    <li>Personal Blog</li>
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