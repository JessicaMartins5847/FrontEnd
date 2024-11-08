const meuTitulo = document.getElementById("titulo")
meuTitulo.style.backgroundColor = "pink"

const meuSubtitulo = document.getElementsByClassName("subtitulo")
meuSubtitulo[0].style.fontSize = "20px"

const minhaDiv = document.querySelector('criaParagrafo')
const novoParagrafo = document.createElement ("p")
novoParagrafo.textContent = "Novo paragrafp adicionado"
minhaDiv.appendChild(novoParagrafo)
const meuSubtitulos = document.querySelectorAll(".subtitulo")
meusSubtitulos[0].remove()