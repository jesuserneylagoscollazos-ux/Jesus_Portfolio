const input = document.querySelector(".input");
const lista = document.querySelector(".list");
const boton = document.querySelector(".button");

boton.addEventListener("click", () => {

    if (input.value === ""){
        alert("Escribe algo en tu lista, no debe estar vacia...");
    } else {
        
        let li = document.createElement("li")
        li.textContent = input.value;
        lista.appendChild(li);
        input.value = "";
        let span = document.createElement("span")
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    guardar()
})


lista.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
    guardar()
})

function guardar() {
    localStorage.setItem("data", lista.innerHTML);
}

function getData(){
    lista.innerHTML = localStorage.getItem("data");
}

getData();