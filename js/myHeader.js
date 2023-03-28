export default {
    title: {
        name: "Rick and Morty",
        href: "https://www.netflix.com/ad/title/80014749",

    }
    ,
    company: [
        {
            name: "Warner Bros Discovery",
            href: "https://wbd.com/adult-swim-reveals-rick-and-morty-season-six-global-premiere-date/"
        },
        {
            name: "Adult swim",
            href: "https://www.adultswim.com/videos/rick-and-morty"
        },
        {
            name: "Campusland",
            href: "#"
        },
    ],
    listTitle() {
        document.querySelector("#tituloprincipal").insertAdjacentHTML("beforeend", `<a class="blog-header-logo text-dark" href="${this.title.href}">${this.title.name}</a>`)

    },
    listarCompany() {
        let plantilla = "";
        this.company.forEach((val, id) => {
            plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
            console.log(val);

        });
        document.querySelector("#company").insertAdjacentHTML("beforeend", plantilla);

    },

}