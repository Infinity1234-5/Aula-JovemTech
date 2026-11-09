// export default function emReais(centavos: number): string{
//     return "R$" + (centavos / 100).toFixed(2);
// }

export class ItemComanda {
    nome: string;
    precoCentavos: number;
    quantidade: number;

    constructor(nome: string, precoCentavos: number, quantidade: number) {
        this.nome = nome;
        this.precoCentavos = precoCentavos;
        this.quantidade = quantidade;
    }
    subtotal(): number{
        return this.precoCentavos * this.quantidade
    }
}
export class comanda{
    mesa: number;
    itens: ItemComanda[] = []
    aberta: boolean = true;
    constructor(mesa: number){
        this.mesa = mesa;        
    }
    adicionar(item: ItemComanda): void{
      if(this.aberta === true){
        this.itens.push(item)
      }
    }
    total(): number{
    let soma = 0;
    for (let item = 0; item < this.itens.length; item++){
        soma = soma + this.itens[item].subtotal()
     }
     return soma;
    }
    fechar(): string{
        this.aberta = false;
        return "Mesa " + this.mesa + " - R$" + (this.total()).toFixed(2)
    }
}