import { Produto } from "../model/Produto";


export interface ProdutoRepository{

    // CRUD - Create, Read, Update, Delete
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    buscarPorCodigo(codigo: number): void;
    atualizar(produto: Produto): void;
    deletar(codigo: number): void;
}

