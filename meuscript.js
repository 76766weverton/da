const perguntas = [
    { pergunta: 'A liberdade de manifestação do pensamento deve exercer-se, em regra, com a identificação do autor, mas essa exigência não veda a utilização de pseudônimos em obras artísticas, por exemplo.', resposta: 'Certo', motivoErrado: '' },
    { pergunta: 'O texto constitucional permite expressamente o anonimato em algumas circunstâncias, em decorrência da inviolabilidade do direito à intimidade.', resposta: 'Errado', motivoErrado: '' },
    { pergunta: 'Não obstante a previsão constitucional de inviolabilidade da casa do indivíduo, é permitido nela adentrar, a qualquer hora do dia ou da noite, para o cumprimento de mandado judicial que tenha decretado prisão preventiva.', resposta: 'Errado', motivoErrado: '' },
    { pergunta: 'Para a realização de reuniões pacíficas, sem armas, em locais abertos ao público, faz-se necessária apenas a simples autorização da autoridade competente, que será dada sempre que não houver frustração de reunião anteriormente convocada para o mesmo local.', resposta: 'Errado', motivoErrado: 'XVI - todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustrem outra reunião anteriormente convocada para o mesmo local, sendo apenas exigido prévio aviso à autoridade' },
    { pergunta: 'Segundo o texto constitucional, enquanto a prática do racismo e a ação de grupos armados contra o Estado democrático são crimes inafiançáveis e imprescritíveis, a tortura, o tráfico ilícito de entorpecentes, o terrorismo e os crimes hediondos, de forma geral, apesar de inafiançáveis, são passíveis de prescrição.', resposta: 'Certo', motivoErrado: '' },
    { pergunta: 'Uma pessoa vítima de notícia falsa profundamente nociva à sua honra deverá escolher, em eventual pleito judicial, entre o direito de resposta e a indenização pelo dano causado.', resposta: 'Errado', motivoErrado: 'A questão está ERRADA. A vítima de ato nocivo à honra não precisa escolher entre um ou outro, pois tem direito de exigir, cumulativamente, tanto o direito de resposta quanto a indenização por dano material, moral ou à imagem, nos termos do artigo 5º, V, da CF/88.' },
    { pergunta: 'É vedado ao poder público interferir na criação ou no funcionamento de uma associação formada por um grupo de amigos, independentemente de sua finalidade.', resposta: 'Errado', motivoErrado: 'A questão está ERRADA. O artigo 5º, XVII e XVIII, da CF/88, consagram como direito fundamental a liberdade de associação para fins lícitos, vedada a de caráter paramilitar. Sendo assim, observada a finalidade lícita, as associações podem ser criadas independente de autorização, sendo vedado ao poder público interferir em seu funcionamento. ' },
    { pergunta: 'Considere-se que um cidadão estrangeiro tenha sido condenado por crime de opinião em seu país de origem, mas, antes de cumprir a pena, tenha fugido para o Brasil, onde foi preso. Nessa situação hipotética, é vedada a extradição desse cidadão estrangeiro.', resposta: 'Certo', motivoErrado: '' },
    { pergunta: 'Na hipótese de governador de estado ter determinado o uso emergencial de propriedade particular por causa de iminente e grave perigo público, após a devolução da propriedade pelo ente público, o proprietário poderá pleitear indenização, desde que tenha havido dano à propriedade.', resposta: 'Certo', motivoErrado: '' },
    { pergunta: 'O direito à proteção dos dados pessoais é garantia fundamental, prevista expressamente na CF, dos brasileiros e dos estrangeiros residentes no país.', resposta: 'Certo', motivoErrado: '' },
    { pergunta: 'Todos têm direito a receber dos órgãos públicos informações de seu interesse particular, ou de interesse coletivo ou geral, que serão prestadas no prazo da lei, sob pena de responsabilidade, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado.', resposta: 'Certo', motivoErrado: '' },
    { pergunta: 'A CF assegura o direito à proteção dos dados pessoais, inclusive nos meios digitais.', resposta: 'Certo', motivoErrado: '' },
    
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