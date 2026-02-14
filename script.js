function mostrarMensaje() {
    document.getElementById("sorpresa").style.display = "block";
}

// Fecha desde que empezó tu amor (CAMBIA LA FECHA)
const fechaInicio = new Date("2024-01-01");

function actualizarTiempo() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    document.getElementById("tiempo").innerHTML =
        dias + " días, " + horas + " horas y " + minutos + " minutos ❤️";
}

setInterval(actualizarTiempo, 1000);
