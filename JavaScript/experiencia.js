let opciones = document.getElementById("opciones");
let boton = document.getElementById("menuDesplegable");

//Precarga de pagina
document.addEventListener("DOMContentLoaded", function() {
    // Simula un retardo en la carga
    setTimeout(function() {
        document.body.classList.add('carga');
        document.getElementById('precarga').style.display = 'none';
    }, 700); // Ajusta el tiempo de retardo
});
    
// Función para alternar la visibilidad del menú
function mostrarMenu() {
    opciones.classList.toggle("mostrar");
    boton.classList.toggle("rotar");

    // Cambiar el color de fondo del botón cuando el menú se activa
    if (opciones.classList.contains("mostrar")) {
        boton.style.backgroundColor = "rgba(131, 128, 128, 0.479)";
    } else {
        boton.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
}

// Cerrar el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
        var desplegables = document.getElementsByClassName("opciones");
        for (var i = 0; i < desplegables.length; i++) {
            var abrirDesplegable = desplegables[i];
            if (abrirDesplegable.classList.contains('mostrar')) {
                abrirDesplegable.classList.remove('mostrar');
            }
        }
        var botones = document.getElementsByClassName("btn");
        for (var i = 0; i < botones.length; i++) {
            var boton = botones[i];
            if (boton.classList.contains('rotar')) {
                boton.classList.remove('rotar');
                boton.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            }
        }
    }
}

// Función para cerrar el menú cuando se redimensiona la pantalla
window.onresize = function() {
    if (window.innerWidth > 513) {
        opciones.classList.remove("mostrar");
        boton.classList.remove("rotar");
        boton.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
}