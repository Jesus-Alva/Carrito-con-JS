//variables

const carrito = document.querySelector('#carrito');
const contenedorCaerrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')

const listarCursos = document.querySelector('#lista-cursos');


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
    console.log(infoCourse)
}