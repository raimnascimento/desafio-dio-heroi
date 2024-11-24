let nomeHeroi = prompt('DIgite o nome de qualquer super-herói');
let nivelXp;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTexto('h1', 'Classificador de Nível de Herói');
    exibirTexto('p', 'Escolha um número entre 0 e 20.000');
}

mensagemInicial();

function verificarNivel() {
    nivelXp = document.querySelector('input').value;

    if (nivelXp === '') {
        exibirTexto('p', 'Você deve digitar um número acima de 0');
    } else if (nivelXp <= 1000) {
        exibirTexto('p', `O herói ${nomeHeroi} está no nível de Ferro`);
    } else if (nivelXp <= 2000) {
        exibirTexto('p', `O herói ${nomeHeroi} está no nível de Bronze`);
    } else if (nivelXp <= 5000) {
        exibirTexto('p', `O herói ${nomeHeroi} está no nível de Prata`);
    } else if (nivelXp <= 7000) {
        exibirTexto('p', `O herói ${nomeHeroi} está no nível de Ouro`);
    } else if (nivelXp <= 8000) {
        exibirTexto('p', `O herói ${nomeHeroi} está no nível de Platina`);
    } else if (nivelXp <= 9000) {
        exibirTexto('p', `O herói ${nomeHeroi} está no nível de Ascendente`);
    } else if (nivelXp <= 10000) {
        exibirTexto('p', `O herói ${nomeHeroi} está no nível de Imortal`);
    } else {
        exibirTexto('p', `O herói ${nomeHeroi} está no nível de Radiante`);
    }
}

function limparNivel() {
    nivelXp = document.querySelector('input');
    nivelXp.value = '';
    mensagemInicial();  
}

document.querySelector('input').addEventListener('input', () => {
    document.getElementById('limpar-nivel').removeAttribute('disabled');
});

// Adiciona um evento de clique ao botão limpar
document.getElementById('limpar-nivel').addEventListener('click', limparNivel);
