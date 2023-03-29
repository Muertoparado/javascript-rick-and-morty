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

    show() {
        //creacion worker
        const ws = new Worker("storage/wsMyHeader.js", {
            type: "module"
        });
        //envio mensaje al worker
        let id = [];
        let count = 0;
        //id.push(title);
        ws.postMessage({ module: "listTitle", data: this.title });
        //id.push(company)
        ws.postMessage({ module: "listarCompany", data: this.company });
        id = ["#title", "company"];

        //lectura lo que llega al worker
        ws.addEventListener("message", (e) => {
            //estamos parseando lo que trae evento {mensaje}
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            //insertar en index selector company
            document.querySelector(id[count].append(...doc.body.children));
            //traer trabajo worker
            (id.length-1 == count) ? ws.terminate() : count++;
        })
    }
}