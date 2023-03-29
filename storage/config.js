export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
            title: {
                name: "Rick and Morty",
                href: "https://www.netflix.com/ad/title/80014749",
            },
            company: [
                {
                    name: "Warner Bros Discovery",
                    href: "https://wbd.com/adult-swim-reveals-rick-and-morty-season-six-global-premiere-date/"
                },
                {
                    name: "Adult swim",
                    href: "https://www.adultswim.com/videos/rick-and-morty"
                },
                {
                    name: "Campusland",
                    href: "#"
                },
            ],
        }))
    }
}