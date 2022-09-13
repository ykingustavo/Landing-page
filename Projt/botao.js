const botaoCadastro = document.getElementById("botaoCadastro")
const botaoLoja = document.getElementById("botaoLoja")

function abrirCadastro() {
    window.open("https://razor.com.br/minha-conta/")
}

//botaoCadastro.onclick = function(){     //botão login/cadastro
//    window.open("https://razor.com.br/minha-conta/")
//}

function abrirProdutos() {   //botão loja geral
    window.open("https://razor.com.br/produtos/%22");
}

function solicitarAjuda() {
    window.open("https://razor.com.br/suporte/")
}

//botaoLoja.onclick = function(){   //botão loja geral
//    window.open("https://razor.com.br/produtos/")
//}

// gustavo
var btnQuemSomosNos = document.getElementsByClassName('btn-exibir')[0];
var textoEscondido = document.getElementsByClassName('texto-escondido')[0];
var identificador = 0;

btnQuemSomosNos.addEventListener('click', function() {
    if(identificador == 0) {
        btnQuemSomosNos.classList.remove('fa-chevron-right');
        btnQuemSomosNos.classList.add('fa-chevron-down');
        identificador = 1;

        textoEscondido.style.fontSize = "24px";
    } else {
        btnQuemSomosNos.classList.remove('fa-chevron-down');
        btnQuemSomosNos.classList.add('fa-chevron-right');
        identificador = 0;

        textoEscondido.style.fontSize = "0px";
    }


});

//

botaoProdutoDestaque.onclick = function(){
    window.open("https://razor.com.br/produto/prodigy-xp-960g35/")
}

botaoOrcamentos.onclick = function(){
    window.open("https://workstation.razor.com.br")
}

botaoLINThomas.onclick = function(){
    window.open("https://www.linkedin.com/in/thomasknack/")
}

botaoLINGustavo.onclick = function(){
    window.open("https://www.linkedin.com/in/gustavo-bonemann-100317238/")
}

botaoLINGesiane.onclick = function(){
    window.open("https://www.linkedin.com/in/gesiane-vingat-amorim-619534123/")
}

botaoLINWesley.onclick = function(){
    window.open("https://www.linkedin.com/in/wesley-henrique-silva-da-silva-71bb5224b/")
}

botaoLINLeonardo.onclick = function(){
    window.open("https://www.linkedin.com/in/leonardo-renoldi-7a5998120/")
}



//botao para https://razor.com.br/minha-conta/
//botao para https://razor.com.br/produtos/
//lista dup. encadeada ou carrossel para seção "escolha sua máquina"
//botao para "quem somos nós"
//list dup/carrossel para rodapé(participantes)