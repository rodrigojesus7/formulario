const botaoEnviar = document.querySelector('.botao-enviar');
const itensInput = document.querySelectorAll('.input');
const textoAlertaCampoObrigatorio = document.querySelectorAll('.invalido-campo-obrigatorio')





// botaoEnviar.addEventListener('click' validar(){

botaoEnviar.addEventListener('onclick', function (item) {


    itensInput.forEach(function (item) {

        if (itensInput.value === "") {
            invalido(item);
        } else {
            valido(item);
        }


    })






}


)










function valido(item) {
    itensInput[item].classList.remove('input-invalido');
    itensInput[item].classList.add('input-valido');

    textoAlertaCampoObrigatorio[item].classList.add('ocultar');
}



function invalido() {

    itensInput[item].classList.add('input-invalido');
    itensInput[item].classList.remove('input-valido');

    textoAlertaCampoObrigatorio[item].classList.remove('ocultar');

}