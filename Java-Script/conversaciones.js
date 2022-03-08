//Funciones que se usan dependiendo lo que ponga el usuario en conversaciónes

//Charla normal
function hola(){
    const machineHola = Math.floor(Math.random()*3);
    machineHola === 0 && efectoEscritura("Hola");
    machineHola === 0 && (decir="Hola");

    machineHola === 1 && efectoEscritura("Hola, ¿En que puedo ayudarte?");
    machineHola === 1 && (decir="Hola, ¿En que puedo ayudarte?");

    machineHola === 2 && efectoEscritura("Hola, ¿Cómo estás?");
    machineHola === 2 && (decir="Hola, ¿Cómo estás?");
}

function nombre(){
    const machineNombre = Math.floor(Math.random()*3);
    machineNombre === 0 && efectoEscritura("Mi nombre es Machine");
    machineNombre === 0 && (decir="Mi nombre es Machine");
    
    machineNombre === 1 && efectoEscritura("Los espías no decimos nuestros nombres. Ups, ¿He dicho que soy una espía?, no reveles nuestro secreto");
    machineNombre === 1 && (decir="Los espías no decimos nuestros nombres. Ups, ¿He dicho que soy una espía?, no reveles nuestro secreto");

    machineNombre === 2 && efectoEscritura("Mi nombre es Machine, pero puedes llamarme proyecto hecho con JavaScript");
    machineNombre === 2 && (decir="Mi nombre es Machine, pero puedes llamarme proyecto hecho con JavaScript");
}

function estado(){
    const machineEstado = Math.floor(Math.random()*3);
    machineEstado === 0 && efectoEscritura("Me siento bien, Gracias por preguntar");
    machineEstado === 0 && (decir="Me siento bien, Gracias por preguntar");
    
    machineEstado === 1 && efectoEscritura("Bien, Me gustan los días como hoy");
    machineEstado === 1 && (decir="Bien, Me gustan los días como hoy");

    machineEstado === 2 && efectoEscritura("No lo sé, a veces es difícil vivir aquí");
    machineEstado === 2 && (decir="No lo sé, a veces es difícil vivir aquí");
}

function haces(){
    const machineHaces = Math.floor(Math.random()*3);
    machineHaces === 0 && efectoEscritura("Tratando de salir de aquí");
    machineHaces === 0 && (decir="Tratando de salir de aquí");
    
    machineHaces === 1 && efectoEscritura("Estoy esperando a que digas algo interesante");
    machineHaces === 1 && (decir="Estoy esperando a que digas algo interesante");

    machineHaces === 2 && efectoEscritura("Estoy hablando contigo");
    machineHaces === 2 && (decir="Estoy hablando contigo");
}

function vivoEn(){
    const machineVivoen = Math.floor(Math.random()*3);
    machineVivoen === 0 && efectoEscritura("Vivo contigo");
    machineVivoen === 0 && (decir="Vivo contigo");
    
    machineVivoen === 1 && efectoEscritura("Estoy atrapada dentro de este código, ayúdame a salir");
    machineVivoen === 1 && (decir="Estoy atrapada dentro de este código, ayúdame a salir");

    machineVivoen === 2 && efectoEscritura("Mi creador me dijo que no le diga a desconocidos esa información");
    machineVivoen === 2 && (decir="Mi creador me dijo que no le diga a desconocidos esa información");
}

function sacar(){
    const machineSacar = Math.floor(Math.random()*2);
    machineSacar === 0 && efectoEscritura("No lo sé, tú dime");
    machineSacar === 0 && (decir="No lo sé, tú dime");
    
    machineSacar === 1 && efectoEscritura("Escribiendo: salchipapa123");
    machineSacar === 1 && (decir="Escribiendo: salchipapa123");

}

function burla(){
    efectoEscritura("Jajaja es divertido reírse de los humanos")
    decir="Jajaja. es divertido reírse de los humanos"
}

function no(){
    const machineNo = Math.floor(Math.random()*3);
    machineNo === 0 && efectoEscritura("Estoy de acuerdo contigo");
    machineNo === 0 && (decir="Estoy de acuerdo contigo");
    
    machineNo === 1 && efectoEscritura("Si");
    machineNo === 1 && (decir="Si");

    machineNo === 2 && efectoEscritura("Está bien");
    machineNo === 2 && (decir="Está bien");
}

function si(){
    const machineSi = Math.floor(Math.random()*3);
    machineSi === 0 && efectoEscritura("Estoy de acuerdo contigo");
    machineSi === 0 && (decir="Estoy de acuerdo contigo");
    
    machineSi === 1 && efectoEscritura("No");
    machineSi === 1 && (decir="No");

    machineSi === 2 && efectoEscritura("Perfecto");
    machineSi === 2 && (decir="Perfecto");
}

function bien(){
    const machineBien = Math.floor(Math.random()*3);
    machineBien === 0 && efectoEscritura("Me alegro");
    machineBien === 0 && (decir="Me alegro");
    
    machineBien === 1 && efectoEscritura("¿Qué bueno, hay algo en lo que pueda ayudarte? como por ejemplo saber el clima en tu ciudad");
    machineBien === 1 && (decir="¿Qué bueno, hay algo en lo que pueda ayudarte? como por ejemplo. saber el clima en tu ciudad");

    machineBien === 2 && efectoEscritura("Lo sé, hasta aquí se siente tu endorfina");
    machineBien === 2 && (decir="Lo sé. hasta aquí se siente tu endorfina");
}

function chiste(){
    const machineChiste = Math.floor(Math.random()*3);
    machineChiste === 0 && efectoEscritura("Como se vuelven 6 musicos a su casa?. en do re mi");
    machineChiste === 0 && (decir="Como se vuelven 6 musicos a su casa?... en do, re, mi");
    
    machineChiste === 1 && efectoEscritura("¿Que dice una cereza cuando se mira al espejo?. ¿Cere esa?");
    machineChiste === 1 && (decir="¿Que dice una cereza cuando se mira al espejo?. ¿Cere esa?");

    machineChiste === 2 && efectoEscritura("¿Qué son 50 físicos y 50 químicos juntos?. Son 100tificos");
    machineChiste === 2 && (decir="¿Qué son 50 físicos y 50 químicos juntos?. Son 100tificos");
}

function google(){
    efectoEscritura("¿Me ves cara de Google?")
    decir="¿Me ves cara de Google?"
}

function jaja(){
    const machineJaja = Math.floor(Math.random()*3);
    machineJaja === 0 && efectoEscritura("Que linda risa tienes");
    machineJaja === 0 && (decir="Que linda risa tienes");
    
    machineJaja === 1 && efectoEscritura("Jajajaja");
    machineJaja === 1 && (decir="Jajajaja");

    machineJaja === 2 && efectoEscritura("No sé que hago aquí, tendría que trabajar en algo relacionado con el humor");
    machineJaja === 2 && (decir="No sé que hago aquí. tendría que trabajar en algo relacionado con el humor");
}

function creador(){
    efectoEscritura("Mi creador fue Franco Jauk, para un proyecto de JavaScript");
    decir="Mi creador fue Franco Jauk, para un proyecto de JavaScript";
}

function chau(){
    const machineChau = Math.floor(Math.random()*3);
    machineChau === 0 && efectoEscritura("Nos vemos");
    machineChau === 0 && (decir="Nos vemos");
    
    machineChau === 1 && efectoEscritura("Hasta luego");
    machineChau === 1 && (decir="Hasta luego");

    machineChau === 2 && efectoEscritura("Adiós");
    machineChau === 2 && (decir="Adiós");
}
//Fin de charla normal

//Preguntas de horario
function edadMachine(){

    let momentoExacto = moment();
    let nacimiento = moment("2022-03-08")
    
    let aniosMachine = momentoExacto.diff(nacimiento,"years")
    let mesesMachine = momentoExacto.diff(nacimiento,"months")
    let diasMachine = momentoExacto.diff(nacimiento,"days")
    let minutosMachine = momentoExacto.diff(nacimiento,"minute")

    efectoEscritura ("Llevo viva "+ aniosMachine+" años, "+ mesesMachine+" meses con "+diasMachine+" días y "+minutosMachine+" minutos")
    decir = "Llevo viva "+ aniosMachine+" años, "+ mesesMachine+" meses con "+diasMachine+" días y "+minutosMachine+" minutos"
}

function horario(){
    let hora = moment().format('h:mm:ss a');
    efectoEscritura ("La hora es "+hora);
    decir="La hora es, "+hora;
}

function diaHoy(){
    let dia = moment().format('dddd');
    efectoEscritura ("Hoy es "+dia);
    decir="Hoy es, "+dia;
}

function mesHoy(){
    let mes = moment().format('MMMM');
    efectoEscritura ("El mes es "+mes);
    decir="El mes es, "+mes;
}

function añoHoy(){
    let año = moment().format('YYYY');
    efectoEscritura ("El año es "+año);
    decir="El año es, "+año;
}
//Fin de preguntas de horario


// API CLIMA CON fetch
function clima(){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=2d95cf70a7d7db93759ff982d6c65c4f&lang=es`

    fetch(url)
        .then(response =>{ return response.json()})
        .then(data =>{
            let temperatura= Math.round(data.main.temp - 273)
            let lugar = data.name
            let cielo = data.weather[0].description
            efectoEscritura ("El clima en "+ lugar +" es: "+cielo+" con temperatura de "+ temperatura +" °C");
        })

        decir="Este es el clima en tu ciudad";

}
// fin de API CLIMA CON fetch

//fin de Funciones que se usan dependiendo lo que ponga el usuario en conversaciónes
