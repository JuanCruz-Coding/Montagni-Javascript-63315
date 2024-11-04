const productos = [
  { id: 1, nombre: "Manzanas", categoria: "Frutas", stock: 50, precio: 300 },
  { id: 2, nombre: "Pan Integral", categoria: "Panadería", stock: 30, precio: 500 },
  { id: 3, nombre: "Leche", categoria: "Lácteos", stock: 20, precio: 1200 },
  { id: 4, nombre: "Huevos", categoria: "Huevos y derivados", stock: 40, precio: 1600 },
  { id: 5, nombre: "Arroz", categoria: "Cereales", stock: 100, precio: 800 }
];

let carrito = [];

function mostrarListaPrecios() {
  let lista = "Lista de Precios:\n";
  productos.forEach(producto => {
      lista += `${producto.nombre} - $${producto.precio}\n`;
  });
  alert(lista);
}

function agregarProductoCarrito() {
  const productoId = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
  const producto = productos.find(p => p.id === productoId);
  
  if (producto) {
      const cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto.nombre} que desea agregar:`));
      if (cantidad > 0 && cantidad <= producto.stock) {
          carrito.push({ ...producto, cantidad });
          alert(`${producto.nombre} agregado al carrito con cantidad: ${cantidad}`);
      } else {
          alert(`Cantidad no válida. Stock disponible: ${producto.stock}`);
      }
  } else {
      alert("Producto no encontrado.");
  }
}

function eliminarProductoCarrito() {
  const productoId = parseInt(prompt("Ingrese el ID del producto que desea eliminar del carrito:"));
  const index = carrito.findIndex(p => p.id === productoId);

  if (index > -1) {
      carrito.splice(index, 1);
      alert("Producto eliminado del carrito.");
  } else {
      alert("Producto no encontrado en el carrito.");
  }
}

function verCarrito() {
  if (carrito.length === 0) {
      alert("El carrito está vacío.");
      return;
  }

  let contenidoCarrito = "Carrito:\n";
  let total = 0;
  carrito.forEach(item => {
      contenidoCarrito += `${item.nombre} - $${item.precio} x ${item.cantidad} = $${(item.precio * item.cantidad).toFixed(2)}\n`;
      total += item.precio * item.cantidad;
  });
  contenidoCarrito += `\nTotal: $${total.toFixed(2)}`;
  alert(contenidoCarrito);
}

function finalizarCompra() {
  if (carrito.length === 0) {
      alert("El carrito está vacío. Agregue productos para finalizar la compra.");
      return;
  }

  let total = 0;
  carrito.forEach(item => total += item.precio * item.cantidad);
  alert(`Gracias por su compra! El total es $${total.toFixed(2)}`);
  carrito = []; // Vaciar el carrito después de la compra
}

function menu() {
  let opcion = "";

  do {
      opcion = prompt(
          "Seleccione una opción:\n" +
          "1. Ver lista de precios\n" +
          "2. Agregar producto al carrito\n" +
          "3. Eliminar producto del carrito\n" +
          "4. Ver carrito\n" +
          "5. Finalizar compra\n" +
          "6. Salir"
      );

      switch (opcion) {
          case "1":
              mostrarListaPrecios();
              break;
          case "2":
              agregarProductoCarrito();
              break;
          case "3":
              eliminarProductoCarrito();
              break;
          case "4":
              verCarrito();
              break;
          case "5":
              finalizarCompra();
              break;
          case "6":
              alert("Gracias por usar nuestra tienda.");
              break;
          default:
              alert("Opción no válida. Por favor, intente de nuevo.");
      }
  } while (opcion !== "6");
}

menu();
