//variables

const compartirBtn = document.querySelector(".autor__compartir");
const redes = document.querySelector(".compartir");
const autor = document.querySelector(".contenido__autor");
const quitarBtn = document.querySelector(".icono__compartir");

let i = 0;

eventos();

function eventos(){
    compartirBtn.addEventListener("click", ocularElementos);
    quitarBtn.addEventListener("click", ocularElementos);
}

function ocularElementos(){
    redes.classList.toggle("ocultar");
    autor.classList.toggle("ocultar");
}


