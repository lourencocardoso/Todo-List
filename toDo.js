var circleFeito = document.getElementById('chec');

function mostrar(el){
    document.getElementById(el).style.display = 'block'
}
function esconde(el) {
    document.getElementById(el).style.display = 'none'
}

function TarefaFeita(el){
   document.getElementById(el).style.display = 'block'
   circleFeito.style.color = 'rgba(234, 67, 53, 1)'
}

