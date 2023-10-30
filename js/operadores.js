/*
    SUMAR DOS NUMEROS Y MOSTARLO POR PANTALLA
*/
//crear una funcion "nuestra propia" no nativa
function sumarv1() {
    let valor1 = prompt('valor1');
    let valor2 = prompt('valor2');
    let res = Number(valor1) + Number(valor2);
    console.log(res);
}
function sumar(valor1,valor2) {
    return Number(valor1) + Number(valor2);    
}

function restar(valor1,valor2) {
    return Number(valor1) - Number(valor2); 
}
function dividir(valor1,valor2) {    
    let res = 'No se puede dividir por 0';
    if(valor2 !== 0) {
        res = Number(valor1) / Number(valor2);
    }
    return res;
}

function actualizarContenido(id, nuevoContenido) {
    document.getElementById(id).innerHTML = nuevoContenido;
}
/*
    Retorna el valor dado su id 
*/
function getValorById(id) {
    //uso el D.O.M para capturar el valor del tag html
    return document.getElementById(id).value;
}
function calcular(operacion) {
    let valor1 = getValorById('valor1'); 
    let valor2 = getValorById('valor2');
    let res = '';
    if(valor1 !== '' && valor2 !== '') {
        if(operacion === '+') {
            res = sumar(valor1,valor2);
        }
        if(operacion === '-') {
            res = restar(valor1,valor2);
        }
        if(operacion === '/') {
            res = dividir(valor1,valor2);
        }
    }
    actualizarContenido('res',res);
}
