import Header from './components/header.js';
import Footer from './components/footer.js';
function translationJs() {
    let headerComponent;
    i18next
        .use(i18nextHttpBackend)
        .init({
            lng:"ja",
            fallbackLng:"en",
            debug: true,
        }).then((t)=>{
            headerComponent = new Header();
            const event = new Event("update");
            i18next.on("languageChanged", ()=>{
                document.querySelector("html").dispatchEvent(event);             
            });
        });
};
translationJs();