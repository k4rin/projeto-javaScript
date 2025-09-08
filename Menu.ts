import leia = require('readline-sync');

export function main(){

    let opcao: number;

    while(true){

        console.log("          1- Cadastrar produto");
        console.log("          2- Listar produtos");
        console.log("          3- Buscar produto");
        console.log("          4- Atualizar produto");
        console.log("          5- Apagar produto");
        console.log("          6- Sair");


        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt();

        switch(opcao){
            case 1:
                console.log("Cadastrar produto");

                keyPress()
                break;
            case 2:
                console.log("Listar produtos");
                keyPress()
                break;
            case 3:
                console.log("Buscar produto");  
                keyPress()
                break;
            case 4:
                console.log("Atualizar produto");
                keyPress()
                break;
            case 5:
                console.log("Apagar produto");
                keyPress()
                break;
            case 6:
                console.log("Sair");
                process.exit(0);


        }

    }
}
function keyPress(): void {
    
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}
main();