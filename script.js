// Selección de elementos del DOM
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".copiar");

// Reglas de encriptación
const encriptacionReglas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar texto
function encriptar(texto) {
    return texto.split('').map(char => encriptacionReglas[char] || char).join('');
}

// Función para desencriptar texto
function desencriptar(texto) {
    let desencriptado = texto;
    Object.entries(encriptacionReglas).forEach(([key, value]) => {
        desencriptado = desencriptado.split(value).join(key);
    });
    return desencriptado;
}

// Evento para el botón de encriptar
btnEncriptar.addEventListener('click', () => {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = '';  // Limpia el área de texto
});

// Evento para el botón de desencriptar
btnDesencriptar.addEventListener('click', () => {
    const textoDesencriptado = desencriptar(mensaje.value);
    mensaje.value = textoDesencriptado;
});

// Evento para el botón de copiar
btnCopiar.addEventListener('click', () => {
    mensaje.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
