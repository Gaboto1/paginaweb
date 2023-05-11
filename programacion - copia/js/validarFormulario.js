const form = document.getElementById("register-form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");

// Función para validar que las contraseñas coincidan
function validatePassword() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity("Las contraseñas no coinciden");
    errorMessage.innerHTML = "Las contraseñas no coinciden";
  } else {
    confirmPasswordInput.setCustomValidity("");
    errorMessage.innerHTML = "";
  }
}

// Event listener para validar las contraseñas al escribir en el campo confirmar contraseña
confirmPasswordInput.addEventListener("input", validatePassword);

// Event listener para validar el formulario al enviarlo
form.addEventListener("submit", (event) => {
  // Si las contraseñas no coinciden, prevenimos el envío del formulario
  if (passwordInput.value !== confirmPasswordInput.value) {
    event.preventDefault();
    errorMessage.innerHTML = "Las contraseñas no coinciden";
  } else {
    errorMessage.innerHTML = "";
  }
});
