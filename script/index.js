// Variables con elementos del formulario

let nombreForm = document.querySelector('#name');
let correoForm = document.querySelector('#email');
let textoForm = document.querySelector('#text');
let formulario = document.querySelector('#formulario');
let info = document.querySelector('.info');
let articulosCarrito = [];

// Eventos

const mostrarInfo = formulario.addEventListener('submit', function(e){
    e.preventDefault();

    info.innerHTML = `
    <div class="alert alert-success mt-3" role="alert">
    <h5>Muchas gracias ${nombreForm.value} por tu mensaje, nos contactaremos a ${correoForm.value} para responderte detro de las proximas 24hrs.</h5>
    </div>
    `
});

// Productos

const cards = document.querySelectorAll('.card')
cards.forEach((card) => {
    card.addEventListener('click', (e) => {
        leerProductos(e.target.parentElement)
    });
});

function leerProductos(producto){
    const infoProducto = {
        titulo: producto.querySelector('.card-title').textContent,
        texto: producto.querySelector('.card-text').textContent,
        id: producto.querySelector('.btn').getAttribute('data-id'),
    };
    
    // Agregar al Carrito

    articulosCarrito = [...articulosCarrito, infoProducto];

    carritoHTML();
};

const carrito = document.querySelector('#carrito');

function carritoHTML() {
    limpiarHTML();

    articulosCarrito.forEach((producto) =>{
        const row = document.createElement('p')
        row.innerHTML = `
        <div class = "mt-5 container">
        
        <h5>${producto.titulo}</h5>
        <p>${producto.texto}<p>

        <button class = "btn btn-danger" id = "${producto.id}">Eliminar</button>

        </div>

        `;
        carrito.appendChild(row)
    });

    function limpiarHTML() {
        carrito.innerHTML = '';
    }
}

// Eliminar producto

carrito.addEventListener('click', eliminarProducto);

function eliminarProducto(e){
    if(e.target.classList.contains('btn-danger')){
        let productoID = e.target.getAttribute('id')
        articulosCarrito = articulosCarrito.filter(
            (producto) => producto.id !== productoID
        );

        carritoHTML();
    }
};

// Guardar Datos

function guardarDatos(storage){
    let name = document.getElementById('name').value;
    let user = document.getElementById('email').value;
    let text = document.getElementById('text').value;
    
    const usuario = {
        'name': name,
        'user': user,
        'text': text
    }

    storage.setItem('users', JSON.stringify(usuario))
};

function borrarDatos(storage){
    storage.clear()
};