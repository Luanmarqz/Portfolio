$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
    })
})

var typed = new Typed(".type",{
    strings:["Desenvolvedor Web","Técnico em Informática","Programador", "Jogador de LoL"],
    typeSpeed:80,
    backSpeed:100,
    loop:true
})

var typed = new Typed(".type2",{
    strings:["Desenvolvedor Web","Téc. em Informática","Programador"],
    typeSpeed:80,
    backSpeed:100,
    loop:true
})
