import { Produto } from "../model/Produto";


export interface ProdutoRepository{

    listartodas(): void;
    cadastrar(produto: Produto): void;
    buscarPorCodigo(codigo: number): void;
    atualizar(produto: Produto): void;
    deletar(codigo: number): void;
}

