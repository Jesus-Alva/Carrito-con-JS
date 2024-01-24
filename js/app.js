//variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')

const listarCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners(){
    listarCursos.addEventListener('click', addCourse)
}

// Funciones
function addCourse(e){
    e.preventDefault();//No permite el salto generado por las etiquetas <a>
    
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        readCourse(cursoSeleccionado)
    }
}

//lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function readCourse(curso){
    //Crear objeto con el contenido del curso actual
    const infoCourse = {
        image: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // console.log(infoCourse)

    //Agrega elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCourse]
    console.log(articulosCarrito)
    carritoOnHTML();
}

//Muestra el carrito de compras en el HTML
function carritoOnHTML(){
    //Limpiar el HTML
    clearHTML();

    //Agrega el HTML del carrito en el tbody
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${curso.image}"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}
function clearHTML(){
    // contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
