// Script para HaxBall - Diseño más elegante

// Elementos de juego
const map = document.querySelector('#map');
const players = document.querySelectorAll('.player');

// Estilos de mapa
map.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?nature')"; // Foto de fondo elegante
map.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Tapa oscura para resaltar la imagen
map.style.backgroundSize = 'cover'; // Ajusta la imagen a la ventana

// Estilos de jugadores
players.forEach(player => {
    player.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)'; // Sombreado para resaltar jugadores
    player.style.borderRadius = '50%'; // Redondea la casilla del jugador
    player.style.padding = '5px'; // Agrega espacio alrededor del texto del jugador
});

// Agrega un borde al mapa para resaltar la pantalla de juego
map.style.border = '2px solid #fff';

// Ajusta la posición de los elementos para centrarlo todo
map.style.margin = 'auto';
map.style.textAlign = 'center';
map.style.verticalAlign = 'middle';
map.style.display = 'table';