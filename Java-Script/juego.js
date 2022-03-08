
//juego de piedra, papel o tijera

function OpcionesPpt(){
    efectoEscritura("Elige una opción: Piedra, Papel o Tijera")
    decir = "Elige una opción: Piedra, Papel o Tijera"
}

function machinePiedra (){
    const machineOpciones = Math.floor(Math.random()*3);

    machineOpciones === 0 && efectoEscritura("He elegido piedra, es un Empate");
    machineOpciones === 0 && (decir = "He elegido piedra, es un Empate");
    machineOpciones === 0 && empataste();

    machineOpciones === 1 && efectoEscritura("He elegido tijera, Ganaste");
    machineOpciones === 1 && (decir = "He elegido tijera, Ganaste");
    machineOpciones === 1 && ganaste();

    machineOpciones === 2 && efectoEscritura("He elegido papel, Perdiste");
    machineOpciones === 2 && (decir = "He elegido papel, Perdiste")
    machineOpciones === 2 && perdiste();
}

function machinePapel (){
    const machineOpciones = Math.floor(Math.random()*3);

    machineOpciones === 0 && efectoEscritura("He elegido papel, es un Empate");
    machineOpciones === 0 && (decir = "He elegido papel, es un Empate");
    machineOpciones === 0 && empataste();

    machineOpciones === 1 && efectoEscritura("He elegido piedra, Ganaste");
    machineOpciones === 1 && (decir = "He elegido piedra, Ganaste");
    machineOpciones === 1 && ganaste();

    machineOpciones === 2 && efectoEscritura("He elegido tijera, Perdiste");
    machineOpciones === 2 && (decir = "He elegido tijera, Perdiste");
    machineOpciones === 2 && perdiste();
}

function machineTijera (){
    const machineOpciones = Math.floor(Math.random()*3);

    machineOpciones === 0 && efectoEscritura("He elegido tijera, es un Empate");
    machineOpciones === 0 && (decir = "He elegido tijera, es un Empate");
    machineOpciones === 0 && empataste();

    machineOpciones === 1 && efectoEscritura("He elegido papel, Ganaste");
    machineOpciones === 1 && (decir = "He elegido papel, Ganaste");
    machineOpciones === 1 && ganaste();

    machineOpciones === 2 && efectoEscritura("He elegido piedra, Perdiste");
    machineOpciones === 2 && (decir = "He elegido piedra, Perdiste");
    machineOpciones === 2 && perdiste();
}

//Funciones para podes mostrar las estadisticas usando Local Storage
function ganaste(){
    let numero = 1;
    let numeroTraido =JSON.parse(localStorage.getItem("ganadas"));
    let ganadas = numero + numeroTraido;
    localStorage.setItem("ganadas", ganadas);
}  

function perdiste(){
    let numero = 1;
    let numeroTraido =JSON.parse(localStorage.getItem("perdidas"));
    let perdidas = numero + numeroTraido;
    localStorage.setItem("perdidas", perdidas);
}  

function empataste(){
    let numero = 1;
    let numeroTraido =JSON.parse(localStorage.getItem("empatadas"));
    let empatadas = numero + numeroTraido;
    localStorage.setItem("empatadas", empatadas);
}  

function estadisticas(){
    let ganadas = localStorage.getItem("ganadas");
    let perdidas = localStorage.getItem("perdidas");
    let empatadas = localStorage.getItem("empatadas");

    let estadistica = ("Ganaste "+ganadas+ " Perdiste "+ perdidas+ " Empataste "+ empatadas);
    
    estadistica = estadistica.replace(/null/g,"0")
    
    efectoEscritura (estadistica)
    decir = estadistica
}
//Fin de funciones para podes mostrar las estadisticas usando Local Storage

//fin de juego piedra, papel o tijera

