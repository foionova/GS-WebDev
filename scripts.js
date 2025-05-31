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
