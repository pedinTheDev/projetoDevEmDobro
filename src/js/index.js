// olá, isso é so pra lembrar que CARLOS É GAY.
/*
objetivo 1 - quando mum usuario clicar no botao 'mostrar mais ' deve aparecer os outros projetos escondidos pelo html.

        passo 1 - pegar o botao mostrar mais no JS pra poder verificar quando o usuario clicar nele

        passo 2 - identificar o clique no botão 

        passo 3 - adicionar a classe "ativo" nos projetos escondidos 

objetivo 2 - esconder o botão de mostrar mais 
        passo 1 - pegar o botão e esconder ele
*/

// objetivo 1 - passo 1:

const botaomostrarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaomostrarprojetos.addEventListener('click', () => {
    // passo 3:
    mostrarMaisProjetos();

    // objetivo 2 - passo 1:
    esconderBotao();
});
function esconderBotao() {
    botaomostrarprojetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

