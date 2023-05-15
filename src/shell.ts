import { partida } from "./modelo";
import { dameCartaAleatoria, cambiarEstado, calcularPuntuaciónSegúnCarta } from "./motor";
import {
    sumarPuntuación,
    mostrarCarta, 
    mostrarPuntuación, 
    mostrarMensajePlantarse,
    mostrarMensajeGameOver,
    mostrarMensajePosibleResultado,
    disabledButtonDameCarta,
    disabledButtonPlantarse,
    disabledButtonNuevaPartida,
    disabledButtonQueHubiesePasado,
    comprobarEstadoBotónDameCarta,
    activarBotónNuevaPartida,
    activarBotónSaberMás,
    activarBotones,
    activarEstadoGameOver,
} from "./ui";

const comprobarPuntuación = () => {
    if (partida.puntuacionUsuario == 7.5) {
        mostrarMensajePlantarse(cambiarEstado());
        disabledButtonDameCarta();
        disabledButtonPlantarse();
        activarBotónNuevaPartida(comprobarEstadoBotónDameCarta());
    }
   if (partida.puntuacionUsuario > 7.5) {
       mostrarMensajeGameOver(activarEstadoGameOver());
       activarBotónNuevaPartida(comprobarEstadoBotónDameCarta());
   }
}

const jugarCarta = () => {
    const cartaAleatoria = dameCartaAleatoria();
    mostrarCarta(cartaAleatoria); 
    sumarPuntuación(calcularPuntuaciónSegúnCarta(cartaAleatoria));
    mostrarPuntuación();
    comprobarPuntuación();
}

const plantase = () => {
    const estadoActual = cambiarEstado();
    mostrarMensajePlantarse(estadoActual);
    disabledButtonDameCarta();
    activarBotónNuevaPartida(comprobarEstadoBotónDameCarta());
    activarBotónSaberMás();
}

const nuevaPartida = () => {
    activarBotones();
    partida.puntuacionUsuario = 0;
    mostrarPuntuación();
    disabledButtonNuevaPartida();
    disabledButtonQueHubiesePasado();
    mostrarCarta(0);
}

const saberMas = () => {
    disabledButtonPlantarse();
    const cartaAleatoria = dameCartaAleatoria();
    mostrarCarta(cartaAleatoria);
    sumarPuntuación(calcularPuntuaciónSegúnCarta(cartaAleatoria));    
    mostrarPuntuación();
    mostrarMensajePosibleResultado();
    disabledButtonQueHubiesePasado();
}

document.addEventListener("DOMContentLoaded", mostrarPuntuación);

const botonDarCarta = document.getElementById("dameCarta");
botonDarCarta instanceof HTMLButtonElement
    ? botonDarCarta.addEventListener("click", jugarCarta)
    : console.error("botonComprobar: elemento dameCarta no existe");

const botonPlantarse = document.getElementById("plantarse");
botonPlantarse instanceof HTMLButtonElement
    ? botonPlantarse.addEventListener("click", plantase)
    : console.error("botonPlantarse: elemento plantarse no existe");

const botonNuevaPartida = document.getElementById("nuevaPartida");
botonNuevaPartida instanceof HTMLButtonElement
    ? botonNuevaPartida.addEventListener("click", nuevaPartida)
    : console.error("botonPlantarse: elemento plantarse no existe");

const botonSaberMas = document.getElementById("queHubiesePasado");
botonSaberMas instanceof HTMLButtonElement
    ? botonSaberMas.addEventListener("click", saberMas)
    : console.error("botonPlantarse: elemento plantarse no existe");