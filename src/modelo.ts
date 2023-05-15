interface Partida {
  puntuacionUsuario: number;
}

export type Estado = 
"GAME_OVER" | 
"KEEP_PLAYING" | 
"CONSERVADOR" | 
"CAGUETA" |
"CASI"|
"WINNER"

export const partida: Partida = {
  puntuacionUsuario: 0,
};