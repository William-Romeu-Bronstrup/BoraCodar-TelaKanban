const modal = document.getElementById("menu-mobile")
const descriptionCard = document.querySelectorAll(".description")

for (let i = 0; i < descriptionCard.length; i++) {
  if (descriptionCard[i].innerText.length > 70) {
    let teste = descriptionCard[i].innerText.substring(0, 65).trim()

    descriptionCard[i].innerText = `${teste}...`
  }
}

function openModal() {
  modal.showModal()
}

function closeModal() {
  modal.close()
}
