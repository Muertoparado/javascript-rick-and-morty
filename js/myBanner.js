export default{
    image:"./img/im1.jpg",

    btn:{
        name: "Continuar"
    },
    banner:
        {
            title:"csdcsdc",
            paragraph:"psrraafo",
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