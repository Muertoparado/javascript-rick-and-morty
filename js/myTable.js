export default{
    seccion1:{
    title:"",
    date:"",
    by:"",
    paragraph1: "",
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
        txt:"", 
        },
        {
        txt:"", 
        },
        {
        txt:"", 
        },
    ],
    fila2:[
        {
        txt:"", 
        },
        {
        txt:"", 
        },
        {
        txt:"", 
        },

    ],
    fila3:[
        {
        txt:"", 
        },
        {
        txt:"", 
        },
        {
        txt:"", 
        },
    ],
    filaf:[
        {
        txt:"", 
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
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    lista:[
        {
            l:"", 
        },
        {
            l:"", 
        },
        {
            l:"", 
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

    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
      repetitive body text used throughout.</p>
  </article>

  <article class="blog-post">
    <h2 class="blog-post-title">New feature</h2>
    <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
      show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
      demonstration flowing, so be on the lookout for this exact same string of text.</p>
    <ul>
      <li>First list item</li>
      <li>Second list item with a longer description</li>
      <li>Third list item to close it out</li>
    </ul>
    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
      repetitive body text used throughout.</p>
  </article>

  <nav class="blog-pagination" aria-label="Pagination">
    <a class="btn btn-outline-primary" href="#">Older</a>
    <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
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
}

    
}