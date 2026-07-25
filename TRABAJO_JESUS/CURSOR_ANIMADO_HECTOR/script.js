const CursorAni = document.querySelector(".cursor");

let timeout;

document.addEventListener("mousemove", function(e){

    let x = e.pageX
    let y = e.pageY

    CursorAni.style.left = x + "px"
    CursorAni.style.top = y + "px"
    CursorAni.style.display = "block"

    clearTimeout(timeout)
    timeout = setInterval(() => {
        CursorAni.style.display = "none"
    }, 2000);
    
})

document.addEventListener("mouseout", () =>{
    CursorAni.style.display = "none"
})