const modal = document.getElementById("menu-mobile")
const descriptionCard = document.querySelectorAll(".description")
const dropItArea = document.querySelectorAll(".dropIt")
const cards = document.querySelectorAll("section div div")
const inputSearch = document.getElementById("inputSearch")

for (let i = 0; i < dropItArea.length; i++) {
  dropItArea[i].style.display = "none"
}

document.addEventListener("dragleave", (e) => {
  console.log(e.target)

  for (let i = 0; i < dropItArea.length; i++) {
    dropItArea[i].style.display = "block"
  }
})

document.addEventListener("dragend", (e) => {
  // console.log(e.target)

  for (let i = 0; i < dropItArea.length; i++) {
    dropItArea[i].style.display = "none"
  }
})

/* Filtro de pesquisa pelo input */

inputSearch.addEventListener("keyup", (e) => {
  let valorDigitado = e.target.value.toLowerCase()

  for (let i = 0; i < cards.length; i++) {
    if (!cards[i].innerText.toLowerCase().includes(valorDigitado)) {
      cards[i].style.display = "none"
    } else {
      cards[i].style.display = "block"
    }
  }
})

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
