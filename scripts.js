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
    { pergunta: "O que é uma enchente?", resposta: "A", opcoes: ["A. Acúmulo excessivo de água", "B. Falta de água", "C. Erupção vulcânica"] },
    // Adicione mais 9 perguntas
]

const quizContainer = document.getElementById('quiz-container')
perguntas.forEach((q, i) => {
    const div = document.createElement('div')
    div.innerHTML = `<p>${q.pergunta}</p>${q.opcoes.map((op, j) => `
        <label><input type="radio" name="q${i}" value="${op[0]}"> ${op}</label><br>`).join('')}`
    quizContainer.appendChild(div)
});

function mostrarResultado() {
    let acertos = 0
    perguntas.forEach((q, i) => {
        const resposta = document.querySelector(`input[name="q${i}"]:checked`)
        if (resposta && resposta.value === q.resposta) acertos++
    })
    document.getElementById('resultado').innerText = `Você acertou ${acertos} de ${perguntas.length}`
}

//personalizacao com icone
function mudarFundo(cor) {
    document.body.style.backgroundColor = cor;
}


