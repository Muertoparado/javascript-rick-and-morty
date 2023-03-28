export default{
    titleSeccion:"Producion",
    articule1:{
        title:"Adult Swim",
        date:"2013",
        linkHref:"#",
        by:"Nicolas",
        paragraph1:"La serie es producida por Adult Swim, una red de televisión por cable propiedad de Turner Broadcasting System, una subsidiaria de WarnerMedia. Los creadores, Justin Roiland y Dan Harmon, son propietarios de la compañía de producción de televisión Starburns Industries, junto con Dino Stamatopoulos y James A. Fino. Además, la serie ha sido producida por Williams Street, una compañía de producción de televisión y animación también propiedad de Turner Broadcasting System.", 
        paragraph2:`El personaje de Rick fue inspirado en el personaje de Doc Brown de "Back to the Future", interpretado por Christopher Lloyd.`,
    },
    articule2:{
        title:"s",
        paragraph1:"This is an example blockquote in action:", 
        paragraph2:"xxxxxxxxxx",
        paragraph3:"axzxc",

    },
    articule3:{
        title:"información relacionada con la serie Rick and Morty",
        title1:"fgh",
        title2:"nnn",
        title3:"jkj",
        paragraph1:"a serie ha ganado una gran cantidad de seguidores, quienes han creado una comunidad muy activa en línea. La serie ha inspirado memes, teorías de conspiración, productos de merchandising, entre otros.", 
        paragraph2:`La serie ha sido objeto de controversia en ocasiones, como cuando algunos fanáticos pidieron que McDonald's reeditara su salsa "Szechuan" después de que se mencionara en un episodio de la serie. También ha habido debates sobre la representación de ciertos personajes y temas en la serie.`,
        paragraph3:"cv",
        paragraph4:"hj",
        paragraph5:"m",
        paragraph6:"n",
        list1:[
            {
                li:`El estilo de animación de la serie está inspirado en la animación clásica de los años 60 y 70, especialmente en "The Rocky and Bullwinkle Show". La serie también ha sido comparada con la película "Back to the Future", debido a la relación entre los personajes de Rick y Morty."`
            },
            {
                li:"La serie ha sido elogiada por su exploración de temas filosóficos y científicos, como la existencia de universos paralelos, la teoría del caos, la inteligencia artificial, la clonación, la inmortalidad, la psicología, entre otros."
            },
            {
                li:"La serie ha sido nominada y ha ganado varios premios, incluyendo dos Premios Emmy por Mejor Programa Animado y varios Premios Critics' Choice por Mejor Serie Animada."
            },
            {
                li:"La serie ha ganado una gran cantidad de seguidores, quienes han creado una comunidad muy activa en línea. La serie ha inspirado memes, teorías de conspiración, productos de merchandising, entre otros."
            },
        ],
        list2:[
            {
                li:"s",
            },
            {
                li:"c",
            },
            {
                li:"b",
            },
            {
                li:"t",
            }
        ],
    },
        articule4:{
            title:"lllll",
            title1:"fgh",
            title2:"nnn",
            title3:"qwx",
            paragraph1:"qq", 
            paragraph2:"x",
            paragraph3:"cv",
            paragraph4:"hj",
            paragraph5:"cv",
            paragraph6:"hj",
            paragraph7:"cv",
            paragraph8:"hjcxza",
            listh:[
                {
                    li1:"autor",
                },
            ]
        

        }
    ,
showTitle(){
    document.querySelector("#titleseccion").insertAdjacentHTML("beforeend",`
    <h3 class="pb-4 mb-4 fst-italic border-bottom">
         ${this.titleSeccion}
        </h3>

    `)
},

showArticule1(){
    document.querySelector("#seccion1").insertAdjacentHTML("beforeend",`
    <h2 class="blog-post-title">${this.articule1.title}</h2>
    <p class="blog-post-meta">${this.date} <a href="${this.articule1.linkHref}">${this.articule1.by}</a></p>

    <p>${this.articule1.paragraph1}</p>
    <hr>
    <p>${this.articule1.paragraph2}</p>
    `)
},
showArticule2(){
    document.querySelector("#seccion2").insertAdjacentHTML("beforeend",`
    <h2>${this.articule2.title}</h2>
          <p>${this.articule2.paragraph1}</p>
          <blockquote class="blockquote">
            <p>${this.articule2.paragraph2}</p>
          </blockquote>
          <p>${this.articule2.paragraph3}</p>`)

},
showArticule3(){
    document.querySelector("#seccion3").insertAdjacentHTML("beforeend",`
    <h3>${this.articule3.title}</h3>
          <p>${this.articule3.paragraph1}</p>
          <ul id="listUl">
          </ul>
          <p>${this.articule3.paragraph2}</p>
          <ol id="listOl">
           
          </ol>
          <p>${this.articule3.paragraph3}</p>
          <dl>
            <dt>${this.articule3.title1}</dt>
            <dd>${this.articule3.paragraph4}</dd>
            <dt>${this.articule3.title2}</dt>
            <dd>${this.articule3.paragraph5}</dd>
            <dt>${this.articule3.title3}</dt>
            <dd>${this.articule3.paragraph6}</dd>
          </dl>
         `)

            this.articule3.list1.forEach((val, id) =>{
                document.querySelector("#listUl").insertAdjacentHTML("beforeend",`<li>${val.li}</li>`)
            })
            this.articule3.list2.forEach((val, id) =>{
                document.querySelector("#listOl").insertAdjacentHTML("beforeend",`<li>${val.li}</li>`)
            })
            },
showArticule4(){
    document.querySelector("#seccion4").insertAdjacentHTML("beforeend",`
    <h2>${this.articule4.title} </h2>
    <p>${this.articule4.paragraph1}</p>
    <ul>
      <li><strong>${this.articule4.paragraph2}</strong></li>
      <li><em>${this.articule4.paragraph3}</em>
      </li>
      <li><abbr title="HyperText Markup Langage">${this.articule4.paragraph4}</abbr></li>
      <li><cite>${this.articule4.listh.li1}</cite></li>
      <li><del>${this.articule4.paragraph5}</del></li>
    </ul>
    <p>Most of these elements are styled by browsers with few modifications on our part.</p>
    <h2>${this.articule4.title1}</h2>
    <p>${this.articule4.paragraph6}</p>
    <h3>${this.articule4.title2}</h3>
    <p>${this.articule4.paragraph7}</p>
    <pre><code>${this.articule4.title3}</code></pre>
    <p>${this.articule4.paragraph8}</p>
    `)
}


}