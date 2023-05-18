import { partida, Estado } from "./modelo";


export const cambiarEstado = () : Estado => {
    if (partida.puntuacionUsuario < 4) {
        return "CONSERVADOR";
    }
    if (partida.puntuacionUsuario >= 4 && partida.puntuacionUsuario < 6 ){
        return "CAGUETA";
    }
    if (partida.puntuacionUsuario >= 6 && partida.puntuacionUsuario <= 7 ){
        return "CASI";
    }
    if (partida.puntuacionUsuario == 7.5 ){
        return "WINNER";
    }
    else 
        return "GAME_OVER";
}

export const crearNumeroAleatorio = () : number => {
    return Math.ceil(Math.random()*10)
}

export const dameCartaAleatoria = (numero: number) : number => {
    return numero >= 8
        ? numero+2
        : numero;
}

 export const calcularPuntuación = (carta:number) : number => {
    return carta <= 7 
        ? carta + partida.puntuacionUsuario
        : 0.5 + partida.puntuacionUsuario;
}
