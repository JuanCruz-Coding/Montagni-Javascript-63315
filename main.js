function iniciarCompra() {
    const productos = [
        { id: 1, nombre: "Manzanas", categoria: "Frutas", stock: 50, precio: 300 },
        { id: 2, nombre: "Pan Integral", categoria: "Panadería", stock: 30, precio: 500 },
        { id: 3, nombre: "Leche", categoria: "Lácteos", stock: 20, precio: 1200 },
        { id: 5, nombre: "Arroz", categoria: "Cereales", stock: 100, precio: 800 },
        { id: 6, nombre: "Naranjas", categoria: "Frutas", stock: 60, precio: 350 },
        { id: 7, nombre: "Fresas", categoria: "Frutas", stock: 40, precio: 450 },
        { id: 8, nombre: "Plátanos", categoria: "Frutas", stock: 70, precio: 200 },
        { id: 9, nombre: "Pan de Centeno", categoria: "Panadería", stock: 25, precio: 600 },
        { id: 10, nombre: "Croissants", categoria: "Panadería", stock: 15, precio: 700 },
        { id: 11, nombre: "Baguette", categoria: "Panadería", stock: 20, precio: 400 },
        { id: 12, nombre: "Yogur", categoria: "Lácteos", stock: 30, precio: 1100 },
        { id: 13, nombre: "Queso", categoria: "Lácteos", stock: 25, precio: 1800 },
        { id: 14, nombre: "Mantequilla", categoria: "Lácteos", stock: 20, precio: 1500 },
        { id: 15, nombre: "Jugo de Naranja", categoria: "Bebidas", stock: 30, precio: 700 },
        { id: 16, nombre: "Agua Mineral", categoria: "Bebidas", stock: 50, precio: 200 },
        { id: 17, nombre: "Coca Cola", categoria: "Bebidas", stock: 40, precio: 250 },
        { id: 18, nombre: "Quinoa", categoria: "Cereales", stock: 50, precio: 900 },
        { id: 19, nombre: "Avena", categoria: "Cereales", stock: 80, precio: 600 },
        { id: 20, nombre: "Cebada", categoria: "Cereales", stock: 40, precio: 700 }
    ];

    let mensajeCategorias = obtenerCategorias(productos).join("\n");
    let carrito = [];
    let seleccionUsuario = pedirNumero("Ingrese:\n1 - Agregar al carrito.\n2 - Filtrar por categoria.\n3 - Finalizar compra.\n0 - Salir.");

    while (seleccionUsuario !== 0) {
        if (seleccionUsuario === 1) {
            let idProducto = pedirNumero("Seleccione el producto por su ID:\n" + listarProductos(productos));
            carrito = agregarAlCarrito(carrito, productos, idProducto);
        } else if (seleccionUsuario === 2) {
            let categoria = prompt("Ingrese una categoria para ver sus productos:\n" + mensajeCategorias).toLowerCase();
            let productosFiltrados = filtrarProductos(productos, "categoria", categoria);
            console.log(productosFiltrados);
            if (productosFiltrados.length > 0) {
                let idProducto = pedirNumero("Seleccione un producto:\n" + listarProductos(productosFiltrados));
                carrito = agregarAlCarrito(carrito, productosFiltrados, idProducto);
            } else {
                alert("No se encontraron productos en esta categoría.");
            }
        } else if (seleccionUsuario === 3) {
            let total = carrito.reduce((acumulador, producto) => acumulador + producto.subtotal, 0);
            alert("Total de su compra: $" + total + " - Gracias por elegirnos.");
        } else {
            alert("Opción no válida. Por favor, intente de nuevo.");
        }
        seleccionUsuario = pedirNumero("Ingrese:\n1 - Agregar al carrito\n2 - Filtrar por categoría\n3 - Finalizar compra\n0 - Salir.");
    }
}

iniciarCompra();

function pedirNumero(mensaje) {
    return Number(prompt(mensaje));
}

function listarProductos(lista) {
    return lista.map(el => el.id + " - " + el.nombre + " - $" + el.precio).join("\n");
}

function agregarAlCarrito(carrito, productos, idProducto) {
    let productoSeleccionado = productos.find(producto => producto.id === idProducto);
    if (!productoSeleccionado) {
        alert("Producto no encontrado.");
        return carrito;
    }

    let indiceProductoSeleccionado = carrito.findIndex(producto => producto.id === idProducto);
    if (indiceProductoSeleccionado !== -1) {
        carrito[indiceProductoSeleccionado].unidades++;
        carrito[indiceProductoSeleccionado].subtotal = carrito[indiceProductoSeleccionado].precio * carrito[indiceProductoSeleccionado].unidades;
    } else {
        carrito.push({
            id: productoSeleccionado.id,
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            unidades: 1,
            subtotal: productoSeleccionado.precio
        });
    }
    console.log(carrito);
    return carrito;
}

function obtenerCategorias(productos) {
    let categorias = [];
    productos.forEach(producto => {
        if (!categorias.includes(producto.categoria)) {
            categorias.push(producto.categoria);
        }
    });
    return categorias;
}

function filtrarProductos(productos, nombrePropiedad, valorPropiedad) {
    return productos.filter(producto => producto[nombrePropiedad].toLowerCase() === valorPropiedad);
}
