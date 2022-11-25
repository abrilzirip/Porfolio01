let menuVisible = false;
// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Ocultar el menu una vez que seleccino una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlCss");
        habilidades[2].classList.add("figma");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoEnEquipo");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("proyect");
        // habilidades[9].classList.add("creatividad");
    }
}

// Detecto el scrolling para aplicar la animación de la barra  de habilidades
window.onscroll = function() {
    efectoHabilidades();
}