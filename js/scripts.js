
document.getElementById('saludoBtn').addEventListener('click', function () {
    alert('¡Hola, bienvenido a mi pagina mayate!');
});


document.getElementById('cambiarFondoBtn').addEventListener('click', function () {
    const colores = ['#4c2f7eff', '#415a25ff', '#db450eff', '#10445cff', '#b70eafff', '#066955ff'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});
