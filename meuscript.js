const perguntas = [
    { pergunta: 'Paris é a capital da França?', resposta: 'Certo', motivoErrado: 'Paris é a capital da França.' },
    { pergunta: 'Miguel de Cervantes escreveu "Dom Quixote"?', resposta: 'Certo', motivoErrado: 'Miguel de Cervantes é o autor de "Dom Quixote".' },
    { pergunta: 'O Sol é uma estrela?', resposta: 'Certo', motivoErrado: 'O Sol é uma estrela.' },
    { pergunta: 'A água ferve a 100 graus Celsius?', resposta: 'Certo', motivoErrado: 'A água ferve a 100 graus Celsius.' },
    { pergunta: 'O Brasil faz fronteira com a Argentina?', resposta: 'Certo', motivoErrado: 'O Brasil faz uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuufronteira com a Argentina.' },
    { pergunta: 'A Terra é plana?', resposta: 'Errado', motivoErrado: 'A Terra é um objeto esférico.' },
    { pergunta: 'O açúcar é salgado?', resposta: 'Errado', motivoErrado: 'O açúcar é doce.' },
    { pergunta: 'A Lua é maior do que a Terra?', resposta: 'Errado', motivoErrado: 'A Lua é menor do que a Terra.' },
    { pergunta: 'O zero é um número par?', resposta: 'Certo', motivoErrado: 'O zero é um número par.' },
    { pergunta: 'A água ferve a 50 graus Celsius?', resposta: 'Errado', motivoErrado: 'A água ferve a 100 graus Celsius.' },
    // Adicione mais perguntas aqui
];

const perguntaElement = document.getElementById('pergunta');
const respostaUsuarioElement = document.getElementById('respostaUsuario');
const botaoCerto = document.getElementById('botaoCerto');
const botaoErrado = document.getElementById('botaoErrado');
const botaoProximo = document.getElementById('botaoProximo');

let perguntaAtual = 0;
let acertos = 0;
let erros = 0;
let respondido = false; // Variável para controlar se a pergunta foi respondida

// Função para embaralhar as perguntas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Embaralhar as perguntas
shuffleArray(perguntas);

function mostrarPergunta() {
    if (perguntaAtual < 10) {
        perguntaElement.textContent = perguntas[perguntaAtual].pergunta;
        respostaUsuarioElement.textContent = '';
        respondido = false; // Permite que a próxima pergunta seja respondida
    } else {
        perguntaElement.textContent = 'Quiz concluído!';
        respostaUsuarioElement.textContent = `Acertos: ${acertos}, Erros: ${erros}`;
        botaoProximo.style.display = 'none'; // Oculta o botão "Próximo" no final do quiz
    }
}

function mostrarResposta(resposta) {
    if (!respondido) {
        const perguntaCorreta = perguntas[perguntaAtual];

        if (resposta === perguntaCorreta.resposta) {
            respostaUsuarioElement.textContent = 'Certo!';
            acertos++;
        } else {
            respostaUsuarioElement.textContent = 'Errado. Motivo: ' + perguntaCorreta.motivoErrado;
            erros++;
        }

        respondido = true; // A pergunta foi respondida
    }
}

botaoCerto.addEventListener('click', function () {
    mostrarResposta('Certo');
});

botaoErrado.addEventListener('click', function () {
    mostrarResposta('Errado');
});

botaoProximo.addEventListener('click', function () {
    if (perguntaAtual < 10) {
        perguntaAtual++; // Avança para a próxima pergunta quando o botão "Próximo" é clicado
        mostrarPergunta();
    } else {
        perguntaElement.textContent = 'Quiz concluído!';
        respostaUsuarioElement.textContent = `Acertos: ${acertos}, Erros: ${erros}`;
        botaoProximo.style.display = 'none'; // Oculta o botão "Próximo" no final do quiz
    }
});

mostrarPergunta();