export default{
    image:"",

    btn:{
        name: "Continuar"
    },
    baner:[
        {
            title:"csdcsdc",
            paragraph:"psrraafo",
        }
    ],
    showImage(){
        document.querySelector(".imgStyle").getElementsByClassName.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend",`
        <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">${this.baner.title}</h1>
        <p class="lead my-3">${this.baner.paragraph}</p>
        <a href="#" class="text-white fw-bold">Continue reading...</a></p>
      </div>`);
    }
}