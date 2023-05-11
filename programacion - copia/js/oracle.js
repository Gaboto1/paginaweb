window.addEventListener("load", () => {
    fetch('https://g9cd7530b8a8613-ecommerce.adb.sa-santiago-1.oraclecloudapps.com/ords/inacap_ecommerce/productos_rojas/')
      .then((resultado) => {
        return resultado.json();
      })
      .then((datos) => {
        document.getElementById("productos").innerHTML = ''
        for (let i = 0; i < datos.items.length; i++) {
          console.log(datos.items[i]);
          document.getElementById("productos").innerHTML += `
          <div class="col">
          <div class="card" style="width: 18rem; background-color: #f8f9fa; border: none; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);">
            <img src="img/${datos.items[i].imagen}" class="card-img-top" alt="..." style="height: 10rem; object-fit: contain;">
            <div class="card-body">
              <h5 class="card-title" style="font-family: 'Arial Black', sans-serif; font-size: 1.5rem; color: #343a40; margin-bottom: 1rem;">${datos.items[i].nombre}</h5>
              <p class="card-text" style="font-family: 'Roboto', sans-serif; font-size: 1.2rem; color: #6c757d; margin-bottom: 1rem;">Precio: ${datos.items[i].precio}</p>
              <div style="display: flex; justify-content: space-between;">
                <a href="#" class="btn btn-primary" style="font-family: 'Roboto', sans-serif; font-size: 1.2rem;">Comprar</a>
               
              </div>
            </div>
          </div>
        </div>
        
          `;
        }
      })
      .catch(() => {})
  });
  
async function buscar() {
    await 123;

}
