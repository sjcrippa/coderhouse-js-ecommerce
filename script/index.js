// Arrays productos
const stockProductos = [
    {
        id: 1,
        nombre: "Armani Aqua",
        cantidad: 1,
        precio: 25200,
        imagen: "../src/imgs/cards-perfumes/armani-aqua.png",
        descripcion: "Eau De Parfum"
    },
    {
        id: 2,
        nombre: "Armani Code",
        cantidad: 1,
        precio: 27650,
        imagen: "../src/imgs/cards-perfumes/armani-code.png",
        descripcion: "Eau De Parfum"
    },
    {
        id: 3,
        nombre: "Armani Gio",
        cantidad: 1,
        precio: 26900,
        imagen: "../src/imgs/cards-perfumes/armani-gio.png",
        descripcion: "Eau De Parfum"
    },
    {
        id: 4,
        nombre: "Armani Profumo",
        cantidad: 1,
        precio: 32970,
        imagen: "../src/imgs/cards-perfumes/armani-profumo.png",
        descripcion: "Eau De Parfum"
    },
    {
        id: 5,
        nombre: "Black XS",
        cantidad: 1,
        precio: 31550,
        imagen: "../src/imgs/cards-perfumes/black-xs.png",
        descripcion: "Eau De Parfum"
    },
    {
        id: 6,
        nombre: "Invictus",
        cantidad: 1,
        precio: 37850,
        imagen: "../src/imgs/cards-perfumes/invictus.png",
        descripcion: "Eau De Parfum"
    },
    {
        id: 7,
        nombre: "One Millon",
        cantidad: 1,
        precio: 38900,
        imagen: "../src/imgs/cards-perfumes/one-millon.png",
        descripcion: "Eau De Parfum"
    },
    {
        id: 8,
        nombre: "One Millon Lucky",
        cantidad: 1,
        precio: 39950,
        imagen: "../src/imgs/cards-perfumes/one-millon-lucky.png",
        descripcion: "Eau De Parfum"
    },
    {
        id: 9,
        nombre: "My Way",
        cantidad: 1,
        precio: 28750,
        imagen: "../src/imgs/cards-perfumes/my-way.png",
        descripcion: "Eau De Parfum"
    },

];

// Variables con elementos del formulario

let nombreForm = document.querySelector('#name');
let correoForm = document.querySelector('#email');
let textoForm = document.querySelector('#text');
let formulario = document.querySelector('#formulario');
let info = document.querySelector('.info');
let carrito = [];

// Evento de respuesta a formulario

const mostrarInfo = formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    info.innerHTML = `
    <div class="alert alert-success mt-3" role="alert">
    <h5>Muchas gracias ${nombreForm.value} por tu mensaje, nos contactaremos a ${correoForm.value} para responderte detro de las proximas 24hrs.</h5>
    </div>
    `
});

const contenedor = document.querySelector("#contenedor")

stockProductos.forEach((prod) => {
    const { id, nombre, cantidad, precio, imagen, descripcion } = prod
    contenedor.innerHTML +=
        `
    <div class="card mt-3" style="width: 18rem;">
        <img class="cartaImg card-img-top mt-2" src="${imagen}" alt="Producto">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">Precio: ${precio}</p>
            <p class="card-text">Descripcion: ${descripcion}</p>
            <p class="card-text">Cantidad: ${cantidad}</p>
            <button class="btn btn-primary" 
            onclick="agregarProducto(${id})">Agregar</button>
        </div>
    </div>
    `
});

const agregarProducto = (id) => {
    const existe = carrito.some(prod => prod.id === id)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === id)
        carrito.push(item)
    }
    mostrarCarrito()

};

const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    if (modalBody) {
        modalBody.innerHTML = "";
        carrito.forEach((prod) => {
            const { id, nombre, precio, descripcion, imagen, cantidad } = prod;
            console.log(modalBody);
            modalBody.innerHTML += `
        <div class="modal-contenedor">
          <div>
          <img class="img-fluid img-carrito" src="${imagen}"/>
          </div>
          <div class="mt-3">
          <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad :${cantidad}</p>
        <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
          </div>
        </div>
        
    
        `;
        });
    }
}