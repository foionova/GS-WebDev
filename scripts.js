//slide show
let index = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    slides[index].style.display = 'none';
    index = (index + 1) % slides.length;
    slides[index].style.display = 'block';
}, 3000);