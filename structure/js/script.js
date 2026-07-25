
window.onscroll = function() {scrollfunction()};

function scrollfunction() {

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("contenedor_header").classList.add("Contenedor_header_move");
    }else {
        document.getElementById("contenedor_header").classList.remove("Contenedor_header_move");
    }
}

let Estado = {
    ContStockControl: false,
    menuVisble: false
}

const btnEliminar = document.querySelector(".Eliminar"); 
const btnDevelop = document.querySelector(".Navegar_Contenedor_stock"); 
const overlay_img = document.querySelector(".overlay_display_experiencia"); 
const cont_stock = document.querySelector(".juntar_grid_stock_imagenes"); 
// const ContImgStock = document.querySelector(".display_none"); 

console.log(overlay_img);
console.log(cont_stock);

btnEliminar.addEventListener("click", () => {

    AddRemoveContenedor()

})

btnDevelop.addEventListener("click", () => {

    AddRemoveContenedor()
    console.log(Estado.ContStockControl);
    
})

function AddRemoveContenedor() {
    
    Estado.ContStockControl = !Estado.ContStockControl

    overlay_img.classList.toggle(
        "overlay_activo",
        Estado.ContStockControl
    )
    cont_stock.classList.toggle(
        "transform_scale1",
        Estado.ContStockControl
    )

}

overlay_img.addEventListener("click", (e) => {

    if(e.target === overlay_img){

        Estado.ContStockControl = false

        overlay_img.classList.remove("overlay_activo")
        overlay_img.classList.remove("transform_scale1")
    }
})


const nav = document.querySelector(".nav");


function seleccionar() {

    nav.classList.remove("nav_ul_start");
    Estado.menuVisble = false
    console.log(Estado.menuVisble);

}

nav.addEventListener("click", (e) => {

    if(e.target === nav){

        nav.classList.remove("nav_ul_start");
        // nav.classList.remove("forma_base_responsive");

    }
})

function MostrarOcultarMenu() {

    Estado.menuVisble = !Estado.menuVisble

    // nav.classList.remove("forma_base_responsive");

    nav.classList.toggle(
        "nav_ul_start",
        Estado.menuVisble,
        console.log(Estado.menuVisble)

    )

}

// INTERSECTION OBSERVER MOD

const observeContacto = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.style.transitionDelay = entry.target.dataset.delay ;
            entry.target.style.transform = `translateX(${entry.target.dataset.x}px)` ;
        }
    })
})

document.querySelectorAll(".contactNo").forEach(element => {
    observeContacto.observe(element)
})


const observerLlenar = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            console.log("entro");
            
            entry.target.style.width = entry.target.dataset.width + "%";
            console.log(entry.target.dataset.width);
        }
    })
})

document.querySelectorAll(".sinRelleno").forEach(element => {
    observerLlenar.observe(element)
})

const observerEntrada = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            
        }
    })
});

document.querySelectorAll(".oculto").forEach(element => {
    observerEntrada.observe(element)
})
