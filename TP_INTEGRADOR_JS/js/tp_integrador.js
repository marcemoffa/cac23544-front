document.addEventListener('DOMContentLoaded', function () {
    //Agrego los input de cada uno
    const cantidadInput = document.getElementById('cantidad1');
    const categoriaSelect = document.getElementById('categoria1');
    const totalAPagarInput = document.getElementById('totalApagar');
    const resumenButton = document.getElementById('resumenButton');
    const borrar = document.getElementById('borrarButton');
    const nombreInput = document.getElementById('nombreInput'); 
    const apellidoInput = document.getElementById('apellidoInput'); 
    const correoInput = document.getElementById('correoInput'); 
    
    // Función para calcular el total a pagar
    function calcularTotalAPagar() {
        
        const cantidad = parseFloat(cantidadInput.value) || 0; // Convierte la cantidad a un número
        const categoria = categoriaSelect.value;
        let descuento = 0;

        // Determina el descuento según la categoría
        switch (categoria) {
            case 'Estudiante':
                descuento = 0.8; 
                break;
            case 'Trainee':
                descuento = 0.5; 
                break;
            case 'Junior':
                descuento = 0.15; 
                break;
        }

        const precioBase = 200; // Precio de la entrada
        const totalAPagar = cantidad * precioBase * (1 - descuento); // Calcula el total a pagar

        // Actualiza Total a Pagar
        totalAPagarInput.value = 'Total a Pagar: $' + totalAPagar.toFixed(2); // Formatea a 2 decimales
    }
    // Función para mostrar el resumen cuando se hace clic en el botón
    function mostrarResumen() {
     
        const nombre = nombreInput.value.trim(); // trim:elimina espacios en blanco en cadena texto
        const apellido = apellidoInput.value.trim();
        const correo = correoInput.value.trim();
        const cantidad = cantidadInput.value.trim();
        const categoria = categoriaSelect.value;

    // Verifica si alguno de los campos está vacío
    if (nombre === '' || apellido === '' || correo === '' || cantidad === '' || categoria === '') {
        
        alert('Por favor, complete todos sus datos.');//Msj. de error
        return;
    } 
    calcularTotalAPagar();
  }
  resumenButton.addEventListener('click', mostrarResumen);//evento mostrar 
  
  //borrar todos los input
  function borrarValores() {
    cantidadInput.value = '';
    categoriaSelect.value = '';
    totalAPagarInput.value = '';
    nombreInput.value = '';
    apellidoInput.value = '';
    correoInput.value = '';
 }
 //eventos al botón borrar
 borrar.addEventListener('click', borrarValores);

});






