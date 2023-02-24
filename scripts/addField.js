//Procurar botão
document.querySelector("#add-time").addEventListener('click', cloneField)
//Quando clicar no botão

//executar uma ação
function cloneField() {
  //Duplicar os campos. que campos?
  const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

  //pegar os campos. Que campos?
  const fields = newFieldContainer.querySelectorAll('input')

  //para cada campo, limpar
  fields.forEach(function(field) {
    // pega o field do momento e lipa ele
    field.value = ""
  })

  //Colocar na pagina. onde? 
  document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
    