import { cambiarEstado, dameCartaAleatoria, calcularPuntuación, crearNumeroAleatorio} from "./motor";
import { vi } from "vitest";
import { partida, Estado } from "./modelo";

describe("sumarPuntuación", () => {
    it("Devuelve el valor de la carta cuando es menor a 7", () => {        
        const carta:number = 5;
        
        const resultado = calcularPuntuación(carta);

        expect(resultado).toBe(carta);
    });
    it("Devuelve 0.5 cuando la carta es mayor a 7", () => {        
        const carta:number = 8;
        
        const resultado = calcularPuntuación(carta);

        expect(resultado).toBe(0.5);
    });
});
describe("cambiarEstado", () => {
    it("Devuelve CONSERVADOR cuando el valor es menor a 4", () => {
        const numeroAleatorio = 3.5;
          
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(numeroAleatorio);

        const estado: Estado = cambiarEstado();

        expect(estado).toBe("CONSERVADOR");
        
    });
    it("Devuelve CAGUETA cuando el valor es mayor o igual a 4 y menor a 6", () => {
        const numeroAleatorio = 4;
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(numeroAleatorio);

        const estado: Estado = cambiarEstado();

        expect(estado).toBe("CAGUETA");

    });
    it("Devuelve CASI cuando el valor es mayor o igual a 6 y menor o igual a 7", () => {
        const numeroAleatorio = 7;
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(numeroAleatorio);

        const estado: Estado = cambiarEstado();

        expect(estado).toBe("CASI");
    });
    it("Devuelve WINNER cuando el valor es igual a 7.5", () => {
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(7.5);

        const estado: Estado = cambiarEstado();

        expect(estado).toBe("WINNER");
    });
    it("Devuelve GAME_OVER cuando el valor es mayor a 7.5", () => {
        const numeroAleatorio = 9;
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(numeroAleatorio);

        const estado: Estado = cambiarEstado();

        expect(estado).toBe("GAME_OVER");
    });
});
describe("dameCartaAleatoria",() => {
    it("Si el math random me da un 0.8 devolverá 10", () => {
        vi.spyOn(Math, 'random').mockReturnValue(1);

        const resultado: number = dameCartaAleatoria(crearNumeroAleatorio());

        expect(resultado).toBe(12);
    });
    it("Si el math random me da un 0.9 devolverá 11", () => {
        vi.spyOn(Math, 'random').mockReturnValue(0.9);

        const resultado:number = dameCartaAleatoria(crearNumeroAleatorio());

        expect(resultado).toBe(11);
    });
    it("Si el math random me da un 1 devolverá 12", () => {
        vi.spyOn(Math, 'random').mockReturnValue(1);

        const resultado:number = dameCartaAleatoria(crearNumeroAleatorio());

        expect(resultado).toBe(12);
    });
    it("Si el math random me da un valor menor a 0.8 la solución será el mismo numero por 10", () => {
        const numeroAleatorio:number = Math.floor(Math.random() * 8);
        vi.spyOn(Math, 'random').mockReturnValue(numeroAleatorio/10);

        const resultado:number = dameCartaAleatoria(crearNumeroAleatorio());

        expect(resultado).toBe(numeroAleatorio);
    });
});
