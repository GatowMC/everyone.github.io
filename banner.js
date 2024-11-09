const banner = document.createElement('div');
banner.classList.add('mi-banner');
banner.style.width = '100%';
banner.style.height = '50px';
banner.style.backgroundColor = 'rgb(255, 255, 255)';

const texto = document.createElement('p');
texto.textContent = 'Este es el texto de mi banner';

banner.appendChild(texto);
document.body.appendChild(banner);