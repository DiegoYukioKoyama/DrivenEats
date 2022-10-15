function selecionar(botao){
    
    const botaoselecionado = document.querySelector(".pratos .selecionado");
    if(botaoselecionado !== null){
        botaoselecionado.classList.remove("selecionado");
    }
    botao.classList.toggle("selecionado");
}

