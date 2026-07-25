
// Seleccionamos los colores
const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".black");

// Seleccionamos los elementos de la tarjeta que van a cambiar
const imageCard = document.querySelector(".product-image");
const itemTag = document.getElementsByTagName("h3")[0];

// Seleccionamos los botones
const cartButton = document.getElementById("button");
const feedbackBtn = document.querySelector(".feedback");


redColor.addEventListener("click", function() {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/cH2pJdny/red-benz.webp")'; // Reemplazar con la URL correcta
});


grayColor[0].addEventListener("click", function() {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg")'; // Reemplazar con la URL correcta
});


blackColor.addEventListener("click", function() {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("https://i.postimg.cc/NGRJX8hr/black-benz.jpg")'; 
});



const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};


const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};

cartButton.addEventListener("click", cart);
feedbackBtn.addEventListener("click", feedback);