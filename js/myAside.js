export default{
    nav:[
        {
            title: "About",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste cum accusamus ducimus corporis, fugit dolore obcaecati debitis asperiores autem neque id quisquam dolor repudiandae numquam sunt quis esse suscipit!"
        },
        {
            title: "Archives",
            link:[
                {
                name: "ccc",
                href: "#"
            },                
            ]
        },
        {
            title: "Elsewhere",
            link:[
                {
                name: "zzz",
                href: ""
            },     
                    
            ]
        },
    ],

showAside() {
    let data = this.nav.map((val,id)=>{
        return(
            (val.link)
            ?this.list(val)
            :this.cards(val)
        );
    });
    document.querySelector("#nav").insertAdjacentHTML("beforeend",
    data.join(""))},

    cards(p1){
        return `  <div class="p-4 mb-3 bg-light rounded">
        <h4 class="fst-italic">${p1.title}</h4>
        <p class="mb-0">${p1.paragraph}</p>
        </div>`
      ;
},
    list (p1){
        return ` <div class="p-4">
        <h4 class="fst-italic">${p1.title}</h4>
        <ol class="list-unstyled mb-0">${p1.link.map((val,id)=> `<li><a href="${val.href}">
          ${val.name}</a></li>`).join("")}
          </ol>
        </div>`
        ;
    }
}


   