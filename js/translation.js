function translationJs() {
    const componentReady = new Event("componentReady");
    const update = new Event("update");
    let htmlEl = document.querySelector("html");
    let loadPath = (window.location.host == "tom-m-git.github.io")
        ? "/portfolio/locales/{{lng}}/{{ns}}.json"
        : "/locales/{{lng}}/{{ns}}.json";
    i18next
        .use(i18nextHttpBackend)
        .init({
            lng:"ja",
            fallbackLng:"en",
            debug: true,
            backend: {
                loadPath: loadPath,
            }
        }).then((t)=>{
            loadEverythingElse();
        });
    function loadEverythingElse () {
        htmlEl.dispatchEvent(componentReady); 
        i18next.on("languageChanged", ()=>{
            htmlEl.dispatchEvent(update);             
        });
    }
};
translationJs();