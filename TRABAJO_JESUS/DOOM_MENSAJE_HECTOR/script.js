const Input = document.querySelector("input");
const btnEnviar = document.querySelector(".Enviar");
const mensaje = document.querySelector(".message");
const msg_error = document.querySelector(".error");

btnEnviar.addEventListener("click", function(){

    if (Input.value){
        
        mensaje.textContent = Input.value;

        Input.value = "";

    } else{

        msg_error.style.display = "block";

        setInterval(() => {
            msg_error.style.display = "none";
        }, 10000)
    }
})