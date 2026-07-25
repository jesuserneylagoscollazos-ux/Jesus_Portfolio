
const Btnleft = document.querySelector(".btn-izquierda");
const BtnRight = document.querySelector(".btn-derecha");
const images = document.querySelector(".images");

let contador = 0;
let ImgMuestra = ["001", "002", "003", "004"];

BtnRight.addEventListener("click", function(){

    contador++;
    if (contador > ImgMuestra.length-1){
        contador = 0;
    }
    images.style.backgroundImage = `url("/Imagenes_HectorToledo/Ejercicio_010/Img/${ImgMuestra[contador]}.jpg")`
})

Btnleft.addEventListener("click", function(){

    contador--;
    if (contador < 0){
        contador = ImgMuestra.length-1;
    }
    images.style.backgroundImage = `url("/Imagenes_HectorToledo/Ejercicio_010/Img/${ImgMuestra[contador]}.jpg")`
})
