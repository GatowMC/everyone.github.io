// Crear los botones
const buttonW = document.createElement('button');
buttonW.innerText = 'W';
const buttonA = document.createElement('button');
buttonA.innerText = 'A';
const buttonS = document.createElement('button');
buttonS.innerText = 'S';
const buttonD = document.createElement('button');
buttonD.innerText = 'D';
const buttonSpace = document.createElement('button');
buttonSpace.innerText = 'Espacio';

// Estilos para los botones (opcional)
const buttonStyle = `
    width: 60px;
    height: 60px;
    margin: 5px;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
buttonW.style.cssText = buttonStyle;
buttonA.style.cssText = buttonStyle;
buttonS.style.cssText = buttonStyle;
buttonD.style.cssText = buttonStyle;
buttonSpace.style.cssText = buttonStyle;

// Agregar los botones al documento
document.body.appendChild(buttonW);
document.body.appendChild(buttonA);
document.body.appendChild(buttonS);
document.body.appendChild(buttonD);
document.body.appendChild(buttonSpace);

// Función para simular la pulsación de teclas
function simulateKeyPress(key) {
    const event = new KeyboardEvent('keydown', {key: key});
    document.dispatchEvent(event);
}

// Añadir eventos de clic a los botones
buttonW.addEventListener('click', function() {
    simulateKeyPress('w');
});
buttonA.addEventListener('click', function() {
    simulateKeyPress('a');
});
buttonS.addEventListener('click', function() {
    simulateKeyPress('s');
});
buttonD.addEventListener('click', function() {
    simulateKeyPress('d');
});
buttonSpace.addEventListener('click', function() {
    simulateKeyPress(' ');
});