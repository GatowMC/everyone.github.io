// Crear el elemento del banner
const banner = document.createElement('div');

// Establecer propiedades del banner
banner.innerText = 'Nombre de tu Marca'; // Cambia el nombre aquí
banner.style.position = 'fixed';
banner.style.top = '0';
banner.style.left = '0';
banner.style.right = '0';
banner.style.backgroundColor = '#FF5733'; // Color de fondo
banner.style.color = 'white'; // Color del texto
banner.style.textAlign = 'center';
banner.style.padding = '10px 0';
banner.style.zIndex = '1000'; // Asegura que esté en la parte superior
banner.style.fontFamily = 'Arial, sans-serif'; // Fuente del texto

// Añadir el banner al cuerpo del documento
document.body.appendChild(banner);
