const botaoEnviar = document.querySelector('.botao-enviar');
const itensInput = document.querySelectorAll('.input');
const textoAlertaCampoObrigatorio = document.querySelectorAll('.invalido-campo-obrigatorio')

let itemAtual = 0;


botaoEnviar.addEventListener('click', function () {

    itensInput.forEach(item => {

        checar()


    });


});



function valido() {
    itensInput[itemAtual].classList.remove('input-invalido');
    itensInput[itemAtual].classList.add('input-valido');

    textoAlertaCampoObrigatorio[itemAtual].classList.add('ocultar');
}



function invalido() {

    itensInput[itemAtual].classList.add('input-invalido');
    itensInput[itemAtual].classList.remove('input-valido');

    textoAlertaCampoObrigatorio[itemAtual].classList.remove('ocultar');

}


function checar() {


    if (itensInput[itemAtual].value != "") {
        valido()
    } else {
        invalido()
    }

    itemAtual++;
}