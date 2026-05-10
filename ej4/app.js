let empleado = {
    nombre : "",
    apellido : "",
    dni : "",
    direccion : "",
    salarioXMes : 0
};

function mostrarEmpleado() {
    empleado.nombre = document.getElementById('nombre').value;
    empleado.apellido = document.getElementById('apellido').value;
    empleado.dni = document.getElementById('dni').value;
    empleado.direccion = document.getElementById('direccion').value;
    empleado.salarioXMes = parseFloat(document.getElementById('salarioXMes').value);

    if (!empleado.nombre || !empleado.apellido || !empleado.dni || !empleado.direccion || !empleado.salarioXMes) {
        alert('Por favor, completa todos los campos');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <div class="empleado-info">
            <h3>${empleado.nombre} ${empleado.apellido}</h3>
            <p><strong>DNI:</strong> ${empleado.dni}</p>
            <p><strong>Dirección:</strong> ${empleado.direccion}</p>
            <p><strong>Salario por Mes:</strong> $${empleado.salarioXMes.toFixed(2)}</p>
        </div>
    `;
}