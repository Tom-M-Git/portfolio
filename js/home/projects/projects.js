class Projects {
    constructor(){
        const githubUrl = "tom-m-git.github.io", hostVar = window.location.host, rootPath = (hostVar == githubUrl) ? "/portfolio/" : "/";

        this.projects = {
            "development": {
                "i18nWithReactIntlAndMultilingualPosts": {
                    "name": "i18n with React Intl and multilingual posts",
                    "thumbnail": `${rootPath}assets/img/i18n_with_react_intl_and_multilingual_posts_thumb.jpg`,
                    "date":"2020-10-25",
                    get article(){ return `
                        <article>
                            <header>
                                <h4>${this.name}</h4>
                                <p>Project started: <time datetime="${this.date}">${this.date}</time></p>
                                <p>Author: ${i18next.t("author")}</p>
                            </header>
                            <section>
                                <p>Something</p>
                            </section>
                        </article>
                    `}
                },
                "multilingualBlogWithVanillaJsAndJson": {
                    "name": "Multilingual Blog With Vanilla JS And JSON",
                    "thumbnail": `${rootPath}assets/img/multilingual-blog-with-vanilla-js-and-json-thumb.jpg`,
                    "date":"",
                    get article(){ return `
                        <article>
                            <header>
                                <h4>${this.name}</h4>
                                <p>Project started: <time datetime="${this.date}">${this.date}</time></p>
                                <p>Author: ${i18next.t("author")}</p>
                            </header>
                            <section>
                                <p>Something</p>
                            </section>
                        </article>
                    `}
                },
                "implementingGettextjs": {
                    "name": "Implementing Gettext.js",
                    "thumbnail": `${rootPath}assets/img/implementing_gettextjs_thumb.jpg`,
                    "date":"",
                    get article(){ return `
                        <article>
                            <header>
                                <h4>${this.name}</h4>
                                <p>Project started: <time datetime="${this.date}">${this.date}</time></p>
                                <p>Author: ${i18next.t("author")}</p>
                            </header>
                            <section>
                                <p>Something</p>
                            </section>
                        </article>
                    `}
                }
            },
            "videos": {
                "musashiXExpress": {
                    "name": "Musashi x Express Compilation Video",
                    "thumbnail": `${rootPath}assets/img/musashixexpress_thumb.jpg`,
                    "date":"",
                    get article(){ return `
                        <article>
                            <header>
                                <h4>${this.name}</h4>
                                <p>Project ended: <time datetime="${this.date}">${this.date}</time></p>
                                <p>Author: ${i18next.t("author")}</p>
                            </header>
                            <section>
                                <p>Something</p>
                            </section>
                        </article>
                    `}
                },
                "musashiVol2": {
                    "name": "Musashi vol. 2 Compilation Video",
                    "thumbnail": `${rootPath}assets/img/musashi-vol-2-thumb.jpg`,
                    "date":"",
                    get article(){ return `
                        <article>
                            <header>
                                <h4>${this.name}</h4>
                                <p>Project ended: <time datetime="${this.date}">${this.date}</time></p>
                                <p>Author: ${i18next.t("author")}</p>
                            </header>
                            <section>
                                <p>Something</p>
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