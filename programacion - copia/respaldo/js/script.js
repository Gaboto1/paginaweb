document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // previene la recarga de la página
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if (username === "gaboto" && password === "123") {
        window.location.href = "index2.html";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  });
  