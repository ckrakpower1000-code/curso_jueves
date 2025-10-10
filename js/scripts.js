
document.getElementById('saludoBtn').addEventListener('click', function () {
    alert('¡Hola, bienvenido al sitio de Dan Alexander!');
});


document.getElementById('cambiarFondoBtn').addEventListener('click', function () {
    const colores = ['#f4f4f4', '#dcedc8', '#ffe082', '#b3e5fc', '#ffccbc', '#c5cae9'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});
