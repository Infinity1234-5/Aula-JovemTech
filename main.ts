// let nome: string = "joao";
// let preco: number = 29.90;
// let aberta: boolean = true;

// let precos: number[] = [20.90, 19.90, 10.90];
// let item: string[] = [];

// // let exemplo = 3;
// // let exemplo2 = any = 0;
// import emReais from "./comanda"

// const itens: string[] = []
// const precos: number[] = []
// const quantidades: number[] = []

// function adicionar(item: string,
//     precoCentavos: number,

// )

// let mesa: number = 7;
// let item: string = "x-burger";
// let aberta: boolean = true;
// const precos: number[] = [18.90, 12.00]

// function subTotal(preco:  number, qtd: number): number {
//     return preco * qtd
// }
import { ItemComanda, comanda } from "./comanda";
const mesa7 = new comanda(7)
const burger = new ItemComanda ("X-Burger", 19.00, 1)
mesa7.adicionar(burger);
mesa7.adicionar(new  ItemComanda("X-salada", 12.00, 2));
mesa7.adicionar(new  ItemComanda("Fritas", 16, 2));
console.log(mesa7.fechar());
console.log (burger.subtotal)
console.log(burger.nome)