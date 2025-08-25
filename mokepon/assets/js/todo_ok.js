//ARCHIVO CON JS AVANZADO

///*** function iniciarJuego() */

const resultadoFinal = document.getElementById("seccion_mensaje_final")

const botonReiniciarJuego = document.getElementById("seccion_reiniciar")
const botonMascotaJugador = document.getElementById("boton_mascota")
// const botonFuego = document.getElementById("boton_fuego")
// const botonAgua = document.getElementById("boton_agua")
// const botonTierra = document.getElementById("boton_tierra")
const botonReiniciar = document.getElementById("boton_reiniciar")

///*** function seleccionarMascotaJugador() */
const seccionSeleccionarMascota = document.getElementById("seleccionar_mascota")
const seccionSeleccionarAtaque = document.getElementById("seleccionar_ataque")
let spanMascotaJugador = document.getElementById("mascota_jugador")
let spanMascotaEnemigo = document.getElementById("mascota_enemigo")

///*** function combate() */
const spanVidasJugador = document.getElementById("total_vidas_jugador") 
const spanVidasEnemigo = document.getElementById("total_vidas_enemigo") 

///*** function aparece detalle batalla */
const seccionDetallesBatallas = document.getElementById("seccion_mensajes")  

///*** function crearMensaje() */
const ataquesDelJugador = document.getElementById("ataque_jugador")
const ataquesDelEnemigo = document.getElementById("ataque_enemigo")
const seccionMensajes = document.getElementById("resultado_combate")

///*** function crearMensajeFinal() */
const seccionMensajeFinal = document.getElementById("seccion_mensaje_final")

///*** function reiniciar() */
const seccionReiniciar = document.getElementById("seccion_reiniciar")
const resultadoFinalCombate = document.getElementById("seccion_mensaje_final")

//renderizar las tarjetas de mokepones
const contenedorTarjetas = document.getElementById("contenedor_Tarjetas")
const contenedorAtaques = document.getElementById("contenedor_Ataques")


let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHipodogue
let inputCapipepo 
let inputRatigüeya
let inputLangostarol
let inputAguirrope
let inputPandarol
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let mascotaJugador
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon{
    constructor (nombre, foto, vidas){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
    }
}

let hipodogue = new Mokepon ("Hipodogue", "./assets/img/hipodogue.png", 3)
let capipepo = new Mokepon ("Capipepo", "./assets/img/capipepo.png", 3)
let ratigüeya = new Mokepon ("Ratigüeya", "./assets/img/ratigüeya.png", 3)
let langostarol = new Mokepon ("Langostarol", "./assets/img/langostarol.png", 3)
let aguirrope = new Mokepon ("Aguirrope", "./assets/img/aguirrope.png", 3)
let pandarol = new Mokepon ("Pandarol", "./assets/img/pandarol.png", 3)

hipodogue.ataques.push (
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "AGUA 💧", id: "boton_agua"}
)

capipepo.ataques.push (
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"}
)

ratigüeya.ataques.push (
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"}
)

langostarol.ataques.push (
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"}
)

aguirrope.ataques.push (
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"}
)
pandarol.ataques.push (
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"}
)

mokepones.push(hipodogue,capipepo,ratigüeya, langostarol, aguirrope, pandarol)

//FUNCIÓN PARA INICIAR EL JUEGO
function iniciarJuego(){
    //ESCONDER SECCIÓN "ATAQUE" MIENTRAS NO SE ELIJA LA MASCOTA
    seccionSeleccionarAtaque.style.display = "none"    
    //ESCONDER SECCIÓN "ATAQUE" MIENTRAS NO SE ELIJA LA MASCOTA
    resultadoFinal.style.display = "none"
    //ESCONDER SECCIÓN "DETALLE BATALLAS" MIENTRAS NO COMIENCE BATALLA    
    seccionDetallesBatallas.style.display = "none"
    //ESCONDE BOTÓN "REINICIAR" MIENTRAS NO TERMINE EL JUEGO    
    botonReiniciarJuego.style.display = "none"    

    //SE CREN EL EVENTO 'CLICK' PARA SELECCIONAR MASCOTA    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id="${mokepon.nombre}"/>
        <label  class="card_mascota" for="${mokepon.nombre}">
        <img src="${mokepon.foto}" alt="${mokepon.nombre}" >
        <h4>${mokepon.nombre}</h4>
        
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

         inputHipodogue = document.getElementById('Hipodogue')
         inputCapipepo = document.getElementById('Capipepo')
         inputRatigüeya = document.getElementById('Ratigüeya')
         inputLangostarol = document.getElementById('Langostarol')
         inputAguirrope = document.getElementById('Aguirrope')
         inputPandarol = document.getElementById('Pandarol')
        // console.log(mokepon)
    })
        
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)    
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
    console.log("funcion_iniciar_juego_funcionando")
}

//SELECCIONA UNA MASCOTA
function seleccionarMascotaJugador (){
    //ESCONDER SECCIÓN "MASCOTAS" Y SECCION ATAQUE MIENTRAS NO SE ELIJA LA MASCOTA    
    seccionSeleccionarMascota.style.display = "none"
    seccionSeleccionarAtaque.style.display = "flex"
    
    //TEXTO DE LA MASCOTA QUE ELEGISTE
    if (inputHipodogue.checked){
            spanMascotaJugador.innerHTML = inputHipodogue.id
            mascotaJugador = inputHipodogue.id
        } else if (inputCapipepo.checked){
            spanMascotaJugador.innerHTML = inputCapipepo.id
            mascotaJugador = inputCapipepo.id
        } else if (inputRatigüeya.checked){
            spanMascotaJugador.innerHTML = inputRatigüeya.id
            mascotaJugador = inputRatigüeya.id
        } else if (inputLangostarol.checked){
            spanMascotaJugador.innerHTML = inputLangostarol.id
            mascotaJugador = inputLangostarol.id
        } else if (inputAguirrope.checked){
            spanMascotaJugador.innerHTML = inputAguirrope.id
            mascotaJugador = inputAguirrope.id
        } else if (inputPandarol.checked){
            spanMascotaJugador.innerHTML = inputPandarol.id
            mascotaJugador = inputPandarol.id
        } else {
            alert('ELIGE UNA MASCOTA')
    }
    console.log("funcion_seleccionar_mascota_funcionando")

    extraerAtaques(mascotaJugador)
    //SELECCIONA MASCOTA ENEMIGO
    seleccionarMascotaEnemigo(1,6)
    console.log("funcion_seleccionar_mascota_enemigo_funcionando")
    
}

function extraerAtaques(mascotaJugador){
    let ataques

    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
            <button id="${ataque.id}" class= "btn-ataque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })


    botonFuego = document.getElementById("boton_fuego")
    botonAgua = document.getElementById("boton_agua")
    botonTierra = document.getElementById("boton_tierra")

  //BOTONES EVENTO 'CLICK' PARA SELECCIONAR ATAQUE JUGADOR
    botonFuego.addEventListener('click', ataqueFuego)    
    botonAgua.addEventListener('click', ataqueAgua)    
    botonTierra.addEventListener('click', ataqueTierra) 

}


//MASCOTA DEL ENEMIGO (ALEATORIO)
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)  
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre

    console.log("funcion_seleccionar_mascota_enemigo_funcionando")
}

//ATAQUES
//FUNCIÓN ATAQUE DE FUEGO

function ataqueFuego(){
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
    console.log("funcion_fuego_perfecta")

}

//FUNCIÓN ATAQUE DE AGUA
function ataqueAgua(){
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo()
    console.log("funcion_agua_perfecta")
}

//FUNCIÓN ATAQUE DE TIERRA
function ataqueTierra(){
    ataqueJugador = 'TIERRA 🌱'
    ataqueAleatorioEnemigo()
    console.log("funcion_tierra_perfecta")
}

//FUNCIÓN ATAQUE ALEATORIO DEL ENEMIGO
function ataqueAleatorioEnemigo(){
    const ataqueAleatorio = aleatorio(1,3)
    
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
    console.log("funcion_ataque_aleatorio_funcionando")

    combate()
    console.log("funcion_ataque_aleatorio_llamó_función_combate")  
   
}

function combate(){
    //1 Fuego  FUEGO VENCE TIERRA   //2 Agua  AGUA VENCE FUEGO   //3 Tierra  TIERRA VENCE AGUA  
    //APARECE SECCIÓN DETALLE DE LAS BATALLAS
    seccionDetallesBatallas.style.display = "flex"
    
    //vidas de los jugadores 

    //POSIBLES RESULTADOS
    if ( ataqueJugador == ataqueEnemigo){
        //console.log("EMPATE 🤝")
        crearMensaje("EMPATE 🤜🤛")
        } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱'){
            //console.log("GANASTE 🏆😎")
            crearMensaje("GANASTE 🏆😎")   
            vidasEnemigo--
            total_vidas_enemigo.innerHTML = vidasEnemigo     
        } else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥'){
            //console.log("GANASTE 🏆😎")
            crearMensaje("GANASTE 🏆😎")
            vidasEnemigo--
            total_vidas_enemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧'){
            //console.log("GANASTE 🏆😎")
            crearMensaje("GANASTE 🏆😎")
            vidasEnemigo--
            total_vidas_enemigo.innerHTML = vidasEnemigo
        } else {
            //console.log("PERDISTE 💔😢")
            crearMensaje("PERDISTE 💔😢")
            vidasJugador--
            total_vidas_jugador.innerHTML = vidasJugador
    }
    console.log("función_combate_funcionando_bien")
    console.log("funcion_combate_llamando_función_revisarVidas")
    //REVISAR LAS VIDAS
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("VENCISTE 🥳🎉🎊 EL ENEMIGO SE QUEDÓ SIN VIDAS")
    } else if (vidasJugador == 0){
        crearMensajeFinal("FUISTE DERROTADO 🥺 TE HAS QUEDADO SIN VIDAS")
    }

    console.log("funcion_revisar_vidas_funcionando")
}

//MENSAJE RESULTADO BATALLA INDIVIDUAL
function crearMensaje(resultado){    
    //CREAMOS EL ELEMENTO "PARRAFO" 
    const nuevoAtaqueDelJugador = document.createElement('p')
    const nuevoAtaqueDelEnemigo = document.createElement('p')

    //AGREGAMOS LA INFORMACIÓN AL ELEMENTO CREADO
    seccionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    //INDICAMOS DONDE SE VA AGREGAR EL NUEVO ELEMENTO
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    console.log("funcion_crear_mensaje_trabajando_bien")
}


//MENSAJE RESULTADO DE TODAS LAS BATALLA
function crearMensajeFinal(resultadoFinal){       
    const parrafo = document.createElement("h3")
    parrafo.innerHTML = resultadoFinal    
    seccionMensajeFinal.appendChild(parrafo)

    //DESABILITAR BOTONES DE ATAQUES AL TERMINARSE LAS VIDAS 
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
        
    //PARA MOSTRAR SECCION REINICIAR AL TERMINARSE LAS VIDAS
    seccionReiniciar.style.display = "flex"
    //MOSTRAR EL RESULTADO FINAL DE LAS BATALLAS AL TERMINARSE LAS VIDAS
    resultadoFinalCombate.style.display = "flex"

    console.log("funcion_crear_mensaje_final_funcionando_perfecto")
}

//BOTÓN REINICIAR JUEGO
function reiniciarJuego(){
    location.reload(true);
    console.log("funcion_reiniciar_juego_Funcionando")
}

//FUNCIÓN ALEATORIO (ELIGE MASCOTA Y ATAQUE ENEMIGO)
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//Esta línea le manda esperar a que cargue toda la página web para ejecutar la lógica JS
window.addEventListener("load", iniciarJuego) 


