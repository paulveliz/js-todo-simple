const addNew = document.querySelector('.todobutton');
const tarea = document.querySelector('#homework');
const btnEliminar = document.querySelector('#btneliminar');

addNew.addEventListener('click', function(event) {
    const t = tarea.value;
    if(!t) return;
    
    if(String(t).length < 3) {
        alert('Debe ser mayor a 3 caracteres de longitud.');
        return;
    }
    crearTarea(t);

});

btnEliminar.addEventListener('click', function(event){
    eliminarSeleccionados();
});

function crearTarea( tarea ) {
    const tareaText = document.querySelector('#homework');
    const lista = document.querySelector('.todolist');
    const element = `
            <input type="checkbox">
            <p>${String(tarea).trim()}</p>
    `;
    const container = document.createElement('div');
    container.classList.add('tarea');
    container.id = `tarea${lista.childElementCount+1}`;
    container.innerHTML = element;
    tareaText.value = '';
    lista.appendChild(container);
}

function eliminarTarea( tarea = new Node()) {
    if(!tarea) return;
    var parrafo = tarea.childNodes[3].innerText;
    const target = document.querySelector('.todolist');
    target.removeChild(tarea);
    alert(`Se elimino la tarea "${ parrafo }"`);
}

function eliminarSeleccionados(){
    const tareas = document.querySelectorAll('.tarea');
    tareas.forEach( tarea => {
        if(tarea.childNodes[1].checked){
        //    tarea.classList.remove('.tarea');
        //    tarea.style.display = "none";
           const lista = document.querySelector('.todolist');
           lista.removeChild(tarea);
        }
    });
}

eliminarSeleccionados();