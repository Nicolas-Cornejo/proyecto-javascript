function saludar() {
    let nombreIngresado = prompt("ingrese su nombre");
    alert("Hola " + nombreIngresado + ", muchisimas gracias por entrar a comprar en mi pagina");
};

function comprarIndumentaria() {
    producto = prompt("Elija uno de nuestros productos en stock  \n 1: Gorra $7000 \n 2: Remera  $8000 \n 3: Pantalon $6500 \n 4: Accesorio $5000 \n 5: Terminar");
    if (producto === "1") {
        alert("Usted ha elegido la gorra de $7000")
    }
    else if (producto === "2") {
        alert("Usted ha elegido la remera de $8000")
    }
    else if (producto === "3") {
        alert("Usted ha elegido el pantalon de $6500")
    }
    else if (aproducto === "4") {
        alert("Usted ha elegido el accesorio de $5000")
    }
    else if (producto === "5") {
        alert("Usted ha elegido terminar")
        opcion = "3";
    };
    opcion = prompt("Vuelva a elegir una opcion \n 1: Comprar indumentaria \n 2: Pagar \n 3: retirar \n 4 Salir ");
};

function pagar() {
    pago = prompt("elija uno de los siguientes metodos de pago  \n 1: Tarjeta de credito \n 2: Tarjeta de debito \n 3: Efectivo \n 4: Mercado pago \n 5: Terminar");
    if (pago === "1") {
        alert("Usted ha elegido la Tarjeta de credito")
    }
    else if (pago === "2") {
        alert("Usted ha elegido la Tarjeta de debito")
    }
    else if (pago === "3") {
        alert("Usted ha elegido Efectivo")
    }
    else if (pago === "4") {
        alert("Usted ha elegido Mercado pago")
    }
    else if (pago === "5") {
        alert("Usted ha elegido terminar")
    }
    opcion = prompt("Ahora terminaremos la compra, elija 3 para retirar ");
}

function retirar() {
    envio = prompt("elija uno de los siguientes metodos de envio  \n 1: andreani $1000 \n 2: Correo Argentino  $700 \n 3: Oca $750 \n 4: Nuestro local $0 \n 5: Finalizar ");
    if (envio === "1") {
        alert("Usted ha elegido Andreani")
    }
    else if (envio === "2") {
        alert("Usted ha elegido Correo Argentino ")
    }
    else if (envio === "3") {
        alert("Usted ha elegido oca ")
    }
    else if (envio === "4") {
        alert("Usted ha elegido Nuestro local")
    }
    else if (envio === "5") {
        alert("Usted ha elegido Finalizar")
        opcion = "4";
    }
}

let producto
let pago
let envio
let nombreIngresado

// recien empieza aca //

saludar()
let opcion = prompt("Eliga una opcion \n 1: Comprar indumentaria \n 2: Pagar \n 3: retirar \n 4 Salir ");
while (opcion !== "4") {
    if (opcion === "1") {
        comprarIndumentaria()
    }
    else if (opcion === "2") {
        pagar()
    }
    else if (opcion === "3") {
        retirar()
        opcion = "4"
    }
}

alert("Muchisimas gracias, esperemos verlo pronto 😁...")