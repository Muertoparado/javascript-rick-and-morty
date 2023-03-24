export default{
    post:[
      {
          articule:"qwqw",
          title: "titulos",
          date:"12 mar",
          paragraph:"loremadsasdasdasdasd",
          image:"img....",
            btn:{
              name:"continue",
              href:"#"
               },
      },
      {
        articule:"nnnnn",
        title: "titulos",
        date:"12 mar",
        paragraph:"loremadsasdasdasdasd",
        image:"img....",
          btn:{
            name:"continue",
            href:"#"
             },
    }, 
    {
      articule:"bbbbbqw",
      title: "titulos",
      date:"12 mar",
      paragraph:"loremadsasdasdasdasd",
      image:"img....",
        btn:{
          name:"continue",
          href:"#"
           },
  }, 
  {
    articule:"zzzzzz",
    title: "titulos",
    date:"12 mar",
    paragraph:"loremadsasdasdasdasd",
    image:"img....",
      btn:{
        name:"continue",
        href:"#"
         },
}          
    ],
    showPost(){
        this.post.forEach((val,id)=>{
            document.querySelector("#post").insertAdjacentHTML( "beforeend",
                `<div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">${val.articule}</strong>
                <h3 class="mb-0">${val.title}</h3>
                <div class="mb-1 text-muted">${val.date}</div>
                <p class="mb-auto">${val.paragraph}</p>
                <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="responsiveImg" src="${val.image}" alt="Bee Icon"></img>
    
              </div>

              `)
        },)
      }     
}
