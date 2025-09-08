export class Produto{

    private _codigo: number;
    private _nomeProduto: string;
    private _quantidade: number;
    private _valor: number;

    constructor(codigo: number, nomeProduto: string, quantidade: number, valor: number){
        this._codigo = codigo;
        this._nomeProduto = nomeProduto;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    public get codigo(){
        return this._codigo;
    }

    public set codigo(codigo: number){
        this._codigo = codigo;
    }
    public get nomeProduto(){
        return this._nomeProduto;
    }       
    public set nomeProduto(nomeProduto: string){
        this._nomeProduto = nomeProduto;
    }
    public get quantidade(){
        return this._quantidade;
    }   
    public set quantidade(quantidade: number){
        this._quantidade = quantidade;
    }
    public get valor(){
        return this._valor;
    }
    public set valor(valor: number){
        this._valor = valor;
    }
    
    public visualizar(): void{
        console.log("\n\n*****************************************************");
        console.log("           Dados do Produto:                             ");
        console.log("******************************************************");
        console.log("Código do produto: " + this._codigo);
        console.log("Nome do produto: " + this._nomeProduto);
        console.log("Quantidade do produto: " + this._quantidade);
        console.log("Valor do produto: "  + this._valor.toFixed(2));
    }
}