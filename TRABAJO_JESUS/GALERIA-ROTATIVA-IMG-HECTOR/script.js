const ImagenContainer = document.querySelector(".image-container");
const btnSign = document.querySelector(".siguiente");
const btnAnter = document.querySelector(".anterior");

let x = 0;
let timer = 0;

btnAnter.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer)
    updateContainer()
})

btnSign.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer)
    updateContainer()
})

function updateContainer(){
    ImagenContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`

    timer = setTimeout(() => {
        x = x - 45;
        updateContainer();
    }, 2000);
}
    