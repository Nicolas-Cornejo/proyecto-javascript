// Función para obtener entrada del usuario
function getUserInput(message) {
    return prompt(message);
}

// Definir la estructura de un producto
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Array para almacenar los productos
const products = [
    new Product(1, 'Gorra', 7000),
    new Product(2, 'Remera', 8000),
    new Product(3, 'Pantalon', 6500),
    new Product(4, 'Accesorio', 5000)
];

// Array para almacenar el carrito de compras
let cart = [];

// Función para saludar al usuario
function saludar() {
    let nombreIngresado = getUserInput("Ingrese su nombre");
    alert("Hola " + nombreIngresado + ", muchísimas gracias por entrar a comprar en mi página");
}

// Función para comprar indumentaria
function comprarIndumentaria() {
    let opciones = products.map(product => `${product.id}: ${product.name} $${product.price}`).join('\n') + '\n5: Terminar';
    let productoId = getUserInput(`Elija uno de nuestros productos en stock\n${opciones}`);
    let producto = products.find(p => p.id == productoId);
    if (producto) {
        cart.push(producto);
        alert(`Usted ha elegido la ${producto.name} de $${producto.price}`);
    } else if (productoId === "5") {
        alert("Usted ha elegido terminar");
    } else {
        alert("Opción no válida. Inténtalo de nuevo.");
    }
}

// Función para pagar
function pagar() {
    let pago = getUserInput("Elija uno de los siguientes métodos de pago\n1: Tarjeta de crédito\n2: Tarjeta de débito\n3: Efectivo\n4: Mercado Pago\n5: Terminar");
    if (pago === "1") {
        alert("Usted ha elegido la Tarjeta de crédito");
    } else if (pago === "2") {
        alert("Usted ha elegido la Tarjeta de débito");
    } else if (pago === "3") {
        alert("Usted ha elegido Efectivo");
    } else if (pago === "4") {
        alert("Usted ha elegido Mercado Pago");
    } else if (pago === "5") {
        alert("Usted ha elegido terminar");
    } else {
        alert("Opción no válida. Inténtalo de nuevo.");
    }
}

// Función para retirar
function retirar() {
    let envio = getUserInput("Elija uno de los siguientes métodos de envío\n1: Andreani $1000\n2: Correo Argentino $700\n3: Oca $750\n4: Nuestro local $0\n5: Finalizar");
    if (envio === "1") {
        alert("Usted ha elegido Andreani");
    } else if (envio === "2") {
        alert("Usted ha elegido Correo Argentino");
    } else if (envio === "3") {
        alert("Usted ha elegido Oca");
    } else if (envio === "4") {
        alert("Usted ha elegido Nuestro local");
    } else if (envio === "5") {
        alert("Usted ha elegido Finalizar");
    } else {
        alert("Opción no válida. Inténtalo de nuevo.");
    }
}

// Función para calcular el total del carrito
function calcularTotal() {
    return cart.reduce((total, product) => total + product.price, 0);
}

// Función principal para interactuar con el usuario
function main() {
    saludar();
    let opcion;

    do {
        opcion = getUserInput("Elija una opción\n1: Comprar indumentaria\n2: Pagar\n3: Retirar\n4: Salir");
        switch (opcion) {
            case '1':
                comprarIndumentaria();
                break;
            case '2':
                pagar();
                break;
            case '3':
                retirar();
                alert(`El total de su compra es: $${calcularTotal()}`);
                opcion = '4';
             // Finaliza después de retirar
                break;
            case '4':
                alert("Muchísimas gracias, esperamos verlo pronto 😁...");
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
                break;
        }
    } while (opcion !== '4');
}

// Ejecutar el programa
main();
