document.getElementById("contactForm").addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");
    const mensaje = document.getElementById("mensaje");

    let valid = true;

    // Validar nombre
    if (nombre.value.trim().length < 2) {
        alert("El nombre debe tener al menos 2 caracteres.");
        valid = false;
    }

    // Validar apellido
    if (apellido.value.trim().length < 2) {
        alert("El apellido debe tener al menos 2 caracteres.");
        valid = false;
    }

    // Validar correo
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(correo.value)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        valid = false;
    }

    // Validar teléfono
    const phoneRegex = /^[0-9]{10}$/;
    if (telefono.value && !phoneRegex.test(telefono.value)) {
        alert("El teléfono debe tener 10 dígitos.");
        valid = false;
    }

    // Validar mensaje
    if (mensaje.value.trim().length < 10) {
        alert("El mensaje debe tener al menos 10 caracteres.");
        valid = false;
    } else if (mensaje.value.trim().length > 400) {
        alert("El mensaje no puede exceder los 400 caracteres.");
        valid = false;
    }

    // Si alguna validación falla, prevenir el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    const correo = document.getElementById("correo");
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailRegex.test(correo.value)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        event.preventDefault(); // Evita el envío del formulario si el correo no es válido
    }
});