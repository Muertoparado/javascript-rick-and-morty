export default{
    data:{
        about:{
            title: "xcvxcv",
            paragranph: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
            
        },
       
    },

nav:[
    {
        title:"archives",
        link:[
            {
            name:"",
            href:"",
            }
        ],
    },
    {
        title:"elsewhere",
        link:[
            {
            }
        ]
    },
],

showAside() {
    const data = this.nav.map((val,id)=>{
        return(
            (val.link)
            ?this.list(val)
            :this.card(val)
        );
    });
    document.querySelector("#nav").insertAdjacentHTML("beforeend",
    data.join(""))},

    cards(p1){
        return`  <div class="p-4 mb-3 bg-light rounded">
        <h4 class="fst-italic">${p1.title}</h4>
        <p class="mb-0">${p1.paragranph}</p>
      </div>`
      ;
    },
    list (p1){
        return ` <div class="p-4">
        <h4 class="fst-italic">${p1.title}</h4>
        <ol class="list-unstyled">${p1.linl.map((val,id)=> `<li><a href="${val.href}">GitHub</a></li>)}
          ${val.name}</a></li>`).join("")}
          </ol>
        </div>`
        ;
    }
}


   