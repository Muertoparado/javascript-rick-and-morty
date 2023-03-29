export let wsMyHeader={
    listTitle(p1) {
         return`
        <a class="blog-header-logo text-dark" href="${p1.href}">${p1.name}</a>`

    },
    listarCompany(p1) {
        let plantilla = "";
        p1.forEach((val, id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        /* document.querySelector("#company").insertAdjacentHTML("beforeend", plantilla); */
        return plantilla;
}
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})