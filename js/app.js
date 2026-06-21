const themeBtn =
document.getElementById("theme-btn");

const hamburgerBtn =
document.getElementById("hamburger-btn");

const navLinks =
document.getElementById("nav-links");

/* MENÚ HAMBURGUESA */

hamburgerBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* CERRAR MENÚ AL HACER CLICK */

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* MODO OSCURO */

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.textContent = "⚪";

    }else{

        localStorage.setItem("theme","light");

        themeBtn.textContent = "⚫";

    }

});

/* RECUPERAR TEMA */

window.addEventListener("load", () => {

    const savedTheme =
    localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark");

        themeBtn.textContent = "⚪";

    }

});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach((card) => {
    observer.observe(card);
});

/* CARRUSEL */

const images = document.querySelectorAll(".carousel-track img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showImage(index) {
    images.forEach(img => {
        img.classList.remove("active");
    });

    images[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    current++;

    if (current >= images.length) {
        current = 0;
    }

    showImage(current);
});

prevBtn.addEventListener("click", () => {
    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    showImage(current);
});

const increaseBtn = document.getElementById("increase-font");
const decreaseBtn = document.getElementById("decrease-font");

let fontSize = parseFloat(localStorage.getItem("fontSize")) || 16;

document.documentElement.style.fontSize = fontSize + "px";

increaseBtn.addEventListener("click", () => {
    if (fontSize < 24) {
        fontSize += 2;
        document.documentElement.style.fontSize = fontSize + "px";
        localStorage.setItem("fontSize", fontSize);
    }
});

decreaseBtn.addEventListener("click", () => {
    if (fontSize > 12) {
        fontSize -= 2;
        document.documentElement.style.fontSize = fontSize + "px";
        localStorage.setItem("fontSize", fontSize);
    }
});