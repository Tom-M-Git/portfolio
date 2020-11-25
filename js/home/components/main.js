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
                    </style>
                    <section id="main">
                        <section id="summary" name="summary">
                            <h3>Summary</h3>
                            <section id="skills">
                                <h4>Skills</h4>
                                <section id="skills-web" class="skills-category">
                                    <h5>WEB</h5>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">Front-End Development (Vanilla JS)</h5>
                                        <div class="progress-bar" >
                                            <div class="current-progress" style="width:60%;height:100%;background-color:#89e9ff;"><span class="progress-value">Intermediate</h6></div>
                                        </div>
                                    </div>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">i18n/l10n</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:40%;height:100%;background-color:#d789ff;"><span class="progress-value"></h6></div>
                                        </div>
                                    </div>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">UI/UX</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:30%;height:100%;background-color:#fdff89;"><span class="progress-value"></h6></div>
                                        </div>
                                    </div>
                                </section>
                                <section id="skills-dtp" class="skills-category">
                                    <h5>DTP</h5>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">Video Editing</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:50%;height:100%;background-color:#ff8989;"><span class="progress-value">Non linear, Keyframes, Composition</h6></div>
                                        </div>
                                        <h6 class="progress-title">Audio Editing</h5>
                                            <div class="progress-bar">
                                                <div class="current-progress" style="width:40%;height:100%;background-color:#ff8989;"><span class="progress-value">Cutting, Connecting, Fixing Sound</h6></div>
                                            </div>
                                    </div>
                                </section>
                                <section id="skills-translation" class="skills-category">
                                    <h5>Translation</h5>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">Translation En-Ja/Ja-En</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:50%;height:100%;background-color:#ff8989;"><span class="progress-value">Casual, Internet, Social Media</h6></div>
                                        </div>
                                    </div>
                                    <div class="progress" aria-label="progress">
                                        <h6 class="progress-title">Cat Tools</h5>
                                        <div class="progress-bar">
                                            <div class="current-progress" style="width:20%;height:100%;background-color:#ff8989;"><span class="progress-value">Beginner</h6></div>
                                        </div>
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
                                            <div class="current-progress" style="width:70%;height:100%;background-color:#ff8989;"><span class="progress-value">Conversational (>=B2)</h6></div>
                                        </div>
                                    </div>
                            </section>
                        </section>
                        <section id="projects">
                            projects has another page
                        </section>
                        <section id="about">
                            about
                        </section>
                        <section id="technical-details">
                            details links to another page
                        </section>
                        <section id="other" name="other">
                            other links to another page
                        </section>
                    </section>
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
    }, { extends: "main" });
}
window.addEventListener("componentReady", ()=>{
    Main();
});