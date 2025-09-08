import { Produto } from './src/model/Produto';
import { ProdutoController } from './src/controller/ProdutoController';
import { colors } from './src/util/Colors';
import { ProdutoRepository } from './src/repository/ProdutoRepository';
import leia = require('readline-sync');

export function main(){
    
    let produtos: ProdutoController = new ProdutoController();
    let opcao: number;
    let codigo: number;
    let nomeProduto: string;
    let quantidade: number;
    let valor: number;

    while(true){
        console.log("*****************************************************");
        console.log("          1- Cadastrar produto                       ");
        console.log("          2- Listar produtos                         ");
        console.log("          3- Buscar produto                          ");
        console.log("          4- Atualizar produto                       ");
        console.log("          5- Apagar produto                          ");
        console.log("          6- Sair                                    ");
        console.log("*****************************************************");


        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt();

        switch(opcao){
            case 1:
                console.log("Cadastrar produto");

                console.log("Digite o código do produto: ");
                 codigo = leia.questionInt();

                console.log("Digite o nome do produto: ");
                 nomeProduto = leia.question();

                console.log("Digite a quantidade do produto: ");
                 quantidade = leia.questionInt();

                console.log("Digite o valor do produto: ");
                 valor = leia.questionFloat();

                 produtos.cadastrar(new Produto(codigo, nomeProduto, quantidade, valor));

                keyPress()
                break;
            case 2:
                console.log("Listar produtos:");
                produtos.listarTodos();
                keyPress()
                break;
            case 3:
                console.log("Buscar produto:");  
                    console.log("Digite o código do produto: ");
                    codigo = leia.questionInt();
                    produtos.buscarPorCodigo(codigo);
                keyPress()
                break;
            case 4:
                console.log("Atualizar produto");
                
                    console.log("Digite o código do produto: ");
                    codigo = leia.questionInt();

                    let buscaProduto = produtos.buscarNoArray(codigo);

                    if(buscaProduto != null){
                    console.log("Digite o nome do produto: ");
                    nomeProduto = leia.question();

                    console.log("Digite a quantidade do produto: ");
                    quantidade = leia.questionInt();
                    
                    console.log("Digite o valor do produto: ");
                    valor = leia.questionFloat();

                    produtos.atualizar(new Produto(codigo, nomeProduto, quantidade, valor));
                    break;
                    }else{
                        console.log("Produto não encontrado");
                    }
                keyPress()
                break;
            case 5:
                console.log("Apagar produto");
                    console.log("Digite o código do produto: ");
                    codigo = leia.questionInt();
                    produtos.deletar(codigo);
                    
                keyPress()
                break;
            case 6:
                console.log("Saindo...");

                sobre();
                process.exit(0);
                
            default:
                console.log(colors.fg.yellowstrong,'\nOpção inválida!\n', colors.reset);
                 keyPress()
            break;


        }

    }
}
function keyPress(): void {
    
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}
export function sobre(): void{
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Karine Santos - karinecrislopes08@gmail.com");
    console.log("github.com/k4rin");
    console.log("*****************************************************");
}
main();