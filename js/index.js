
let jaJsonUrl, enJsonUrl, fetchJa, fetchEn, i18n, rootEl;
rootEl = document.getElementById("root");



function translation() {
    jaJsonUrl = "../locale/ja.json";
    enJsonUrl = "../locale/en-US.json";
    fetchEn = fetch(enJsonUrl);
    fetchJa = fetch(jaJsonUrl);

    return new Promise( (resolve, reject) => {
        fetchEn.then((res)=>{
            return res.json();
        }).then((res)=>{
            
        });
        fetchJa.then((res)=>{
            return res.json();
        }).then((res)=>{
            
        });
        resolve();
    } );
};