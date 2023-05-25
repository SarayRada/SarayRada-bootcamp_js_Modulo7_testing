import { partida, Estado, setPuntuación } from "./modelo";
import { obtenerEstado, dameCartaAleatoria, crearNumeroAleatorio, calcularPuntuación} from "./motor";

const insertarAlResultadoTexto = (textoAMostrar: string) => {
    const resultado = document.getElementById("resultado");
    resultado instanceof HTMLElement
        ? resultado.innerHTML = textoAMostrar
        : console.error("insertarAlResultadoTexto: el elemento con id resultado no tiene valor");
}

const imprimirCarta = (url: string) => {
    const elementoCarta = document.getElementById("imagen-carta");
    elementoCarta instanceof HTMLImageElement
        ? elementoCarta.src = url
        : console.error("imprimirCarta: el elemento imagen-carta no se ha encontrado")
}

const mostrarCarta = (carta: number) : void => {
    switch(carta){               
            case 1:
                imprimirCarta("../img/1_as-copas.jpg");
                break;
            case 2:
                imprimirCarta("../img/2_dos-copas.jpg");
                break;               
            case 3:
               imprimirCarta("../img/3_tres-copas.jpg");
                break;
            case 4:                    
                imprimirCarta("../img/4_cuatro-copas.jpg");
                break;
            case 5:
               imprimirCarta("../img/5_cinco-copas.jpg");
                break;               
            case 6:
                imprimirCarta("../img/6_seis-copas.jpg");
                break;
            case 7:
                imprimirCarta("../img/7_siete-copas.jpg");
                break;               
            case 10:
                imprimirCarta("../img/10_sota-copas.jpg");
                break;
            case 11:                    
               imprimirCarta("../img/11_caballo-copas.jpg");
                break;
            case 12:                    
                imprimirCarta("../img/12_rey-copas.jpg");
                break;
            default:
                imprimirCarta("../img/BocaAbajo.jpg");
    }
}

const mostrarMensajeSegúnEstado = (estado: Estado) => {
    switch(estado){
        case "CONSERVADOR":
            insertarAlResultadoTexto("Has sido muy conservador.");
            break;
        case "CAGUETA":
            insertarAlResultadoTexto("Te ha entrado caguelo eh?");
            break;
        case "CASI":
            insertarAlResultadoTexto("Casi casi...");
            break;
        case "WINNER":
            insertarAlResultadoTexto("¡Lo has clavado! ¡ENHORABUENA!");
            break;
        case "GAME_OVER":
            insertarAlResultadoTexto(`GAME OVER: tu puntuación es ${partida.puntuacionUsuario}`);
            break;
        default:
            insertarAlResultadoTexto("No se cómo hemos acabado aquí!");
            break;
     }
}

const cambiarEstadoBotónDameCarta = (enabled: boolean) :void =>{
    const dameCarta = document.getElementById("dameCarta");

    dameCarta instanceof HTMLButtonElement
        ? dameCarta.disabled = !enabled
        : console.error("cambiarEstadoButtonDameCarta = elemento con id dameCarta no se ha encontrado");

}

const cambiarEstadoBotónPlantarse = (enabled: boolean) :void =>{
    const plantarse = document.getElementById("plantarse");

    plantarse instanceof HTMLButtonElement
        ?  plantarse.disabled = !enabled
        : console.error("disabledButtonPlantasrse = elemento con id plantarse no se ha encontrado")
}

const cambiarEstadoBotónNuevaPartida = (enabled: boolean) => {
    const boton = document.getElementById("nuevaPartida");

    boton instanceof HTMLButtonElement
        ? boton.disabled = !enabled
        : console.error("disabledButtonNuevaPartida: el elemento con id nuevaPartida no se ha encontrado")
}

const cambiarEstadoBotónQueHubiesePasado = (enabled: boolean) => {
    const boton = document.getElementById("queHubiesePasado");

    boton instanceof HTMLButtonElement
        ? boton.disabled = !enabled
        : console.error("disabledButtonQueHubiesePasado: el elemento con id queHubiesePasado no se ha encontrado")
};

const comprobarEstadoBotónDameCarta = () : boolean => {
    const botón = document.getElementById("dameCarta");
    return botón && botón instanceof HTMLButtonElement
        ? botón.disabled
        : false
}

const partidaGanada = () => {
    mostrarMensajeSegúnEstado(obtenerEstado());
    cambiarEstadoBotónDameCarta(false);
    cambiarEstadoBotónPlantarse(false);
    cambiarEstadoBotónNuevaPartida(comprobarEstadoBotónDameCarta());
}

const partidaPerdida = () => {
    cambiarEstadoBotónPlantarse(false);
    cambiarEstadoBotónDameCarta(false)
    mostrarMensajeSegúnEstado(obtenerEstado());
    cambiarEstadoBotónNuevaPartida(comprobarEstadoBotónDameCarta());
}

const comprobarPuntuación = () => {
    if (partida.puntuacionUsuario == 7.5) {
        partidaGanada();
    }
    if (partida.puntuacionUsuario > 7.5) {
        partidaPerdida();
    }
}

export const jugarCarta = () => {
    const cartaAleatoria = dameCartaAleatoria(crearNumeroAleatorio());
    mostrarCarta(cartaAleatoria); 
    setPuntuación(calcularPuntuación(cartaAleatoria));
    insertarAlResultadoTexto(`Tu puntuación actual es: ${partida.puntuacionUsuario}`);
    comprobarPuntuación();
}

export const plantase = () => {
    const estadoActual = obtenerEstado();
    mostrarMensajeSegúnEstado(estadoActual);
    cambiarEstadoBotónPlantarse(false);
    cambiarEstadoBotónDameCarta(false);
    cambiarEstadoBotónNuevaPartida(comprobarEstadoBotónDameCarta());
    cambiarEstadoBotónQueHubiesePasado(true);
}

export const nuevaPartida = () => {
    cambiarEstadoBotónDameCarta(true);
    cambiarEstadoBotónPlantarse(true);
    partida.puntuacionUsuario = 0;
    insertarAlResultadoTexto(`Tu puntuación actual es: ${partida.puntuacionUsuario}`);
    cambiarEstadoBotónNuevaPartida(false);
    cambiarEstadoBotónQueHubiesePasado(false);
    mostrarCarta(0);
}

export const saberMas = () => {
    cambiarEstadoBotónPlantarse(false);
    const cartaAleatoria = dameCartaAleatoria(crearNumeroAleatorio());
    mostrarCarta(cartaAleatoria);
    setPuntuación(calcularPuntuación(cartaAleatoria));    
    insertarAlResultadoTexto(`Tu puntuación hubiese sido: ${partida.puntuacionUsuario}`);
    cambiarEstadoBotónQueHubiesePasado(false);
}
