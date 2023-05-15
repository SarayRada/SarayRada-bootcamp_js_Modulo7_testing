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

export const dameCartaAleatoria = () : number => {
    const numeroAleatorio = Math.floor(Math.random()*10);
    if(numeroAleatorio >= 8) {
        return numeroAleatorio+2;
    }
    return numeroAleatorio;
 }

export const calcularPuntuaciónSegúnCarta = (carta:number) : number => {
    return carta <= 7 
        ? carta
        : 0.5;
}
