let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3 

//FUNCIÓN PARA INICIAR EL JUEGO
function iniciarJuego(){

    //ESCONDER SECCIÓN "ATAQUE" MIENTRAS NO SE ELIJA LA MASCOTA
    let seccionSeleccionarAtaque = document.getElementById("seleccionar_ataque")
    seccionSeleccionarAtaque.style.display = "none"

    //ESCONDER SECCIÓN "ATAQUE" MIENTRAS NO SE ELIJA LA MASCOTA
    let resultadoFinal = document.getElementById("mensaje-resultado-final")
    resultadoFinal.style.display = "none"

    //ESCONDE BOTÓN "REINICIAR" MIENTRAS NO TERMINE EL JUEGO
    let seccionReiniciarJuego = document.getElementById("boton-reiniciar")
    seccionReiniciarJuego.style.display = "none"
    

    //SE CREN EL EVENTO 'CLICK' PARA SELECCIONAR MASCOTA
    let botonMascotaJugador = document.getElementById("boton_mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador, seleccionarMascotaEnemigo)

    //BOTONES EVENTO 'CLICK' PARA SELECCIONAR ATAQUE JUGADOR
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
   
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

//SELECCIONA UNA MASCOTA
function seleccionarMascotaJugador (){

    //ESCONDER SECCIÓN "MASCOTAS" MIENTRAS NO SE ELIJA LA MASCOTA
    let seccionSeleccionarMascota = document.getElementById("seleccionar_mascota")
    seccionSeleccionarMascota.style.display = "none"


    //APARECER SECCIÓN "ATAQUE" MIENTRAS NO SE ELIJA LA MASCOTA
    let seccionSeleccionarAtaque = document.getElementById("seleccionar_ataque")
    seccionSeleccionarAtaque.style.display = "block"

    //INPUT DE LAS MASCOTAS
    let inputHipodogue = document.getElementById('hipodogue')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigüeya = document.getElementById('ratigüeya')
    let inputLangostarol = document.getElementById('langostarol')
    let inputAguirrope = document.getElementById('aguirrope')
    let inputPandarol = document.getElementById('pandarol')
    
    //TEXTO DE LA MASCOTA QUE ELEGISTE
    if (inputHipodogue.checked){
            spanMascotaJugador.innerHTML = 'HIPODOGUE'
            console.log("Elegiste a Hipodogue 🐶")
        } else if (inputCapipepo.checked){
            spanMascotaJugador.innerHTML = 'CAPIPEPO'
            console.log("Elegiste a Capipepo 🐐")
        } else if (inputRatigüeya.checked){
            spanMascotaJugador.innerHTML = 'RATIGÜEYA'
            console.log("Elegiste a Ratigüeya 🐀")
        } else if (inputLangostarol.checked){
            spanMascotaJugador.innerHTML = 'LANGOSTAROL'
            console.log("Elegiste a Langostarol 🦞")
        } else if (inputAguirrope.checked){
            spanMascotaJugador.innerHTML = 'AGUIRROPE'
            console.log("Elegiste a Aguirrope 🦦")
        } else if (inputPandarol.checked){
            spanMascotaJugador.innerHTML = 'PANDAROL'
            console.log("Elegiste a Pandarol 🐼")
        } else {
            alert('ELIGE UNA MASCOTA')
            console.log("ELIGE UNA MASCOTA" )
    }

    //SELECCIONA MASCOTA ENEMIGO
    seleccionarMascotaEnemigo(1,6)
    
}

//MASCOTA DEL ENEMIGO (ALEATORIO)
function seleccionarMascotaEnemigo(min, max){
    let mascotaAleatoria = aleatorio(1,6)

    if(mascotaAleatoria == 1){
            //hipodogue
            spanMascotaEnemigo.innerHTML = 'HIPODOGUE'
            console.log("Lucharás contra Hipodogue 🐶")
        } else if (mascotaAleatoria == 2){
            //capipepo
            spanMascotaEnemigo.innerHTML = 'CAPIPEPO'
            console.log("Lucharás contra Capipepo 🐐")
        } else if (mascotaAleatoria == 3){
            //ratigüeya
            spanMascotaEnemigo.innerHTML = 'RATIGÜEYA'
            console.log("Lucharás contra Ratigüeya 🐀")
        } else if (mascotaAleatoria == 4){
            //langostarol
            spanMascotaEnemigo.innerHTML = 'LANGOSTAROL'
            console.log("Lucharás contra Langostarol 🦞")
        } else if (mascotaAleatoria == 5){
            //aguirrope
            spanMascotaEnemigo.innerHTML = 'Aguirrope'
            console.log("Lucharás contra Aguirrope 🐦")
        } else {
            //pandarol
            spanMascotaEnemigo.innerHTML = 'PANDAROL'
            console.log("Lucharás contra Pandarol 🐼")
    }
}

//ATAQUES
//FUNCIÓN ATAQUE DE FUEGO
function ataqueFuego(){
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
    console.log(ataqueJugador)
    console.log(ataqueEnemigo)
}

//FUNCIÓN ATAQUE DE AGUA
function ataqueAgua(){
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo()
    console.log(ataqueJugador)
    console.log(ataqueEnemigo)
}

//FUNCIÓN ATAQUE DE TIERRA
function ataqueTierra(){
    ataqueJugador = 'TIERRA 🌱'
    ataqueAleatorioEnemigo()
    console.log(ataqueJugador)
    console.log(ataqueEnemigo)
}

//FUNCIÓN ATAQUE ALEATORIO DEL ENEMIGO
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO 🔥'
        } else if (ataqueAleatorio == 2){
            ataqueEnemigo = 'AGUA 💧'
        } else if (ataqueAleatorio == 3){
            ataqueEnemigo = 'TIERRA 🌱'
        }
        else {
        ataqueEnemigo = 'SE PRODUJO UN ERROR'
    }
    
    combate()
     
   
}



function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    
    //1 Fuego  FUEGO VENCE TIERRA
    //2 Agua  AGUA VENCE FUEGO
    //3 Tierra  TIERRA VENCE AGUA
    
    if ( ataqueJugador == ataqueEnemigo){
        //console.log("EMPATE 🤝")
        crearMensaje("EMPATE 🤜🤛")
        } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱'){
            //console.log("GANASTE 🏆😎")
            crearMensaje("GANASTE 🏆😎")   
            vidasEnemigo = vidasEnemigo - 1
            spanVidasEnemigo.innerHTML = vidasEnemigo     
        } else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥'){
            //console.log("GANASTE 🏆😎")
            crearMensaje("GANASTE 🏆😎")
            vidasEnemigo = vidasEnemigo - 1
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧'){
            //console.log("GANASTE 🏆😎")
            crearMensaje("GANASTE 🏆😎")
            vidasEnemigo = vidasEnemigo - 1
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {
            //console.log("PERDISTE 💔😢")
            crearMensaje("PERDISTE 💔😢")
            vidasJugador = vidasJugador - 1
            spanVidasJugador.innerHTML = vidasJugador
    }
    
    //REVISAR LAS VIDAS
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("VENCISTE 🥳🎉🎊 EL ENEMIGO SE QUEDÓ SIN VIDAS")
    } else if (vidasJugador == 0){
        crearMensajeFinal("FUISTE DERROTADO 🥺 TE HAS QUEDADO SIN VIDAS")
    }
}

//MENSAJE RESULTADO BATALLA
function crearMensaje(resultado){
    let mensajeJugador = document.getElementById("mensajes")
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = ("ATACASTE CON " + ataqueJugador + ". EL ENEMIGO ATACÓ CON " + ataqueEnemigo + " = " + resultado )
    
    mensajeJugador.appendChild(parrafo)
    
}

//MENSAJE RESULTADO BATALLA
function crearMensajeFinal(resultadoFinal){
        
    let seccionMensajes = document.getElementById("mensaje-resultado-final")
    
    let parrafo = document.createElement("h3")
    parrafo.innerHTML = resultadoFinal    
    //alert(resultadoFinal + " REINICIA EL JUEGO 😉")
    seccionMensajes.appendChild(parrafo)
    
    //DESABILITAR BOTONES DE ATAQUES AL TERMINARSE LAS VIDAS 
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    
    

    //MUESTRA BOTÓN "REINICIAR" Y MENSAJE FINAL AL TERMINAR EL JUEGO
    let seccionReiniciarJuego = document.getElementById("boton-reiniciar")
    seccionReiniciarJuego.style.display = "block"
    let resultadoFinalCombate = document.getElementById("mensaje-resultado-final")
    resultadoFinalCombate.style.display = "block"
}

//FUNCIÓN PARA NRO ALEATORIO

//BOTÓN REINICIAR JUEGO
function reiniciarJuego(){
    //location.reload()
    location.reload(true);
}

//FUNCIÓN ALEATORIO (ELIGE MASCOTA Y ATAQUE ENEMIGO)
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//Esta línea le manda esperar a que cargue toda la página web para ejecutar la lógica JS
window.addEventListener("load", iniciarJuego) 



