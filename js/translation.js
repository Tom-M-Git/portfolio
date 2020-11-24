function translationJs() {
    /* some initialization */
    let htmlEl, isRoot, loadPath, rootPath, lng;

    const languageDetector = new i18nextBrowserLanguageDetector();
    const componentReady = new Event("componentReady");
    const githubUrl = "tom-m-git.github.io";
    const hostVar = window.location.host;
    const protocolVar = window.location.protocol;
    const entirePath = window.location.href;
    htmlEl = document.querySelector("html");
    isRoot = htmlEl.getAttribute("data-root");
    loadPath = (hostVar == githubUrl)
        ? "/portfolio/locales/{{lng}}/{{ns}}.json"
        : "/locales/{{lng}}/{{ns}}.json";
    rootPath = (hostVar == githubUrl)
    ? "/portfolio/"
    : "/";
    lng = document.querySelector("html").getAttribute("lang");
    /* ---------------------------- */

    /* Dealing with cookies */
    function setCookie(cname, cvalue, exminutes) {
        let d = new Date();
        d.setTime(d.getTime() + (exminutes*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=" + rootPath;
    }
    /* -------------------- */
    
    /* Creating Path to the same page in another lang */
    function generatePath(lang){
        let regex = new RegExp(`(?<=${protocolVar}//${hostVar+rootPath})[^/]*`, '');
        let newPath = entirePath.replace(regex, lang);
        return newPath;
    } generatePath("en");
    /* --------------------------------- */
    i18next
        .use(i18nextHttpBackend)
        .use(languageDetector)
        .init({
            lng: lng,
            fallbackLng: "en",
            debug: true,
            backend: {
                loadPath: loadPath,
            },
            detector: {
                order: ['cookie'],
                lookupQuerystring: 'lng',
                lookupCookie: 'i18next',
                lookupFromPathIndex: 0,
                lookupFromSubdomainIndex: 0,
                caches: ['cookie']
            }
        }).then((t)=>{
            // If the data-root is true, Cookie's not going to be set
            if(isRoot!="true"){
                setCookie("i18next", "", "");setCookie("i18next", i18next.language, 10);
            }
            loadEverythingElse();
        });
    function loadEverythingElse () {
        htmlEl.dispatchEvent(componentReady);
        i18next.on("languageChanged", ()=>{
            window.open(generatePath(i18next.language), '_self')
        })
    }
};
translationJs();