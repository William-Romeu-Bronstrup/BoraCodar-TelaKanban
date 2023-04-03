const modal = document.getElementById("menu-mobile")
const descriptionCard = document.querySelectorAll(".description")
const dropItArea = document.querySelectorAll(".dropIt")

const cards = document.querySelectorAll("section div div")
const cardsTitle = document.querySelectorAll("section div div h4")
const cardsDescription = document.querySelectorAll("section div div p")
const cardsTags = document.querySelectorAll("section div div span")

const inputSearch = document.getElementById("inputSearch")
const buttonFilter = document.getElementById("btnFilter")
const filter = document.querySelector(".filter")
const filterItems = document.querySelectorAll(".filter ul li")
const filtredItems = document.getElementById("filtrosSelecionados")

/* Deixa as áreas do drop "vazias" como o display none */

for (let i = 0; i < dropItArea.length; i++) {
  dropItArea[i].style.display = "none"
}

while (filtredItems.hasChildNodes()) {
  filtredItems.removeChild(filtredItems.firstChild)
}

document.addEventListener("dragleave", (e) => {
  for (let i = 0; i < dropItArea.length; i++) {
    dropItArea[i].style.display = "block"
  }
})

document.addEventListener("dragend", (e) => {
  for (let i = 0; i < dropItArea.length; i++) {
    dropItArea[i].style.display = "none"
  }
})

/* Mostra as opções de filtro */

buttonFilter.addEventListener("click", () => {
  if (filter.hasAttribute("id")) {
    filter.removeAttribute("id")
  } else {
    filter.setAttribute("id", "show")
  }
})

/* Escolha da opção de filtro */

for (let i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener("click", (e) => {
    let filtro = e.target.innerText.toLowerCase()

    let span = document.createElement("span")

    span.innerText = `* ${filtro}`
    // corrigir erro de validação

    for (let child of filtredItems.children) {
      console.log(child.innerText)
    }

    filterItems[i].classList.toggle("itemSelecionado")
    filtredItems.appendChild(span)
  })
}

/* Filtro de pesquisa pelo input */

inputSearch.addEventListener("keyup", (e) => search(e))

function search(e) {
  let valorDigitado = e.target.value.toLowerCase()

  for (let i = 0; i < cards.length; i++) {
    if (!cards[i].innerText.toLowerCase().includes(valorDigitado)) {
      cards[i].style.display = "none"
    } else {
      cards[i].style.display = "block"
    }
  }
}

/* Description Card Length */

for (let i = 0; i < descriptionCard.length; i++) {
  if (descriptionCard[i].innerText.length > 70) {
    let search = descriptionCard[i].innerText.substring(0, 65).trim()

    descriptionCard[i].innerText = `${search}...`
  }
}

/* Modal */
function openModal() {
  modal.showModal()
}

function closeModal() {
  modal.close()
}

/*Drag and Drop */

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id)
}

function drop(ev) {
  ev.preventDefault()

  if (ev.target.className == "dropIt") {
    let data = ev.dataTransfer.getData("text")

    ev.target.parentElement.appendChild(document.getElementById(data))
  } else {
    console.log("nao deixu")
  }
}

function allowDrop(ev) {
  ev.preventDefault()
}
