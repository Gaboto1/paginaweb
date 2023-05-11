

let productos;

  function cargarProductos() {
    fetch("productos.json")
      .then(respuesta => respuesta.json())
      .then(datos => {
        productos = datos.Productos;
      });
  }

  function buscarProductos(event) {
    event.preventDefault();
    const input = document.getElementById("search-input").value.toLowerCase();
    const resultados = document.getElementById("search-results");

    // Limpiar resultados anteriores
    resultados.innerHTML = "";

    // Buscar productos que contengan el texto del input
    const resultadosBusqueda = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(input) ||
      producto.descripcion.toLowerCase().includes(input)
    );

    // Mostrar resultados de búsqueda
    resultadosBusqueda.forEach(producto => {
      const resultado = document.createElement("li");
      resultado.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <a href="${producto.enlace}" target="_blank">${producto.precio}</a>
      `;
      resultados.appendChild(resultado);

      // Agregar el atributo target="_blank" al enlace del producto
      resultado.querySelector("a").setAttribute("target", "_blank");
    });
  }
  

  cargarProductos();
