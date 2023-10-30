const listado = [];//crear array vacio
function remove(id) {
    const listadoAux = [];
    for(let valor of listado) {
        if(!valor.includes(id)) {
            listadoAux.push(valor);
        }
    }
    debugger;
}
function add() {
    //capoturo el valor del input por su id
    const value = getValueById('elemento');
    
    //solo agregamos si no es vacio
    if(value === '') {
        return;
    }
    
    //agregamos si la lista aun no tiene 5 elementos
    if(listado.length < 5) {
        const id = Math.random();//0 > 1
        listado.push(`
            <li id="${id}">
                <span>${value}</span>
                <button class="btn btn-danger btn-sm" onclick='remove(${id})'>
                    x
                </button>
            </li>
        `);
        updateHtmlById('total', (5-listado.length))
    }

    let items = '';
    for(let valor of listado) {
        items += valor;
    }

    //actualizo el tag ul con el valor, recorriendo la lista 
    updateHtmlById('listado', items);

    //limpio el input
    updateValueById('elemento', '');

    //pongo el foco en el input
    setFocusById('elemento');
}

document.getElementById('btnAdd').addEventListener('click',add);
//1 capturo el boton por su id


/*
let saludo = 'hola';
let adios = 'chau';
let aux = saludo + adios;

let aux2 = `${saludo} ${adios}`;
*/