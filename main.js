let cart = [];
let productos = [];

// Función generar cartas
function generadorP(producto) {
    return `
    <div class="col-md-3">
        <div class="card mb-4">
            <img src="${producto.foto}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <button class="btn btn-primary" onclick="añadirC(${producto.id})">Agregar al Carrito</button>
            </div>
        </div>
    </div>`;
}

// Función para traer los productos
function traerP() {
    fetch('json/productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar los productos");
            }
            return response.json();
        })
        .then(datos => {
            productos = datos;
            renderP();
        })
        .catch(error => {
            console.error("Nuestro sistema ha fallado, vuelva pronto", error);
        });
}

// Función para renderizar productos
function renderP() {
    const listaP = document.getElementById("listaDeProducto");
    listaP.innerHTML = productos.map(producto => generadorP(producto)).join('');
}

// Función añadir carrito
function añadirC(idProducto) {
    const productoCarrito = productos.find(p => p.id === idProducto);
    const productoExistente = cart.find(item => item.id === idProducto);

    if (productoExistente) {
        productoExistente.quantity++;
    } else {
        cart.push({ ...productoCarrito, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    Toastify({
        text: "¡Se ha agregado al carrito!",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
    renderC ();
}

// Función para renderizar carrito
function renderC() {
    const cartItemsContenedor = document.querySelector('.carrito');
    const totalElementos = document.getElementById('total');
    cartItemsContenedor.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElementos = document.createElement('div');
        itemElementos.className = 'card mb-3';
        itemElementos.innerHTML = `
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${item.foto}" class="card-img" alt="${item.nombre}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre} - $${item.precio} x ${item.quantity}</h5>
                    <div class="d-flex justify-content-center align-items-center">
                        <button class="btn btn-danger" onclick="eliminarDeC(${item.id})">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>`;
        cartItemsContenedor.appendChild(itemElementos);
        total += item.precio * item.quantity;
    });

    totalElementos.textContent = total.toFixed(2);
}

// Función para cargar carrito
function cargarC() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    if (document.querySelector('.carrito')) {
        renderC();
    }
}

// Función para eliminar cosas del cashito
function eliminarDeC(idProducto) {
    cart = cart.filter(item => item.id !== idProducto);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderC();
    Toastify({
        text: "¡su producto ha sido eliminado del carrito!",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "linear-gradient(to right, #ff416c, #ff4b2b)",
        }
    }).showToast();
}


// Unificar el evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('listaDeProducto')) {
        traerP();
    }
    if (document.querySelector('.carrito')) {
        cargarC();
    }
});