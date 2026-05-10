let empleado = {
    nombre : "",
    apellido : "",
    dni : "",
    direccion : "",
    sueldoXHs : 0,
    precioXHs : 0,

    salarioXMes() {
        return this.sueldoXHs * this.precioXHs * 4 * 40; // un mes y 40 horas semanales en teoria
    }
};

let Empleados = [];

function mostrarEmpleado() {
    empleado.nombre = document.getElementById('nombre').value;
    empleado.apellido = document.getElementById('apellido').value;
    empleado.dni = document.getElementById('dni').value;
    empleado.direccion = document.getElementById('direccion').value;
    empleado.sueldoXHs = parseFloat(document.getElementById('sueldoXHs').value);
    empleado.precioXHs = parseFloat(document.getElementById('precioXHs').value);

    if (!empleado.nombre || !empleado.apellido || !empleado.dni || !empleado.direccion || !empleado.sueldoXHs || !empleado.precioXHs) {
        alert('Por favor, completa todos los campos');
        return;
    }

    // agregar empleado al array
    Empleados.push({
        nombre: empleado.nombre,
        apellido: empleado.apellido,
        dni: empleado.dni,
        direccion: empleado.direccion,
        sueldoXHs: empleado.sueldoXHs,
        precioXHs: empleado.precioXHs,
        salarioXMes: empleado.salarioXMes()
    });

    // mostrar todos los empleados x consola
    console.log("Empleados registrados:", Empleados);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <div class="empleado-info">
            <h3>${empleado.nombre} ${empleado.apellido}</h3>
            <p><strong>DNI:</strong> ${empleado.dni}</p>
            <p><strong>Dirección:</strong> ${empleado.direccion}</p>
            <p><strong>Sueldo por Horas:</strong> $${empleado.sueldoXHs}</p>
            <p><strong>Precio por Horas:</strong> $${empleado.precioXHs}</p>
            <p><strong>Salario por Mes:</strong> $${empleado.salarioXMes().toFixed(2)}</p>
        </div>
    `;
}