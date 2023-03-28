export default{
    seccion1:{
    title:"q",
    date:"23",
    by:"",
    paragraph1: "cc",
    paragraph2: "",
    paragraph3: "",
    },
    seccion2:{
        title:"",
        paragraph1: "",
        paragraph2:"",
    tabla:{
    fila1:[
        {
        txt:"a", 
        },
        {
        txt:"c", 
        },
        {
        txt:"a", 
        },
    ],
    fila2:[
        {
        txt:"v", 
        },
        {
        txt:"m", 
        },
        {
        txt:"u", 
        },

    ],
    fila3:[
        {
        txt:"p", 
        },
        {
        txt:"u", 
        },
        {
        txt:"l", 
        },
    ],
    filaf:[
        {
        txt:"c", 
        },
        {
        txt:"", 
        },
        {
        txt:"", 
        },
    ]
    }
},
    seccion3:{

    title:"",
    date:"",
    by:"",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    lista:[
        {
            l:",", 
        },
        {
            l:"n", 
        },
        {
            l:"b", 
        },
    ],
    btn:{
        name1:"Older",
        name2:"Newer",
    }
    },
showSeccion1(){
    document.querySelector("#seccion5").insertAdjacentHTML("beforeend",`
    <h2 class="blog-post-title">${this.seccion1.title}</h2>
    <p class="blog-post-meta">${this.seccion1.date} <a href="#">${this.seccion1.by}</a></p>

    <p>${this.seccion1.paragraph1}</p>
    <blockquote>
      <p>${this.seccion1.paragraph2}</p>
    </blockquote>
    <p>${this.seccion1.paragraph3}</p>
    <h3>${this.seccion2.title}</h3>
    <p>${this.seccion2.paragraph1}</p>
    <table class="table">
      <thead>
        <tr>
          <th id="listTh1"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="listTh2"></td>
        </tr>
        <tr>
          <td id="listTh3"></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td id="listTh4"></td>
        </tr>
      </tfoot>
    </table>

    <p>${this.seccion2.paragraph2}</p>
  </article>

  <article class="blog-post">
    <h2 class="blog-post-title">${this.seccion3.title}</h2>
    <p class="blog-post-meta">${this.seccion3.date} <a href="#">${this.seccion3.by}</a></p>

    <p>${this.seccion3.paragraph1}</p>
    <ul>
      <li id="listaS3"></li>
    </ul>
    <p>${this.seccion3.paragraph2}</p>
  </article>

  <nav class="blog-pagination" aria-label="Pagination">
    <a class="btn btn-outline-primary" href="#">${this.seccion3.btn.name1}</a>
    <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">${this.seccion3.btn.name2}</a>
  </nav>
    `)

    this.seccion2.tabla.forEach((val, id) => {
        document.querySelector("#listTh1").insertAdjacentHTML("beforeend",`
        <th>${val.fila1}</th>
        `)
        
    });
    this.seccion2.tabla.forEach((val, id) => {
        document.querySelector("#listTh2").insertAdjacentHTML("beforeend",`
        <td>${val.fila2}</td>
        `)
        
    });
    this.seccion2.tabla.forEach((val, id) => {
        document.querySelector("#listTh3").insertAdjacentHTML("beforeend",`
        <td>${val.fila3}</td>
        `)
        
    });
    this.seccion2.tabla.forEach((val, id) => {
        document.querySelector("#listTh4").insertAdjacentHTML("beforeend",`
        <td>${val.filaf}</td>
        `)
        
    });
    this.seccion2.tabla.forEach((val, id) => {
      document.querySelector("#listS3").insertAdjacentHTML("beforeend",`
      <li>${val.lista}</li>
      `)
      
  });
}
}
