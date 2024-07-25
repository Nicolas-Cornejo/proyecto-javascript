// Definir la estructura de un p
class Product {
    constructor(id, name, price, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
    }
}

// Array para almacenar los ps
const products = [
    new Product(1, 'Gorra', 7000, "./assets/gorra.jpg"),
    new Product(2, 'Remera', 8000, "./assets/remeras.jpg"),
    new Product(3, 'Pantalon', 6500, "./assets/pants.jpg"),
    new Product(4, 'Accesorio', 5000, "./assets/reloj.jpg")
];

const print = (arr) => {
    let shopConteiner = document.getElementById("shop-conteiner");

    arr.forEach(p => {
    let sectionHTML = document.createElement('section');
    sectionHTML.className='card';
    sectionHTML.innerHTML += `<div class="card-image">
                        <img src=${p.img}>
                        <span class="card-title">${p.name}</span>
                        <button id="${p.id}">agregar a carrito</button>
                        </div>
                        <div class="card-content">
                            <p>${p.price}</p>
                        </div>
                    `
    shopConteiner.appendChild(sectionHTML);
    });
};

print(products);