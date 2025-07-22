// Obtener elementos
const btnCarta = document.getElementById('btnCarta');
const cartaOculta = document.getElementById('cartaOculta');
const cerrarCarta = document.getElementById('cerrarCarta');

// Mostrar la carta al hacer clic en el botón
btnCarta.addEventListener('click', () => {
  cartaOculta.style.display = 'flex'; // Mostrar con flex para centrar contenido
});

// Ocultar la carta al hacer clic en el botón de cerrar
cerrarCarta.addEventListener('click', () => {
  cartaOculta.style.display = 'none';
});

// También puedes cerrar la carta haciendo clic fuera del contenido
cartaOculta.addEventListener('click', (e) => {
  if (e.target === cartaOculta) {
    cartaOculta.style.display = 'none';
  }
});
