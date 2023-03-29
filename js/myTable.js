export default {
  parte1: {
    title: "Razones para ver Rick and Morty ",
    date: "23",
    by: "Nicolas",
    paragraph1: "Humor inteligente: La serie es conocida por su humor absurdo y sarcástico que te hace reír a carcajadas. Pero no es cualquier tipo de humor, es un humor inteligente que está lleno de referencias científicas, pop culture y filosóficas. La serie se desarrolla en un universo alternativo donde lo imposible es posible. Cada episodio presenta un nuevo mundo, dimensión o planeta que explorar. Esto mantiene la serie fresca y emocionante a medida que avanza. Además, te hace reflexionar sobre tu propio pensamiento y comportamiento.",
    paragraph2: "Personajes únicos: Los personajes principales son Rick, un científico loco y alcohólico, y Morty, su nieto ingenuo y tímido. Ambos personajes son muy diferentes, pero se complementan perfectamente. Además, los personajes secundarios también son muy interesantes y tienen su propia historia detrás. A pesar de que es una serie animada para adultos, Rick and Morty tiene temáticas complejas que tratan sobre la filosofía, la ciencia, la existencia y el universo. A través de la serie, se cuestionan muchas cosas que podrían dejarte pensando por días.",
    paragraph3: "Referencias pop culture: Si eres un fanático de la cultura pop, esta serie está llena de referencias a diferentes películas, programas de televisión, videojuegos y cómics. Desde parodias de Doctor Who hasta Homero Simpson, Rick and Morty te sorprenderá con sus referencias y guiños a la cultura popular.",
  },
  parte2: {
    title: "Caracteristicas personajes destacados",
    paragraph1: "La historia y los personajes reflejan la creatividad y la imaginación del autor al crear un mundo de ficción que sigue ciertas reglas y tiene su propia lógica interna. A través de la historia, el autor puede hacer referencias a eventos y figuras históricas reales para establecer un contexto más realista, pero utiliza estos elementos para construir una trama que se aparta de la realidad y que puede incluir elementos fantásticos, mágicos o sobrenaturales.",
    paragraph2: "Los personajes, por su parte, pueden ser muy reales en cuanto a sus personalidades, motivaciones y acciones, pero también pueden tener características o habilidades sobrenaturales que los diferencian del mundo real. Estos elementos fantásticos agregan una capa de interés y emoción a la historia, permitiendo que el lector explore nuevos mundos y horizontes. En resumen, la combinación de elementos históricos y fantásticos en la creación de una historia y sus personajes genera un ambiente realista pero con historias fuera de lo que podríamos llamar real, que permite al autor expresar tanto su creatividad como su conocimiento de la historia y la cultura en la que está ambientada su obra.",
  },
    tabla: {
      fila1: [
        {
          txt: "Personaje",
        },
        {
          txt: "Descripción",
        },
        {
          txt: "Frase célebre",
        },
      ],
      fila2: [
        {
          txt: "Rick",
        },
        {
          txt: "El protagonista, un genio científico egoísta y alcohólico.",
        },
        {
          txt: "Wubba Lubba Dub Dub!",
        },

      ],
      fila3: [
        {
          txt: "Morty",
        },
        {
          txt: "El nieto de Rick, un adolescente ansioso e ingenuo.",
        },
        {
          txt: "Aw jeez, Rick.",
        },
      ],
      filaf: [
        {
          txt: "Summer",
        },
        {
          txt: "La nieta mayor de Rick, es sarcástica e inteligente.",
        },
        {
          txt: "I hate my life, I hate my life, I hate my life.",
        },
      ]
    },
 /*  }, */
  parte3: {

    title: "Personajes",
    date: "(2023)",
    by: "",
    paragraph1: "Rick Sanchez: El protagonista de la serie, un científico brillante y cínico, que ha viajado por diferentes universos y dimensiones. Él es el responsable de la mayoría de las aventuras de la serie y es el modelo principal para su nieto Morty. Rick aporta una perspectiva nihilista y un sentido del humor oscuro a la serie. Él también lleva consigo la carga emocional de haber perdido a su familia, algo que lo hace más empático de lo que parece.",
    paragraph2: "Morty Smith: Nieto de Rick, Morty es un adolescente inseguro y un poco torpe. Es el personaje que los espectadores a menudo tienen como punto de identificación, y su ingenuidad y simpatía son sus principales rasgos sobresalientes. En comparación con Rick, Morty aporta una perspectiva más ingenua y moral a las aventuras, y como personaje, es importante para equilibrar la serie.",
    paragraph3: "Summer Smith: Es la hermana mayor de Morty y es un personaje que se ha desempeñado como secundario durante gran parte de la serie. Casi siempre está dispuesta a participar en las aventuras de Rick y Morty, y ha demostrado tener un ingenio agudo. Summer aporta una perspectiva más joven y optimista a la serie.",
    paragraph4: "Beth Smith: Es la hija de Rick y madre de Morty y Summer. A menudo ha sido retratada como una madre cariñosa pero problemática, y ha tenido problemas para reconciliar su amor por su padre con la realidad de su comportamiento tóxico. Beth aporta una perspectiva más madura y emocionalmente compleja a la serie.",
   
    lista: [
      {
        lx: `Cuando se revela que desde hace tiempo tenía un plan para escapar de la prisión intergaláctica en la que estaba atrapado, lo que demuestra su inteligencia y habilidad para planificar y ejecutar planes complejos. (Temporada 3, Episodio 1: "La ricklación de Rick")`,
      },
      {
        lx: `El episodio "The Old Man and the Seat" (Temporada 4, Episodio 2), Morty se convierte accidentalmente en el objeto de adoración de un grupo de extraterrestres que lo consideran un "dios cagón". A medida que su culto aumenta en número, Morty comienza a disfrutar del poder que le otorga su nueva posición, pero finalmente decide renunciar a ese poder y volver a su vida normal. En este episodio, Morty aprende una lección importante sobre la tentación del poder y la responsabilidad que conlleva.`,
      },
      {
        lx: `En el episodio "The ABC's of Beth" (Temporada 3, Episodio 9), Summer se une a su padre Jerry en una misión para rescatar a su madre Beth de una dimensión paralela, donde se ha convertido en una cirujana con tendencias homicidas. En este episodio, Summer muestra un fuerte sentido de la familia y hace todo lo posible para ayudar a su madre y reunir a su familia, incluso si eso significa sacrificar su propia felicidad y comodidad.`,
      },
    ],
    btn: {
      name1: "Older",
      name2: "Newer",
    }
  },
  showSeccion1() {
    document.querySelector("#seccion5").insertAdjacentHTML("beforeend", `
    <h2 class="blog-post-title">${this.parte1.title}</h2>
    <p class="blog-post-meta">${this.parte1.date} <a href="#">${this.parte1.by}</a></p>

    <p>${this.parte1.paragraph1}</p>
    <blockquote>
      <p>${this.parte1.paragraph2}</p>
    </blockquote>
    <p>${this.parte1.paragraph3}</p>
    <h3>${this.parte2.title}</h3>
    <p>${this.parte2.paragraph1}</p>
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

    <p>${this.parte2.paragraph2}</p>
  </article>

  <article class="blog-post">
    <h2 class="blog-post-title">${this.parte3.title}</h2>
    <p class="blog-post-meta">${this.parte3.date} <a href="#">${this.parte3.by}</a></p>

    <p>${this.parte3.paragraph1}</p>
    <ul>
      <li id="listaS3"></li>
    </ul>
    <p>${this.parte3.paragraph2}</p>
    <p>${this.parte3.paragraph3}</p>
  </article>

  <nav class="blog-pagination" aria-label="Pagination">
    <a class="btn btn-outline-primary" href="#">${this.parte3.btn.name1}</a>
    <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">${this.parte3.btn.name2}</a>
  </nav>
    `)

      this.tabla.fila1.forEach((val, id) => {
        document.querySelector("#listTh1").insertAdjacentHTML("beforeend", `
        <th>${val.txt}</th>
        `)

    });
    this.tabla.fila2.forEach((val, id) => {
      document.querySelector("#listTh2").insertAdjacentHTML("beforeend", `
        <td>${val.txt}</td>
        `)

    });
    this.tabla.fila3.forEach((val, id) => {
      document.querySelector("#listTh3").insertAdjacentHTML("beforeend", `
        <td>${val.txt}</td>
        `)

    });
    this.tabla.filaf.forEach((val, id) => {
      document.querySelector("#listTh4").insertAdjacentHTML("beforeend", `
        <td>${val.txt}</td>
        `)

    });
    this.parte3.lista.forEach((val, id) => {
      document.querySelector("#listS3").insertAdjacentHTML("beforeend", `
      <li>${val.lx}</li>
      `)
      
/* this.articule3.list1.forEach((val, id) =>{
                document.querySelector("#listUl").insertAdjacentHTML("beforeend",`<li>${val.li}</li>`)
            }) */
    });
  }
}
