function translationJs() {
    const componentReady = new Event("componentReady");
    const update = new Event("update");
    let htmlEl = document.querySelector("html");
    i18next
        .use(i18nextHttpBackend)
        .init({
            lng:"ja",
            fallbackLng:"en",
            debug: true,
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json',
            }
        }).then((t)=>{
            htmlEl.dispatchEvent(componentReady); 
            i18next.on("languageChanged", ()=>{
                htmlEl.dispatchEvent(update);             
            });
        });
};
translationJs();