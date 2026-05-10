let libro = {
    titulo : "",
    autor : "",
    genero : "",
    añoPublicacion : 0
};

let LibrosTotales = [];

function agregarLibro() {
    libro.titulo = document.getElementById('titulo').value;
    libro.autor = document.getElementById('autor').value;
    libro.genero = document.getElementById('genero').value;
    libro.añoPublicacion = parseFloat(document.getElementById('añoPublicacion').value);

    if (libro.titulo === '' || libro.autor === '' || libro.genero === '' || libro.añoPublicacion <= 0) {
        alert('Por favor, complete todos los campos y/o agregue un año de publicacion valido');
        return;
    }

    // agregar libro al array
    LibrosTotales.push({
        titulo: libro.titulo,
        autor: libro.autor,
        genero: libro.genero,
        añoPublicacion: libro.añoPublicacion
    });

    // mostrar todos los libros en consola
    console.log("Libros registrados:", LibrosTotales);

    // mostrar todos los libros en la página
    mostrarLibros();

    // limpiar formulario
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('añoPublicacion').value = '';
}

function mostrarLibros() {
    const resultado = document.getElementById('resultado');
    
    

    let html = '<h2>Libros Registrados</h2>';
    
    LibrosTotales.forEach((lib, index) => {
        html += `
            <ul>
                <li><strong>Título:</strong> ${lib.titulo}</li>
                <li><strong>Autor:</strong> ${lib.autor}</li>
                <li><strong>Género:</strong> ${lib.genero}</li>
                <li><strong>Año de Publicación:</strong> ${lib.añoPublicacion}</li>
            </ul>
        `;
    });

    resultado.innerHTML = html;
}