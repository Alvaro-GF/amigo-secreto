// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function limpiarCaja(){
    let caja = document.getElementById("amigo")
    caja.value = ""
}

function seleccionarAmigo(numero){
    let amigoElegido = amigos[numero]
    let resultado = document.getElementById
    resultado.value = amigoElegido
}

function agregarAmigo(){
    let nuevoAmigo = document.getElementById("amigo").value
    limpiarCaja()
    if (isNaN(nuevoAmigo)){
        
    } else {
        amigos.push(nuevoAmigo)
    }
}

function sortearAmigo(){
    let numeroElegido = Math.floor(Math.random()*(amigos.length - 1))
    if (!(numeroElegido == 0)){
        seleccionarAmigo(numeroElegido)
    } else {
        
    }
}