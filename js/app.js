let jogosAlugados = 0;


function contarJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let jogoSelecionado = document.getElementById (`game-${id}`);
    let imagem = jogoSelecionado.querySelector ('.dashboard__item__img');
    let botao = jogoSelecionado.querySelector ('.dashboard__item__button');
    let nomeJogo = jogoSelecionado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = ('alugar');
        jogosAlugados--;
        }
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add ('dashboard__item__button--return');
        botao.textContent = ('devolver');
        jogosAlugados++;
    }
    contarJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogosAlugados();
});