import { obtenerEstado, dameCartaAleatoria, calcularPuntuación, crearNumeroAleatorio} from "./motor";
import { vi } from "vitest";
import { partida, Estado } from "./modelo";

describe("sumarPuntuación", () => {
    it("Devuelve el valor de la carta cuando es menor a 7 y la puntuación es 0", () => {        
        const carta:number = 5;
        
        const resultado = calcularPuntuación(carta);

        expect(resultado).toBe(carta);
    });
    it("Devuelve 0.5 cuando la carta es mayor a 7 y la puntuación es 0", () => {        
        const carta:number = 8;
        
        const resultado = calcularPuntuación(carta);

        expect(resultado).toBe(0.5);
    });
    it("Devuelve la Suma de la puntuación + 0.5 cuando la carta es mayor a 7", () => {        
        const carta:number = 8;
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(4);
        
        const resultado = calcularPuntuación(carta);

        expect(resultado).toBe(4.5);
    });
    it("Devuelve la Suma de la puntuación + el valor de la carta cuando es menor o igual a 7", () => {        
        const carta:number = 7;
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(4);
        
        const resultado = calcularPuntuación(carta);

        expect(resultado).toBe(11);
    });
});
describe("cambiarEstado", () => {
    it("Devuelve CONSERVADOR cuando el valor es menor a 4", () => {
        const numeroAleatorio = 3.5;
          
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(numeroAleatorio);

        const estado: Estado = obtenerEstado();

        expect(estado).toBe("CONSERVADOR");
        
    });
    it("Devuelve CAGUETA cuando el valor es mayor o igual a 4 y menor a 6", () => {
        const numeroAleatorio = 4;
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(numeroAleatorio);

        const estado: Estado = obtenerEstado();

        expect(estado).toBe("CAGUETA");

    });
    it("Devuelve CASI cuando el valor es mayor o igual a 6 y menor o igual a 7", () => {
        const numeroAleatorio = 7;
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(numeroAleatorio);

        const estado: Estado = obtenerEstado();

        expect(estado).toBe("CASI");
    });
    it("Devuelve WINNER cuando el valor es igual a 7.5", () => {
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(7.5);

        const estado: Estado = obtenerEstado();

        expect(estado).toBe("WINNER");
    });
    it("Devuelve GAME_OVER cuando el valor es mayor a 7.5", () => {
        const numeroAleatorio = 9;
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(numeroAleatorio);

        const estado: Estado = obtenerEstado();

        expect(estado).toBe("GAME_OVER");
    });
});
describe("dameCartaAleatoria",() => {
    it("Devuelve el mismo número que recibe si es menor o igual a 8", () => {
        const numero = 5;

        const cartaAleatoria = dameCartaAleatoria(numero);

        expect(cartaAleatoria).toBe(numero);
    });
    it("Devuelve el mismo número que recibe si es menor o igual a 8, aunque sea un valor negativo", () => {
        const numero = -200;

        const cartaAleatoria = dameCartaAleatoria(numero);

        expect(cartaAleatoria).toBe(numero);
    });
    it("Devuelve el número que recibe + 2 si es mayor a 8 ", () => {
        const numero = 9;

        const cartaAleatoria = dameCartaAleatoria(numero);

        expect(cartaAleatoria).toBe(numero+2);
    });
    it("Devuelve el número que recibe + 2 si es mayor a 8, con valores extremos", () => {
        const numero = 10000;

        const cartaAleatoria = dameCartaAleatoria(numero);

        expect(cartaAleatoria).toBe(10000+2);
    });
});
describe("crearNumeroAleatorio", () =>{
    it("devuelve un número aleatorio menor a 10", () => {
        const numero = 4;
        vi.spyOn(Math, "random").mockReturnValue(0.4);
        
        const crearNumero = crearNumeroAleatorio();

        expect(crearNumero).toBe(numero);
    });
    it("devuelve 10 cuando el marh.random devuelve un número mayor a 0.9", () => {
        const numero = 10;
        vi.spyOn(Math, "random").mockReturnValue(0.999999);
        
        const crearNumero = crearNumeroAleatorio();

        expect(crearNumero).toBe(numero);
    });
    it("devuelve 8 cuando el marh.random devuelve un número entre 0.71 y 0.8", () => {
        const numero = 8;
        vi.spyOn(Math, "random").mockReturnValue(0.8);
        
        const crearNumero = crearNumeroAleatorio();

        expect(crearNumero).toBe(numero);
    });
    it("devuelve 1 cuando el marh.random devuelve un número entre 0.01 y 0.1", () => {
        const numero = 1;
        vi.spyOn(Math, "random").mockReturnValue(0.06);
        
        const crearNumero = crearNumeroAleatorio();

        expect(crearNumero).toBe(numero);
    });
    it("devuelve 6 cuando el marh.random devuelve un número entre 0.51 y 0.6", () => {
        const numero = 6;
        vi.spyOn(Math, "random").mockReturnValue(0.52);
        
        const crearNumero = crearNumeroAleatorio();

        expect(crearNumero).toBe(numero);
    });
    it("devuelve 0 cuando el marh.random devuelve 0", () => {
        const numero = 0;
        vi.spyOn(Math, "random").mockReturnValue(0);
        
        const crearNumero = crearNumeroAleatorio();

        expect(crearNumero).toBe(numero);
    });
});