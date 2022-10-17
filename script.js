document.getElementById("finalizar").disabled = true;

let pratoEscolhido;

function selecionarPrato(botao){

    const botaoPrato = document.querySelector(".pratos .selecionado1");

        if(botaoPrato !== null){
        botaoPrato.classList.remove("selecionado1");

    }
    botao.classList.toggle("selecionado1");

    pratoEscolhido = botao.innerHTML;

        botaoFinalizar();

}


let bebidaEscolhida;

function selecionarBebida(botao){
    
    const botaoBebida = document.querySelector(".bebida .selecionado2");

        if(botaoBebida !== null){
        botaoBebida.classList.remove("selecionado2");
    }
    botao.classList.toggle("selecionado2");

    bebidaEscolhida = botao.innerHTML;


    botaoFinalizar();

}

let sobremesaEscolhida;

function selecionarSobremesa(botao){
    
    const botaoSobremesa = document.querySelector(".sobremesa .selecionado3");

        if(botaoSobremesa !== null){
        botaoSobremesa.classList.remove("selecionado3");
    }

    botao.classList.toggle("selecionado3");

    sobremesaEscolhida = botao.innerHTML;


    botaoFinalizar();

}
let preco1;
let preco2;
let preco3;
let precoPrato;
let precoBebida;
let precoSobremesa;
let precoPedido;
let nomeP;
let nomeB;
let nomeS;
function botaoFinalizar(){
    
    if(pratoEscolhido !== undefined){

        if(bebidaEscolhida !== undefined){

            if(sobremesaEscolhida !== undefined){

                const botaoPedir = document.querySelector(".botao-finalizar");
                botaoPedir.classList.add("finalizar");
                botaoPedir.innerHTML = ("Fechar pedido");
                document.getElementById("finalizar").disabled = false;
                preco1 = document.querySelector(".selecionado1 .preco");
                preco2 = document.querySelector(".selecionado2 .preco");
                preco3 = document.querySelector(".selecionado3 .preco");
                precoPrato = preco1.innerText.substring(2).replace(",",".");
                precoBebida = preco2.innerText.substring(2).replace(",",".");
                precoSobremesa = preco3.innerText.substring(2).replace(",",".");
                let valor1 = Number(precoPrato);
                let valor2 = Number(precoBebida);
                let valor3 = Number(precoSobremesa);
                precoPedido = valor1 + valor2 + valor3;
                let nome1 = document.querySelector(".selecionado1 .nomeI");
                let nome2 = document.querySelector(".selecionado2 .nomeI");
                let nome3 = document.querySelector(".selecionado3 .nomeI");
                nomeP = nome1.innerText;
                nomeB = nome2.innerText;
                nomeS = nome3.innerText;
            }
        }
    }
}

function abrirwp(){
    let pedido = "Olá, gostaria de fazer o pedido:\n- Prato: " + nomeP + "\n- Bebida: " + nomeB + "\n- Sobremesa: " + nomeS + "\nTotal: R$ " + precoPedido.toFixed(2);
    const link = encodeURIComponent(pedido);
    const abrir = window.open("https://wa.me/5565992517154?text=" + link);
}
