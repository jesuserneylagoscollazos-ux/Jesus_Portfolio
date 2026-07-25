let Contador = document.querySelector(".time");
let timer = null;
let [horas,minutos,segundos] = [0,0,0];

function SumarCont(){
    segundos++;
    if (segundos == 60) {
        segundos = 0;
    minutos++;
    if (minutos == 60){
        minutos = 0;
    horas++;
        }
    }    

    let h = horas<10 ? ("0"+ horas) : horas;
    let m = minutos<10 ? ("0"+ minutos) : minutos;
    let s = segundos<10 ? ("0"+ segundos) : segundos;
    
        Contador.innerHTML = h+":"+m+":"+s;
}


    function startTimer(){
        if (timer !== null){
            clearInterval(timer);
        }
    timer = setInterval(SumarCont,1000);
    console.log(timer);
    
    }

    function stopTimer(){
        clearInterval(timer);
        console.log(timer);
        
    }

    function resetTimer(){
        clearInterval(timer);
        [horas,minutos,segundos] = [0,0,0]
        Contador.innerHTML = "00:00:00"
        console.log(timer);
        
    }