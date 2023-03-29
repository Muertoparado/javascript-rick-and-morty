export default{
    post:[
      {
          articule:"articulo 1",
          title: "Temporada 1",
          date:"(2013)",
          paragraph:"La temporada introduce a Rick y Morty y presenta varios personajes secundarios, incluyendo a la familia de Morty y al interdimensional Council of Ricks.",
          image:"https://i.pinimg.com/originals/22/57/93/2257931f33c0ceeb442aaee3ff13a6fe.jpg",
            btn:{
              name:"continue",
              href:"https://www.abc.es/play/serie/rick-y-morty-3130/temporada-1/"
               },
      },
      {
        articule:"articulo 2",
        title: "Temporada 2 ",
        date:"(2015)",
        paragraph:"La temporada explora más el universo de la serie y presenta a personajes recurrentes como Unity, una entidad de hivemind, y Tammy, la novia de Birdperson.",
        image:"https://www.abc.es/media/temporadas/000/003/552/rick-y-morty-1.jpg",
          btn:{
            name:"continue",
            href:"https://www.abc.es/play/serie/rick-y-morty-3130/temporada-2/"
             },
    }, 
    {
      articule:"articulo 3",
      title: "Temporada 3",
      date:"(2017)",
      paragraph:"La temporada se centra en la relación de Rick y Morty y presenta episodios temáticos, como uno en el que Morty tiene que lidiar con la muerte de un personaje secundario.",
      image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61oHIG0T-YL._SY445_.jpg",
        btn:{
          name:"continue",
          href:"https://www.abc.es/play/serie/rick-y-morty-3130/temporada-3/"
           },
  }, 
  {
    articule:"articulo 4",
    title: "Temporada 4",
    date:"2019",
    paragraph:"La temporada presenta episodios más experimentales y se centra en personajes secundarios como Jerry y Beth, los padres de Morty.",
    image:"https://i.pinimg.com/736x/de/9c/10/de9c109d1d117d541d87ae5c785c6de5.jpg",
      btn:{
        name:"continue",
        href:"https://www.abc.es/play/serie/rick-y-morty-3130/temporada-4/"
         },
},  
{
  articule:"articulo 5",
  title: "Temporada 5",
  date:"(2021)",
  paragraph:"Tras escapar por poco con vida de su más reciente aventura con su abuelo, Morty se las arregla para aterrizar la nave en el océano habiendo convencido a su compañera de clases Jessica de tener una cita. La presencia de Rick en el océano pone en juego una tregua entre él y el Sr. Nimbus, el gobernador del mar en la tierra.",
  image:"https://es.web.img3.acsta.net/r_1280_720/pictures/21/03/30/16/16/0455033.jpg",
    btn:{
      name:"continue",
      href:"https://www.abc.es/play/serie/rick-y-morty-3130/temporada-5/"
       },
},  
{
  articule:"articulo 6",
  title: "Temporada 6",
  date:"(2022)",
  paragraph:"Evil Morty no solo destruye la Ciudadela, sino que destruye el verdadero motivo de su existencia, mantener unidas las realidades controladas por Rick, las realidades donde este reconstruyó su familia tras la muerte de su verdadera hija y se agenció a un nieto a la carta. Precisamente lo que hace Evil Morty es romper esa atadura para lograr ir, con su pistola de portales",
  image:"https://es.web.img3.acsta.net/r_1280_720/pictures/21/03/30/16/16/0455033.jpg",
    btn:{
      name:"continue",
      href:"https://www.abc.es/play/serie/rick-y-morty-3130/temporada-5/"
       },
},       
    ],
    showPost(){
        this.post.forEach((val,id)=>{
            document.querySelector("#post").insertAdjacentHTML( "beforeend",
                `<div class="col-md-6 ">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col-5 p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">${val.articule}</strong>
                <h3 class="mb-0">${val.title}</h3>
                <div class="mb-1 text-muted">${val.date}</div>
                <p class="h-25">${val.paragraph}</p>
                <a href="${val.btn.href}" class="stretched-link ">${val.btn.name}</a>
              </div>
              <div class="col-6 d-none d-lg-block">
                <img class="responsiveImg h-50" src="${val.image}" alt="Bee Icon"></img>
    
              </div>

              `)
        },)
      }     
}
