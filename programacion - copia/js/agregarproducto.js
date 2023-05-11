// Obtener los valores del formulario
const nombre = document.querySelector('#nombre-producto').value;
const precio = document.querySelector('#precio-producto').value;
const descripcion = document.querySelector('#descripcion-producto').value;
const imagen = document.querySelector('#imagen-producto').files[0];

// Crear un objeto FormData para enviar los datos al servidor
const formData = new FormData();
formData.append('nombre', nombre);
formData.append('precio', precio);
formData.append('descripcion', descripcion);
formData.append('imagen', imagen);

// Enviar una solicitud POST al servidor con los datos del formulario
axios.post('productos.json', formData)
  .then(function(response) {
    // Si la solicitud es exitosa, redirigir a la página de index2.html
    window.location.href = 'index2.html';
  })
  .catch(function(error) {
    // Si la solicitud falla, mostrar un mensaje de error
    console.error(error);
    alert('Hubo un error al agregar el producto. Por favor intenta de nuevo.');
  });
