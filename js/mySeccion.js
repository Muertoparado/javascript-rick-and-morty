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
        articule4:{
            title:"lllll",
            title1:"fgh",
            title2:"nnn",
            paragraph1:"qq", 
            paragraph2:"x",
            paragraph3:"cv",
            paragraph4:"hj",
            listh:[
                {
                    li:"1",
                },
                {
                    li:"2",
                },
                {
                    li:"3",
                },
                {
                    li:"4",
                },
                {
                    li:"5",
                },
                {
                    li:"6",
                },
            ]
        

        }
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
    <h2>${this.articule4.title}</h2>
    <p>${this.articule4.paragraph1}</p>
    <ul>
      <li><strong>${this.articule4.title1}</strong>, use <code
          class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
      <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.
      </li>
      <li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use <code
          class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code
          class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
      <li>Citations, like <cite>— Mark Otto</cite>, should use <code
          class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
      <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code>
        and <ins>inserted</ins> text should use <code
          class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
      <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code>
        and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.
      </li>
    </ul>
    <p>Most of these elements are styled by browsers with few modifications on our part.</p>
    <h2>Heading</h2>
    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
      show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
      demonstration flowing, so be on the lookout for this exact same string of text.</p>
    <h3>Sub-heading</h3>
    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
      show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
      demonstration flowing, so be on the lookout for this exact same string of text.</p>
    <pre><code>Example code block</code></pre>
    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
      repetitive body text used throughout.</p>
    `)
}


}