//variables

const carrito = document.querySelector('#carrito');
const contenedorCaerrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')

const listarCursos = document.querySelector('#lista-cursos');


cargarEventListeners();
function cargarEventListeners(){
    listarCursos.addEventListener('click', agregarCurso)
}

// Funciones
function agregarCurso(e){
    e.preventDefault();//No permite el salto generado por las etiquetas <a>
    
    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target);   
    }
}