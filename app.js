let numeroSecreto = 0;
let intentos = 1;
let listaNumeroGenerado = [];
let numeroMaximo =10;
let intentosPermitidos =6;

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML =texto;
};

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorIngresado').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTexto('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'Vez' :'Veces'}` )
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario > numeroSecreto) {
            asignarTexto('p','El numero es menor')
        }else{
            asignarTexto('p','El numero es mayor')
        }
    }
    if (intentosPermitidos == intentos) {
        asignarTexto('p', 'Usaste todos los intentos permitidos');
    } else {
        intentos++;
        limpiarCajita();
    }
};

function limpiarCajita() {
    document.querySelector('#valorIngresado').value = '';
    
}

function generarNumero() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroGenerado);

    if (listaNumeroGenerado.length == numeroMaximo) {
        asignarTexto('p','Ya se sortearon todos los numeros posibles')
    }else {
        if (listaNumeroGenerado.includes(numeroGenerado) ) {
            return generarNumero();
        } else {
            listaNumeroGenerado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales(){
    asignarTexto('h1' , 'Juego del Numero Secreto');
    asignarTexto('p' , `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto =generarNumero();
    intentos =1;
}

function reiniciarJuego(){
    //Limpiar Cajita
    limpiarCajita();
    //Condiciones iniciales 
    condicionesIniciales();
    //Deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
