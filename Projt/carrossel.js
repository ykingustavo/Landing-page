var carrossel = document.getElementsByClassName("carrossel")[0]
var idCarrossel = 0;

document.getElementsByClassName("img-carrossel")[0].classList.remove("esconder");

function cliqueEsquerdo() {
    document.getElementsByClassName("img-carrossel")[idCarrossel].classList.add('esconder');

    if(idCarrossel == 0) {
        idCarrossel = 3;
    } else {
        idCarrossel -= 1;
    }

    document.getElementsByClassName("img-carrossel")[idCarrossel].classList.remove('esconder');

    clearInterval(temporizadorCarrossel);
    temporizadorCarrossel = setInterval(cliqueDireito, 10000);
}

function cliqueDireito() {
    document.getElementsByClassName("img-carrossel")[idCarrossel].classList.add('esconder');

    if(idCarrossel == 3) {
        idCarrossel = 0;
    } else {
        idCarrossel += 1;
    }

    document.getElementsByClassName("img-carrossel")[idCarrossel].classList.remove('esconder');

    clearInterval(temporizadorCarrossel);
    temporizadorCarrossel = setInterval(cliqueDireito, 10000);
}

temporizadorCarrossel = setInterval(cliqueDireito, 10000);