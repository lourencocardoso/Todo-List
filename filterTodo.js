const filterElement = document.getElementById('pesquisar')

const cards = document.querySelectorAll('.cards li')


filterElement.addEventListener('input', filterCards)
 function filterCards (){
  if(filterElement.value != ''){

    for(let card of cards){
 
      let title = card.querySelector('h2')

      title = title.textContent.toLocaleLowerCase()
      console.log(title)

      let filterText = filterElement.value.toLocaleLowerCase()

      if(!title.includes(filterText)){
           card.style.display = "none"
      }
      else{
          card.style.display = "block"
      }
    }
  }
  else{
    for(let card of cards){
       card.style.display = "block"
    }
  }
 }

 // consumir API de ToDo-List com JS
 // Entender o que API, e como fonciona 