let producto = {
    nombre: "",
    precio: 0,
    descripcion: "",
    marca: "",
    porcDescuento: 0,   
};

function mostrarProducto() {
    producto.nombre = document.getElementById('nombre').value;
    producto.precio = parseFloat(document.getElementById('precio').value);
    producto.descripcion = document.getElementById('descripcion').value;
    producto.marca = document.getElementById('marca').value;
    producto.porcDescuento = parseFloat(document.getElementById('porcDescuento').value);

    if (!producto.nombre || !producto.precio || !producto.descripcion || !producto.marca || !producto.porcDescuento) {
        alert('Por favor, completa todos los campos');
        return;
    }

    mostrarResultado();
}

const calcularDescuento = () => {
    const descuento = producto.precio * (producto.porcDescuento / 100);
    const precioFinal = producto.precio - descuento;
    return precioFinal.toFixed(2);
}

function mostrarResultado() {
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `
        <div class="producto-info">
            <h2>Información del Producto</h2>
            <p>Nombre:       ${producto.nombre}</p>
            <p>Precio:       $${producto.precio}</p>
            <p>Descripción:   ${producto.descripcion}</p>
            <p>Marca:        ${producto.marca}</p>
            <p>Descuento:    ${producto.porcDescuento}%</p>
            <p>Precio Final: $${calcularDescuento()}</p>
        </div>
    `;
}