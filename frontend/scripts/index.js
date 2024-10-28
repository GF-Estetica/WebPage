const images = [
    './frontend/imagenes/fondo1.jpg',
    './frontend/imagenes/fondo2.jpg',
    './frontend/imagenes/fondo3.jpg',
    './frontend/imagenes/fondo4.jpg'
];

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

let currentImageIndex = 0;
const backgroundDiv = document.createElement('div');
backgroundDiv.classList.add('background');
document.body.appendChild(backgroundDiv);

function changeBackground() {
    backgroundDiv.style.opacity = '0'; // Desvanecer a 0

    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Cambiar índice
        backgroundDiv.style.backgroundImage = `url(${images[currentImageIndex]})`;
        backgroundDiv.style.opacity = '0.23'; // Restablecer opacidad
    }, 1000); // Duración del desvanecimiento

    setTimeout(changeBackground, 5000); // Cambiar imagen cada 5 segundos
}

// Establecer la primera imagen inicialmente
backgroundDiv.style.backgroundImage = `url(${images[currentImageIndex]})`;
changeBackground();



menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show'); // Muestra u oculta el menú
});

//
