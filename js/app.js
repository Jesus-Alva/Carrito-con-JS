//variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')

const listarCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners(){
    //Agregar curso
    listarCursos.addEventListener('click', addCourse);

    //Eliminar cursos del carrito
    carrito.addEventListener('click', deleteCuourse);
}

// Funciones
function addCourse(e){
    e.preventDefault();//No permite el salto generado por las etiquetas <a>
    
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        readCourse(cursoSeleccionado)
    }
}
//Elimina un curso
function deleteCuourse(e){
    if(e.target.classList.contains('borrar-curso')){
        const courseId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== courseId)

        carritoOnHTML();
    }
}

//lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function readCourse(curso){
    //Crear objeto con el contenido del curso actual
    const infoCourse = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // Comprobar si un elemento ya existe en el carrito
    const exist = articulosCarrito.some(curso => curso.id === infoCourse.id)
    if(exist){
        
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCourse.id){
                curso.cantidad++;
                return curso;
            }else {
                return curso;
            }
        })
        articulosCarrito = [...cursos];

    }else{
        //Agrega elementos al carrito
        articulosCarrito = [...articulosCarrito, infoCourse]
    }

    console.log(articulosCarrito)
    carritoOnHTML();
}

//Muestra el carrito de compras en el HTML
function carritoOnHTML(){
    //Limpiar el HTML
    clearHTML();

    //Agrega el HTML del carrito en el tbody
    articulosCarrito.forEach( curso => {
        const {imagen,titulo,precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
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
