export default{
    image:"./img/im1.jpg",

    btn:{
        name: "Continuar"
    },
    banner:
        {
            title:"RICK AND MORTY",
            paragraph:"Es una serie de televisión americana de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Dan Harmon, el co-creador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke. ",
        }
    ,
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend",`
        <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">${this.banner.title}</h1>
        <p class="lead my-3">${this.banner.paragraph}</p>
        <a href="#" class="text-white fw-bold">${this.btn.name}</a></p>
      </div>`);
    }
}