const productos = [
        { id: 1, nombre: "Manzanas", categoria: "Frutas", stock: 50, precio: 300, imagen: "" },
        { id: 2, nombre: "Pan Integral", categoria: "Panadería", stock: 30, precio: 500, imagen: "" },
        { id: 3, nombre: "Leche", categoria: "Lácteos", stock: 20, precio: 1200, imagen: "./images/Leche.jpg" },
        { id: 5, nombre: "Arroz", categoria: "Cereales", stock: 100, precio: 800, imagen: "./images/arroz.jpg" },
        { id: 6, nombre: "Naranjas", categoria: "Frutas", stock: 60, precio: 350, imagen: "" },
        { id: 7, nombre: "Fresas", categoria: "Frutas", stock: 40, precio: 450, imagen: "" },
        { id: 8, nombre: "Plátanos", categoria: "Frutas", stock: 70, precio: 200, imagen: "" },
        { id: 9, nombre: "Pan de Centeno", categoria: "Panadería", stock: 25, precio: 600, imagen: "" },
        { id: 10, nombre: "Croissants", categoria: "Panadería", stock: 15, precio: 700, imagen: "" },
        { id: 11, nombre: "Baguette", categoria: "Panadería", stock: 20, precio: 400, imagen: "" },
        { id: 12, nombre: "Yogur", categoria: "Lácteos", stock: 30, precio: 1100, imagen: "./images/yogur.jpg" },
        { id: 13, nombre: "Queso", categoria: "Lácteos", stock: 25, precio: 1800, imagen: "./images/Queso.png" },
        { id: 14, nombre: "Mantequilla", categoria: "Lácteos", stock: 20, precio: 1500, imagen: "" },
        { id: 15, nombre: "Jugo de Naranja", categoria: "Bebidas", stock: 30, precio: 700, imagen: "./images/Jugo.jpg" },
        { id: 16, nombre: "Agua Mineral", categoria: "Bebidas", stock: 50, precio: 200, imagen: "./images/Agua.jpg" },
        { id: 17, nombre: "Coca Cola", categoria: "Bebidas", stock: 40, precio: 250, imagen: "./images/Coca Cola.jpg" },
        { id: 18, nombre: "Quinoa", categoria: "Cereales", stock: 50, precio: 900, imagen: "" },
        { id: 19, nombre: "Avena", categoria: "Cereales", stock: 80, precio: 600, imagen: "./images/Avena.jpg" },
        { id: 20, nombre: "Cebada", categoria: "Cereales", stock: 40, precio: 700, imagen: "./images/Cebada.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    renderProductos(); // Inicializar la visualización de productos cuando el DOM esté listo
});


let carrito = [];

function renderProductos() {
    const container = document.getElementById("productos-container");
    container.className = "d-flex gap-4 flex-wrap justify-content-center p-5"
    productos.forEach(producto => {
        const productElement = document.createElement("div");
        
        productElement.innerHTML = `

            <div class="card" style="width: 18rem;">
            <img src="${producto.imagen || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        `;
        container.appendChild(productElement);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    const productoEnCarrito = carrito.find(item => item.id === id);
    
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    
    renderCarrito();
}

function renderCarrito() {
    const carritoList = document.getElementById("carrito-list");
    const totalCarrito = document.getElementById("total-carrito");
    carritoList.innerHTML = "";
    
    let total = 0;
    carrito.forEach(item => {
        const carritoItem = document.createElement("li");
        carritoItem.classList.add("carrito-item");
        carritoItem.innerHTML = `
            ${item.nombre} x ${item.cantidad} - $${item.precio * item.cantidad}
            <button class="btn  btn-outline-danger btn-sm" onclick="eliminarDelCarrito(${item.id})">X</button>
        `;
        carritoList.appendChild(carritoItem);
        total += item.precio * item.cantidad;
    });
    
    totalCarrito.textContent = total;
}

function eliminarDelCarrito(id) {
    const productoIndex = carrito.findIndex(item => item.id === id);
    
    if (productoIndex !== -1) {
        carrito[productoIndex].cantidad--;
        
        if (carrito[productoIndex].cantidad === 0) {
            carrito.splice(productoIndex, 1);
        }
    }
    
    renderCarrito();
}

function vaciarCarrito() {
    carrito = [];
    renderCarrito();
}