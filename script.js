document.getElementById('btnAmor').addEventListener('click', () => {
  // Cambiar fondo
  document.body.style.backgroundColor = 'black';

  // Mostrar mensaje
  const mensaje = document.getElementById('mensaje');
  mensaje.textContent = 'Feliz primer mes mi amor 💘 Te amoo mucho 💖';
  mensaje.classList.remove('oculto');
  mensaje.classList.add('mostrar');

  // Mostrar botón TE AMO
  const btnTeAmo = document.getElementById('btnTeAmo');
  btnTeAmo.classList.remove('oculto');
  btnTeAmo.classList.add('mostrar');

  // Animación de rosas 🌹
  const rosasContainer = document.getElementById('rosas');
  const imagenes = [
    'https://img.icons8.com/emoji/48/000000/rose-emoji.png',
    'https://cdn-icons-png.flaticon.com/512/8236/8236748.png',
    'https://img.icons8.com/emoji/48/000000/tulip-emoji.png'
  ];

  for (let i = 0; i < 30; i++) {
    const rosa = document.createElement('div');
    rosa.classList.add('rosa');

    const imgIndex = Math.floor(Math.random() * imagenes.length);
    rosa.style.backgroundImage = `url('${imagenes[imgIndex]}')`;

    rosa.style.left = `${Math.random() * 100}%`;
    rosa.style.animationDelay = `${Math.random() * 5}s`;
    rosa.style.animationDuration = `${3 + Math.random() * 5}s`;

    rosasContainer.appendChild(rosa);
  }

  // Ocultar botón original
  document.getElementById('btnAmor').style.display = 'none';
});

// Botón "TE AMO" redirige a otra página
document.getElementById('btnTeAmo').addEventListener('click', () => {
  window.location.href = 'te-amo.html'; // Puedes personalizar esta ruta
});
