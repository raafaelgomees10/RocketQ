import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

//pegar todos botoes que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
  //Antes, o porque do event no handleClick > 
  // button.addEventListener('click', event => {})
  button.addEventListener('click', handleClick)
})

//Quando botao delete for clicado abre a modal 
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
  //Antes, o porque do event no handleClick > 
  // button.addEventListener('click', event => {})
  button.addEventListener("click", (event) => handleClick(event, false))
})

//ta recebendo event por causa de ser uma arrow function antes
function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? "Marcar como lido" : "Excluir"

  // pegando valores para passar na url
  const slug = check ? "check" : "delete"
  const roomId = document.querySelector("#room-id").dataset.id
  const questionId = event.target.dataset.id
  const form = document.querySelector(".modal form")
  // form.setAttribute("action", `/room/:room/:question/:action`)
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
  modal.open()
}

