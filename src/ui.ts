import { partida, Estado } from "./modelo";
import { cambiarEstado } from "./motor";

export const insertarAlResultadoTexto = (textoAMostrar: string) => {
    const resultado = document.getElementById("resultado");
    if (resultado && resultado instanceof HTMLElement) {
        resultado.innerHTML = textoAMostrar
    } else {
        console.error("mostrarPuntuación: el elemento con id resultado no tiene valor");
    }
}

export const sumarPuntuación = (number: number) => {
    partida.puntuacionUsuario += number;
}

const imprimirCarta = (url: string) => {
    const ElementoCarta = document.getElementById("imagen-carta");
    if(ElementoCarta && ElementoCarta instanceof HTMLImageElement) {
        ElementoCarta.src = url;
    } else {
        console.error("imprimirCarta: el elemento imagen-carta no se ha encontrado")
    }
}

export const mostrarCarta = (carta: number) : void => {
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

export const mostrarPuntuación = () => {
    insertarAlResultadoTexto(`Tu puntuación actual es: ${partida.puntuacionUsuario}`);
}

export const mostrarMensajeGameOver = (estado : Estado) => {
    if (estado==="GAME_OVER") {
        insertarAlResultadoTexto(`GAME OVER: tu puntuación es ${partida.puntuacionUsuario}`);
    }
}

export const mostrarMensajePlantarse = (estado: Estado) => {
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
        default:
            insertarAlResultadoTexto("No se cómo hemos acabado aquí!");
            break;
     }
}

export const mostrarMensajePosibleResultado = () => {
    insertarAlResultadoTexto(`Tu puntuación hubiese sido: ${partida.puntuacionUsuario}`);
}

export const disabledButtonDameCarta = () :void =>{
    const dameCarta = <HTMLButtonElement>document.getElementById("dameCarta");

    dameCarta instanceof HTMLButtonElement
        ? dameCarta.disabled = true
        : console.error("disabledButtonDameCarta = elemento con id dameCarta no se ha encontrado");

}

export const disabledButtonPlantarse = () :void =>{
    const plantarse = <HTMLButtonElement>document.getElementById("plantarse");

    plantarse instanceof HTMLButtonElement
        ?  plantarse.disabled = true
        : console.error("disabledButtonPlantasrse = elemento con id plantarse no se ha encontrado")
}

export const disabledButtonNuevaPartida = () => {
    const boton = document.getElementById("nuevaPartida");

    boton instanceof HTMLButtonElement
        ? boton.disabled = true
        : console.error("disabledButtonNuevaPartida: el elemento con id nuevaPartida no se ha encontrado")
}

export const disabledButtonQueHubiesePasado = () => {
    const boton = document.getElementById("queHubiesePasado");

    boton instanceof HTMLButtonElement
        ? boton.disabled = true
        : console.error("disabledButtonQueHubiesePasado: el elemento con id queHubiesePasado no se ha encontrado")
};

export const comprobarEstadoBotónDameCarta = () : boolean => {
    const botón = <HTMLButtonElement>document.getElementById("dameCarta");

    return botón.disabled
}

export const activarBotónNuevaPartida = (disabled: boolean) => {
    if(disabled == true){
        const botón = document.getElementById('nuevaPartida');

        botón instanceof HTMLButtonElement
            ? botón.disabled = false
            : console.error("activarBotónNuevaPartida: el elemento con el id nuevaPartida es null")
    
    }
}

export const activarBotónSaberMás = () => {
    const botón = document.getElementById('queHubiesePasado');

        botón instanceof HTMLButtonElement
            ? botón.disabled = false
            : console.error("activarBotónNuevaPartida: el elemento con el id nuevaPartida es null")
    
}

export const activarBotones = () => {
    const plantarse = document.getElementById("plantarse");
    const dameCarta = document.getElementById("dameCarta");
    if (plantarse instanceof HTMLButtonElement && dameCarta instanceof HTMLButtonElement) { 
        plantarse.disabled = false;
        dameCarta.disabled =false;
    }
    else {
        console.error("activarBotones = elemento con id plantarse y dameCarta no se ha encontrado");
    }
}

export const activarEstadoGameOver = () : Estado  => {
    if(partida.puntuacionUsuario > 7.5){
        disabledButtonDameCarta();
        disabledButtonPlantarse();
        return "GAME_OVER";
    }
    return "KEEP_PLAYING";
}
