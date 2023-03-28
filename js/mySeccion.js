export default{
    titleSeccion:"hablaa",
    articule1:{
        title:"erfe",
        date:"12",
        linkHref:"#",
        by:"v",
        paragraph1:"dqwd", 
        paragraph2:"dscacannnnnn",
    },
    articule2:{
        title:"s",
        paragraph1:"This is an example blockquote in action:", 
        paragraph2:"xxxxxxxxxx",
        paragraph3:"axzxc",

    },
    articule3:{
        title:"qqqqq",
        title1:"fgh",
        title2:"nnn",
        title3:"jkj",
        paragraph1:"qq", 
        paragraph2:"x",
        paragraph3:"cv",
        paragraph4:"hj",
        paragraph5:"m",
        paragraph6:"n",
        list1:[
            {
                li:"fgb"
            },
            {
                li:"bb"
            },
            {
                li:"wer"
            },
            {
                li:"iolio"
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
    <h2 class="blog-post-title">Sample blog post</h2>
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