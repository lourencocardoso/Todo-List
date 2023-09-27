const localStorageKey = 'to-do-list-gn'
let cont = 0
let btnActualizarToDo = document.getElementById('btnEditaTodo')
const filterElement = document.getElementById('pesquisar')
const cards = document.querySelectorAll('.cards li')
const novoTitulo = document.getElementById('nweTodo')

function validateIfExistsNewTask()
{   
    let values     = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let exists     = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask()
{   
    
    let input = document.getElementById('input-new-task')
    let coment = document.getElementById('to-do-descri')
    let dataDt = document.getElementById('data')
     
    input.style.border = ''
    // validation
    if(!input.value)
    {
        input.style.border = '1px solid red'
        alert('Digite algo para inserir em sua lista')
    }
    else if(validateIfExistsNewTask())
    {
        alert('Já existe uma task com essa descrição')
    }
    else
    {
        // increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value,
            comentario: coment.value,
            DataToDo: dataDt.value,
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
    input.value = ''
}

function showValues()
{ 
   
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = "";
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li><div class='caixaTodo'><i class='bx bx-check' id='bom'></i><i class='bx bx-circle' id='chec' onclick="TarefaFeita('bom')"></i> <h2>${values[i]['name']}</h2> </div><button id='btn-ok' onclick="RederencDetalhes(${i})" ><i class='bx bx-chevron-right'></i></button></li> `
    }
}

//  onclick='removeItem("${values[i]['name']}")'

function RederencDetalhes (i2) { 
    window.location.href = "file:///C:/Users/Rui/Desktop/NovoTodo/TodoDetalhes.html"; 
    let values = JSON.parse(localStorage.getItem(localStorageKey))  
    sessionStorage.setItem("comentario",values[i2]["comentario"])
    sessionStorage.setItem("nome",values[i2]["name"])
    sessionStorage.setItem("Data",values[i2]["DataToDo"])
    console.log(values[i2]["name"])
}

function reload(){ 
    let tituloTodo = document.getElementById('tela-detalhes');  
    tituloTodo.innerHTML = `<h1 id="tituloTodo">${sessionStorage.getItem("nome")}</h1> <span id="detalhesDaTarefa">${sessionStorage.getItem("comentario")}</span> <h3>${sessionStorage.getItem("Data")}</h3><p`; 
    
}

function TarefaFeita (){
    let TarefaFeita = document.getElementById('bom')
    let CircTodo = document.getElementById('chec')
     TarefaFeita.style.color = 'red'
     TarefaFeita.style.display = 'block'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
     CircTodo.style.color= 'red'
}

function voltar(){
   window.location.href = "file:///C:/Users/Rui/Desktop/NovoTodo/home.html?to-do-descri=wrweqr"
}

function removeItem(data)
{
    window.location.href = "file:///C:/Users/Rui/Desktop/NovoTodo/home.html?to-do-descri=wrweqr"
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    confirm = "deseja apagar a Tarefa?"
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
} 


function mostrar(el){
    document.getElementById(el).style.display = 'block'
}


// check mudificar js