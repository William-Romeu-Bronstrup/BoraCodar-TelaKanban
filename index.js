const modal = document.getElementById("menu-mobile")
const descriptionCard = document.querySelectorAll(".description")
const cards = document.querySelectorAll("section div div")
const inputSearch = document.getElementById("inputSearch")

/* Filtro de pesquisa pelo input */

inputSearch.addEventListener("keyup", (e) => {
  let valorDigitado = e.target.value

  for (let i = 0; i < cards.length; i++) {
    if (!cards[i].innerText.includes(valorDigitado)) {
      cards[i].style.display = "none"

      //cards[i].parentElement.children[0].style.display = "none"
    } else {
      cards[i].style.display = "block"
    }
  }
})

/* Description Card Length */

for (let i = 0; i < descriptionCard.length; i++) {
  if (descriptionCard[i].innerText.length > 70) {
    let teste = descriptionCard[i].innerText.substring(0, 65).trim()

    descriptionCard[i].innerText = `${teste}...`
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

  console.log(ev.target)

  let data = ev.dataTransfer.getData("text")

  ev.target.appendChild(document.getElementById(data))
}

function allowDrop(ev) {
  ev.preventDefault()
}
