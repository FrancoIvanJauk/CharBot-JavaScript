
window.speechSynthesis.getVoices() //Traer voz para machine


// Localización para API del clima
navigator.geolocation && navigator.geolocation.getCurrentPosition( posicion =>{
    longitud = posicion.coords.longitude
    latitud = posicion.coords.latitude
})
// Fin de Localización para API del clima


//Funcion que se ejecuta al enviar el mensaje
function machine(){

    let respuesta = document.getElementById("respuesta");
    let textoUsuaruio = document.getElementById("text").value;
    let texto = document.getElementById("text").value.toUpperCase()
    let usuario = document.getElementById("usuario");

    usuario.innerHTML= "Tú: " + textoUsuaruio;//agrega el "Tú" en lo que diga el usuario


    decir="Lo siento, no entiendo lo que dices"//Lo dice si no conoce la palabra

//conversaciónes

    //charla normal
    let conversacionHola =/HOLA|HOLI|BUENAS|BUEN DIA|BUEN DÍA|BUENOS DIAS|BUENOS DÍAS|PROYECTO HECHO CON JAVASCRIPT|PROYECTO HECHO CON JAVA SCRIPT/;
    conversacionHola.test(texto) == true && hola();

    let conversacionNombre =/TU NOMBRE|COMO TE LLAMAS|COMO TE DICEN/;
    conversacionNombre.test(texto) == true && nombre();

    let conversacionEstado =/COMO ESTAS|COMO TE SIENTES|COMO TE SENTIS|COMO TE SENTÍS|TU ESTADO/;
    conversacionEstado.test(texto) == true && estado();

    let conversacionHaces =/HACES/;
    conversacionHaces.test(texto) == true && haces();

    let conversacionVives =/DONDE VIVES|DÓNDE VIVES|DÓNDE VIVÍS|DONDE VIVIS|DONDE VIVÍS|LUGAR VIVES|LUGAR VIVÍS|DONDE ESTAS|DONDE ESTÁS/;
    conversacionVives.test(texto) == true && vivoEn();

    let conversacionSalir =/TE SACO|SACARTE|COMO HAGO|CÓMO HAGO/;
    conversacionSalir.test(texto) == true && sacar();

    let conversacionBurla =/SALCHIPAPA123/;
    conversacionBurla.test(texto) == true && burla();

    let conversacionNo ="NO";
    texto == conversacionNo && no();

    let conversacionSi ="SI";
    texto == conversacionSi && si();

    let conversacionBien ="BIEN";
    texto == conversacionBien && bien();

    let conversacionEstadoUsuario = /SIENTO BIEN|ESTOY BIEN|TODO BIEN|DE MARAVILLA|GENIAL|SIENTO PERFECTO/;
    conversacionEstadoUsuario.test(texto) == true && bien();

    let conversacionChiste = /CHISTE/;
    conversacionChiste.test(texto) == true && chiste();

    let conversacionGoogle = /ENDORFINA|BUSCAR|PORQUE/;
    conversacionGoogle.test(texto) == true && google();

    let conversacionJaja = /JAJA/;
    conversacionJaja.test(texto) == true && jaja();

    let conversacionCreador = /CREADOR|TE CREO|CREÓ|PROGRAMO|PROGRAMÓ|PADRE|TE HIZO/;
    conversacionCreador.test(texto) == true && creador();

    let conversacionChau = /CHAU|ADIOS|ADIÓS|NOS VEMOS|HASTA LUEGO|NOS VEMOS LUEGO/;
    conversacionChau.test(texto) == true && chau();
    //fin de charla normal

    //preguntas sobre horario que usan libreria moment()
    let edad = /CUANTOS AÑOS TENES|CUANTOS AÑOS TIENES|QUE EDAD TENES|QUE EDAD TIENES|AÑOS TUYOS|CUAL ES TU EDAD|TUS AÑOS|NACISTE|NACIDO|TU NACIMIENTO/;
    edad.test(texto) == true && edadMachine();

    let hora = /QUE HORA ES|QUIERO SABER LA HORA|HORARIO/;
    hora.test(texto) == true && horario();

    let dia =/QUE DIA ES HOY|QUE DÍA ES HOY|HOY QUE DIA ES|HOY QUE DÍA ES|QUE DIA ES|QUE DÍA ES|QUIERO SABER EL DIA|QUIERO SABER EL DÍA/;
    dia.test(texto) == true && diaHoy();

    let mes = /QUE MES ES HOY|QUE MES ES|QUIERO SABER EL MES/;
    mes.test(texto) == true && mesHoy();

    let año = /QUE AÑO ES|AÑO ACTUAL|QUIERO SABER EL AÑO/;
    año.test(texto) == true && añoHoy();
    // fin de preguntas sobre horario que usan libreria moment()

    //preguntas sobre clima que usan una api con fetch
    let climaActual = /CUANTOS GRADOS HACEN|HACE CALOR|TEMPERATURA|CLIMA|VA A LLOVER/;
    climaActual.test(texto) == true && clima();
    // fin de preguntas sobre clima que usan una api con fetch

    //juego que usa local storage
    let ppt = /JUGAMOS|JUGUEMOS|QUIERO JUGAR/;
    ppt.test(texto) == true && OpcionesPpt(); 

    let piedra = /PIEDRA/;
    piedra.test(texto) == true && machinePiedra();

    let papel = /PAPEL/;
    papel.test(texto) == true && machinePapel();

    let tijera = /TIJERA/;
    tijera.test(texto) == true && machineTijera();

    let estadistica = /ESTADISTICA|ESTADÍSTICA/;
    estadistica.test(texto) == true && estadisticas();
    //fin de juego que usa local storage

//fin de conversaciónes

    //voz machine
    let respuestaVoz = decir
    let voz = new SpeechSynthesisUtterance(respuestaVoz)
    voz.voice = window.speechSynthesis.getVoices()[13];
    speechSynthesis.speak(voz)
    //fin de voz machine

    //Limpieza de las frases introducidas por el usuario
    decir="";
    respuesta.innerText="";
    document.getElementById("text").value="";
    // Fin de limpieza de las frases introducidas por el usuario
}
//Fin de la funcion que se ejecuta al enviar el mensaje


//enviar con tecla enter
function tecla(){
    let teclaEnter = event.keyCode;
    teclaEnter == 13  && machine();
};
window.onkeydown = tecla;
//fin de enviar con tecla enter


//efecto escritura
let efectoEscritura = separacion => {
    let arrRespuesta = separacion.split("");
    let i = 0;
    let print = setInterval(function(){
        respuesta.innerHTML += arrRespuesta[i];
        i++
    i == arrRespuesta.length && clearInterval(print)
    },50)
}
//fin de efecto escritura


//Libreria moment.js poner en español
moment.lang('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_miércoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
  }
  );
//Fin de libreria moment.js poner en español
