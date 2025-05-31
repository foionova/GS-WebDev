//slide show
let index = 0
const slides = document.querySelectorAll('.slide')

setInterval(() => {
    slides[index].style.display = 'none'
    index = (index + 1) % slides.length
    slides[index].style.display = 'block'
}, 3000)

//validacao do formulario
document.getElementById('contatoForm').addEventListener('submit', function(e) {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos obrigatórios.')
        e.preventDefault()
    }
})

//nav ul 
function toggleMenu() {
    document.querySelector('nav ul').classList.toggle('show')
}

//QUIS
const perguntas = [
    {
        pergunta: "1. O que é uma enchente?",
        opcoes: ["Acúmulo excessivo de água", "Falta de água", "Terremoto"],
        resposta: 0
    },
    {
        pergunta: "2. Qual tecnologia ajuda a mapear áreas de risco?",
        opcoes: ["GIS", "HTML", "Bluetooth"],
        resposta: 0
    },
    {
        pergunta: "3. O que o BIM representa?",
        opcoes: ["Modelo de Informação da Construção", "Banco de Dados de Enchentes", "Satélite Espacial"],
        resposta: 0
    },
    {
        pergunta: "4. Como as pessoas recebem alertas na HydroSafe?",
        opcoes: ["Telepatia", "Sonoros e visuais via web", "Telegrama"],
        resposta: 1
    },
    {
        pergunta: "5. Quem é o público-alvo da solução?",
        opcoes: ["Turistas", "Pessoas em áreas de risco e órgãos públicos", "Jogadores online"],
        resposta: 1
    },
    {
        pergunta: "6. O que pode ajudar na evacuação segura?",
        opcoes: ["Mapas interativos e rotas de fuga", "Rádio AM", "Sinais de fumaça"],
        resposta: 0
    },
    {
        pergunta: "7. Enchentes causam impactos em:",
        opcoes: ["Serviços essenciais", "Plantas aquáticas", "Satélites espaciais"],
        resposta: 0
    },
    {
        pergunta: "8. O que facilita a colaboração cidadã?",
        opcoes: ["Redes sociais e aplicativos", "TV a cabo", "Telefone fixo"],
        resposta: 0
    },
    {
        pergunta: "9. A HydroSafe visa:",
        opcoes: ["Reduzir danos e salvar vidas", "Vender eletrônicos", "Oferecer turismo em rios"],
        resposta: 0
    },
    {
        pergunta: "10. Como o cidadão pode agir?",
        opcoes: ["Ignorar os alertas", "Se informar e agir rápido", "Esperar as águas baixarem sozinhas"],
        resposta: 1
    }
]

let perguntaAtual = 0;
let pontuacao = 0;

const quizContainer = document.getElementById('quiz-container')
const resultado = document.getElementById('resultado')

function carregarPergunta() {
    const q = perguntas[perguntaAtual];
    quizContainer.innerHTML = `
        <p>${q.pergunta}</p>
        <ul>
            ${q.opcoes.map((op, i) => `
                <li><button onclick="verificarResposta(${i})">${op}</button></li>
            `).join('')}
        </ul>
    `
}

function verificarResposta(selecionada) {
    if (selecionada === perguntas[perguntaAtual].resposta) {
        pontuacao++
    }
    perguntaAtual++
    if (perguntaAtual < perguntas.length) {
        carregarPergunta()
    } else {
        quizContainer.innerHTML = ""
        resultado.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`
    }
}

carregarPergunta()

//personalizacao com icone
function mudarFundo(cor) {
    document.body.style.backgroundColor = cor;
}


