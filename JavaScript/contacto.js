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

//Mensaje final al enviar formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    var mensajeAnimado = document.getElementById('mensajeAnimado');
    mensajeAnimado.style.display = 'block'; // Mostrar el mensaje

    // Agregar una pequeña demora antes de aplicar la clase para la transición suave
    setTimeout(function() {
        mensajeAnimado.style.opacity = '1';
    }, 100);

    // Ocultar el mensaje después de 3 segundos
    setTimeout(function() {
        mensajeAnimado.style.opacity = '0';
        // Volver a ocultar el mensaje después de la transición
        setTimeout(function() {
            mensajeAnimado.style.display = 'none';
        }, 500); // Ajustar el tiempo según la duración de la transición CSS
    }, 3000); // 3000 milisegundos = 3 segundos
});