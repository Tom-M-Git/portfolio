class Projects {
    constructor(){
        const githubUrl = "tom-m-git.github.io", hostVar = window.location.host, rootPath = (hostVar == githubUrl) ? "/portfolio/" : "/";

        this.projects = {
            "development": {
                "i18n-with-React-Intl-and-multilingual-posts": {
                    "name": "i18n with React Intl and multilingual posts",
                    "hash": "i18n-with-React-Intl-and-multilingual-posts",
                    "thumbnail": `${rootPath}assets/img/i18n_with_react_intl_and_multilingual_posts_thumb.jpg`,
                    "img": `${rootPath}assets/img/i18n_with_react_intl_and_multilingual_posts.png`,
                    "date":"2020-10-25",
                    get article(){ return `
                        <article>
                            <header>
                                <a href="https://tom-m-git.github.io/i18n-with-react-intl-and-multilingual-posts/" target="_blank"><img src="${this.img}">Go to the project</a>
                                <h4>${this.name}</h4>
                                <p>
                                    Project started: <time datetime="${this.date}">${this.date}</time><br/>
                                    (The website may be updated irregularly)
                                </p>
                            </header>
                            <section>
                                <p>
                                    This is focused on i18n using a library React Intl (Format.JS).
                                    Supported Languages: English, Japanese.
                                    Involved technologies: HTML, CSS, React, React Intl (Format.JS), React Router.
                                </p>
                            </section>
                        </article>
                    `}
                },
                "Multilingual-Blog-With-Vanilla-JS-And-JSON": {
                    "name": "Multilingual Blog With Vanilla JS And JSON",
                    "hash": "Multilingual-Blog-With-Vanilla-JS-And-JSON",
                    "thumbnail": `${rootPath}assets/img/multilingual-blog-with-vanilla-js-and-json-thumb.jpg`,
                    "img": `${rootPath}assets/img/multilingual_blog_with_vanilla_js_and_json.png`,
                    "date":"2020-10",
                    get article(){ return `
                        <article>
                            <header>
                                <a href="https://tom-m-git.github.io/multilingual_blog_with_vanilla_javascript/" target="_blank"><img src="${this.img}">Go to the project</a>
                                <h4>${this.name}</h4>
                                <p>
                                    Project started: <time datetime="${this.date}">${this.date}</time><br/>
                                    (The website may be updated irregularly)
                                </p>
                            </header>
                            <section>
                                <p>
                                    A multilingual website with no library or framework.
                                    Involved skills: HTML, CSS, Javascript, JSON, AJAX, Front-End, i18n.
                                </p>
                            </section>
                        </article>
                    `}
                },
                "Implementing-Gettext-js": {
                    "name": "Implementing Gettext.js",
                    "hash": "Implementing-Gettext-js",
                    "thumbnail": `${rootPath}assets/img/implementing_gettextjs_thumb.jpg`,
                    "img": `${rootPath}assets/img/implementing_gettextjs.png`,
                    "date":"2020-10",
                    get article(){ return `
                        <article>
                            <header>
                                <a href="https://tom-m-git.github.io/implementing_gettextjs_without_back_end/" target="_blank"><img src="${this.img}">Go to the project</a>
                                <h4>${this.name}</h4>
                                <p>
                                    Project started: <time datetime="${this.date}">${this.date}</time><br/>
                                    (The website may be updated irregularly)
                                </p>
                            </header>
                            <section>
                                <p>
                                    Testing an i18n library gettext.js without backend to internationalize a website. Involved skills: HTML, Bootstrap, Javascript, JSON, AJAX, Front-End, i18n, Gettext.js.
                                </p>
                            </section>
                        </article>
                    `}
                }
            },
            "videos": {
                "Musashi-x-Express-The-report": {
                    "name": "Musashi x Express The Dance Battles and Showcases The report",
                    "thumbnail": `${rootPath}assets/img/musashixexpress_thumb.jpg`,
                    "date":"2020-01-05",
                    get article(){ return `
                        <article>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/MZ4i4hRR5vw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <header>
                                <h4>${this.name}</h4>
                                <p>Project ended: <time datetime="${this.date}">${this.date}</time></p>
                            </header>
                            <section>
                                <p>
                                    Musashi × Express The Dance Battles and Showcases took place on Sun 11.24.2019 at Shimonoseki Japan.<br>
                                    This is a report video created to thank all the attendees and the contributors and to report the results while showing everyone how the whole event was by picking up part of the great scenes into one video.<br>
                                    It was a collaboration of the dance event Musashi and Express.
                                </p><hr>
                                <p>
                                    Sound Track information:<br>
                                    <br>
                                    Track: Debris & Jonth - Game Time [NCS Release]<br>
                                    Music provided by NoCopyrightSounds.<br>
                                    Watch: youtu.be/yDTvvOTie0w<br>
                                    Free Download / Stream: ncs.io/GameTime<br>
                                    Sound effects obtained from https://www.zapsplat.com
                                </p>
                            </section>
                        </article>
                    `}
                },
                "Musashi-vol2-Compilation-Video": {
                    "name": "Musashi vol. 2 Compilation Video",
                    "thumbnail": `${rootPath}assets/img/musashi-vol-2-thumb.jpg`,
                    "date":"",
                    get article(){ return `
                        <article>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/6cGlb2ymlbw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <header>
                                <h4>${this.name}</h4>
                                <p>Project ended: <time datetime="${this.date}">${this.date}</time></p>
                            </header>
                            <section>
                                <p>
                                    Musashi vol. 2 The 1 on 1 & crew battle @ 下関市生涯学習プラザ1F大練習室 on Sunday, March 3, 2019, the compilation.
                                </p><hr>
                                <p>
                                    The 1st song:<br>
                                    Track: S.H - Tsudumi Japan<br>
                                    <br>
                                    The 2nd song:<br>
                                    Track: Dirty Palm - Freakshow (feat. LexBlaze) [NCS Release]<br>
                                    Music provided by NoCopyrightSounds.<br>
                                    Watch: youtu.be/2jwj9wVx3mg<br>
                                    Free Download / Stream: ncs.io/FreakshowYO
                                </p>
                            </section>
                        </article>
                    `}
                }
            },
            "translation": {}
        };
        //this.what = this.projects.development.i18nWithReactIntlAndMultilingualPosts.meta.name;
    }
}