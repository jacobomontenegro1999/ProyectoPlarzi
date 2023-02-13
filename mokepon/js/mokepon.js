
let ataquejugador
let ataqueEnemigo
let vidasjugador = 3
let vidasEnemigo = 3
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'none'
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarjuego)
    }
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipego = document.getElementById('Capipego')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'        
    } 
    else if(inputCapipego.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }
    else {
        alert('Debes seleccionar primero una mascota')
    }
    seleccionarMascotaEnemigo()

    
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (mascotaAleatorio ==2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
function ataqueFuego(){
    ataquejugador ='Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataquejugador ='Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataquejugador ='Tierra'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio ==1){
        ataqueEnemigo = 'Fuego'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    }else {
        ataqueEnemigo = 'Tierra'
    }
    combate()
}
function combate(){
    let spanvidasJugador = document.getElementById('vidas-jugador')
    let spanvidasEnemigo = document.getElementById('vidas-enemigo')
    if (ataqueEnemigo == ataquejugador) {
        crearMensaje("Empate")
    } else if (ataquejugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataquejugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataquejugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste")
        vidasjugador--
        spanvidasJugador.innerHTML = vidasjugador
    }  
    revisarVidas()               
}
function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones, Gananaste!!")
    }else if (vidasjugador == 0){
        crearMensajeFinal("Perdiste!! :( ")
    }
        
}

function crearMensaje(resultado){
    let sectioMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataquejugador + ', el enemigo ataco con ' + ataqueEnemigo +' -' +resultado 
    sectioMensajes.appendChild(parrafo)
}
function crearMensajeFinal(resultadoFinal){
    let sectionSeleccionarReiniciar = document.getElementById('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'block'
    let sectioMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectioMensajes.appendChild(parrafo)
    
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    }
        
function reiniciarjuego()
{
    location.reload()
}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)

