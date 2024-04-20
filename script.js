
// función para agregar a la pantalla el valor de los botones
function agregar(valor) {
    document.getElementById('pantalla').value += valor;

}

// función para borrar la pantalla
function borrar(){
    document.getElementById('pantalla').value = "";
}

// función para calcular el resultado
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    // si la pantalla está vacía no hace nada
    if(valorPantalla === ""){
        return;
    }else{
        const resultado = eval(valorPantalla);
        document.getElementById('pantalla').value = resultado;
    }
}

// mostrar la fecha actual
// Obtener el elemento <p> por su ID
const fechaElemento = document.getElementById('fechaActual');

// Obtener la fecha actual
const fechaActual = new Date();

// Formatear la fecha como texto
const opcionesDeFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesDeFecha);

// Establecer el contenido del elemento <p> como la fecha formateada
fechaElemento.textContent = 'Fecha actual: ' + fechaFormateada;
