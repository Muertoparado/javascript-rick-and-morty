export default{
    titleSeccion:"hablaa",
    articule1:{
        title:"xx",
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
        title:"",
        title1:"",
        title2:"",
        title3:"",
        paragraph1:"", 
        paragraph2:"",
        paragraph3:"",
        paragraph4:"",
        paragraph5:"",
        paragraph6:"",
        list1:[
            {
                li:""
            },
            {
                li:""
            },
            {
                li:""
            },
            {
                li:""
            },
        ]
    },
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
    document.querySelectorAll("#seccion2").insertAdjacentHTML("beforeend",`
    <h2>${this.articule2.title}</h2>
          <p>${this.articule2.paragraph1}</p>
          <blockquote class="blockquote">
            <p>${this.articule2.paragraph2}</p>
          </blockquote>
          <p>${this.articule2.paragraph3}</p>`)

}

}