
const kits = ["kick", "tom", "crash", "snare"];
const Container = document.querySelector(".container")

kits.forEach((kit) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    Container.appendChild(btn);
    btn.innerText = kit
    btn.style.backgroundImage = `url(../../imagenes_HectorToledo/Ejercicio_004/images/${kit}.png)`;
    const Audio = document.createElement("Audio");
    Audio.src = `../../imagenes_HectorToledo/Ejercicio_004/sounds/${kit}.mp3`;
    Container.appendChild(Audio);

    btn.addEventListener("click", () => {
        Audio.play()
    })
    
    document.addEventListener("keydown", (e) => {
        if(e.key === kit.slice(0,1)){
            Audio.play();
            btn.style.transform = "scale(0.8)";
        }
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 100);
    })
})
