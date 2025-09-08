import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController  implements ProdutoRepository{
  
    private listaProdutos: Array<Produto> = new Array<Produto>();

    buscarPorCodigo(codigo: number): void {
        
        let buscaProduto = this.buscarNoArray(codigo);

        if(buscaProduto != null){
            console.log(colors.fg.green,"Produto encontrado: ", colors.reset);
            buscaProduto.visualizar();
        }else{
            console.log(colors.fg.red,"Produto não encontrado", colors.reset);
        }
    }
    listarTodos(): void {
        for(let produto of this.listaProdutos){
                produto.visualizar();
            }
    }
    cadastrar(produto: Produto): void {
            this.listaProdutos.push(produto);
            console.log(colors.fg.green,"Produto cadastrado com sucesso!" ,colors.reset); 

    }
    atualizar(produto: Produto): void {
            let buscaProduto = this.buscarNoArray(produto.codigo);
            if(buscaProduto != null){
                this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
                console.log(colors.fg.green,"Produto atualizado com sucesso!", colors);
            }else{
                console.log(colors.fg.red,"Produto não encontrado!", colors.reset);
            }
     }
    deletar(codigo: number): void {
            let buscaProduto = this.buscarNoArray(codigo);
            if(buscaProduto != null){
                this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
                console.log(colors.fg.green,"Produto excluído com sucesso", colors.reset);
            }else{
                console.log(colors.fg.red,"Produto não encontrado", colors.reset);
            }   
        }

        public buscarNoArray(codigo: number): Produto | null{
            for(let produto of this.listaProdutos){
                if(produto.codigo === codigo){
                    return produto;
                }
            }
            return null;        

        }
 }