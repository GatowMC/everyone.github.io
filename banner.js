button.innerHTML += `
    <span style="display: flex; align-items: center;">
        <img src="https://img.icons8.com/?size=160&id=AEW11pimzTce&format=png" 
             alt="Descripción de la imagen" 
             style="width: 1em; height: 1em; margin-right: 0.5em;">
        unban
    </span>`;



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


/// DIÁLOGO 


document.addEventListener("DOMContentLoaded", function () {
    // Crear el botón
    const button = document.createElement("button");
    button.textContent = "Abrir Diálogo";
    
    // Crear el diálogo
    const dialog = document.createElement("div");
    dialog.style.display = "none";
    dialog.style.position = "fixed";
    dialog.style.left = "50%";
    dialog.style.top = "50%";
    dialog.style.transform = "translate(-50%, -50%)";
    dialog.style.border = "1px solid #ccc";
    dialog.style.background = "#fff";
    dialog.style.padding = "20px";
    
    // Contenido del diálogo
    const message = document.createElement("p");
    message.textContent = "¿Qué deseas hacer?";
    
    // Botones del diálogo
    const yesButton = document.createElement("button");
    yesButton.textContent = "Sí";
    yesButton.onclick = () => {
        alert("Has elegido Sí");
        closeDialog();
    };
    
    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.onclick = () => {
        alert("Has elegido No");
        closeDialog();
    };
    
    // Función para cerrar el diálogo
    function closeDialog() {
        dialog.style.display = "none";
        overlay.style.display = "none";
    }
    
    // Crear overlay
    const overlay = document.createElement("div");
    overlay.style.display = "none";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0, 0, 0, 0.5)";
    overlay.onclick = closeDialog;
    
    // Append elements
    dialog.appendChild(message);
    dialog.appendChild(yesButton);
    dialog.appendChild(noButton);
    document.body.appendChild(button);
    document.body.appendChild(dialog);
    document.body.appendChild(overlay);
    
    // Evento para abrir el diálogo
    button.addEventListener("click", function () {
        dialog.style.display = "block";
        overlay.style.display = "block";
    });
});
