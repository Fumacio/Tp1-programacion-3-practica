// creo el objeto coche
let coche = {
    marca: "",
    modelo: "",
    año: 0,
    color: "",
    estado: "",
    precio: 0,
    // agrego edad para calcular con la funcion añoactual - coche.año
    edad: 0
};

function mostrarCoche() {
// obtener los valores del formulario
    coche.marca = document.getElementById('marca').value;
    coche.modelo = document.getElementById('modelo').value;
    coche.año = document.getElementById('año').value;
    coche.color = document.getElementById('color').value;
    coche.estado = document.getElementById('estado').value;
    coche.precio = parseFloat(document.getElementById('precio').value);

// validar que no falte un campo
    if (!coche.marca || !coche.modelo || !coche.año || !coche.color || !coche.estado || !coche.precio) {
        alert('Por favor, completa todos los campos');
        return;
    }

// calcular la edad del coche
    const añoActual = new Date().getFullYear();
    coche.edad = añoActual - coche.año;

// mostrar la información del auto en el div con id resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <div class="coche-info">
            <h2>Información del Coche</h2>
            <p>Marca:    ${coche.marca}</p>
            <p>Modelo:   ${coche.modelo}</p>
            <p>Año:      ${coche.año}</p>
            <p>Color:    ${coche.color}</p>
            <p>Estado:   ${coche.estado}</p>
            <p>Precio:$  ${coche.precio}</p>
            <p>Edad:     ${coche.edad} años</p>
        </div>`
        ;
}   

