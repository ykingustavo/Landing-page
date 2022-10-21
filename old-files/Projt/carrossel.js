var carrossel = document.getElementsByClassName("carrossel")[0]
var idCarrossel = 0;

document.getElementsByClassName("img-carrossel")[0].classList.remove("esconder");
document.getElementsByClassName("indicador-carrossel")[0].classList.add("fa-solid");

function cliqueEsquerdo() {
    document.getElementsByClassName("img-carrossel")[idCarrossel].classList.add('esconder');
    document.getElementsByClassName("indicador-carrossel")[idCarrossel].classList.remove("fa-solid");

    if(idCarrossel == 0) {
        idCarrossel = 3;
    } else {
        idCarrossel -= 1;
    }

    document.getElementsByClassName("img-carrossel")[idCarrossel].classList.remove('esconder');
    document.getElementsByClassName("indicador-carrossel")[idCarrossel].classList.add("fa-solid");
}

function cliqueDireito() {
    document.getElementsByClassName("img-carrossel")[idCarrossel].classList.add('esconder');
    document.getElementsByClassName("indicador-carrossel")[idCarrossel].classList.remove("fa-solid");

    if(idCarrossel == 3) {
        idCarrossel = 0;
    } else {
        idCarrossel += 1;
    }

    document.getElementsByClassName("img-carrossel")[idCarrossel].classList.remove('esconder');
    document.getElementsByClassName("indicador-carrossel")[idCarrossel].classList.add("fa-solid");
}