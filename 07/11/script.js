/*Alterando elementos*/ 
/*Assim pegamos um elemento pelo id*/
const meuTitulo = document.getElementById("titulo")
meuTitulo.style.color = "blue"

const meuSubtitulo = document.getElementsByClassName("subtitulo") //pega todos os elementos da classe (é um array)

for(let i = 0; i < meuSubtitulo.length;i++){
    meuSubtitulo[i].style.color = "green"
}
const subtitulo = document.querySelector(".subtitulo")//Pega o PRIMEIRO elemento que ele achar com essa classe
subtitulo.style.color = "purple"

const substitulo2 = document.querySelectorAll(".subtitulo") //Pega todos os elementos da classe (é um array). é parecidp com getElementByClassName
substitulo2[2].style.color = "orange"


//Eles mudam na minha pagina os dois tem a mesma função
meuTitulo.innerText = "Oi Carlinhos"
//meuTitulo.textcontent = "Olá galera"

// Criando elementos novos
const novoParagrafo = document.createElement("p") //document.createElement Significa Criar elemento

novoParagrafo.textContent = "Aprendendo a manipular DOM"

document.body.appendChild(novoParagrafo) // appendChild Significa adicione um filho. Aqui eu estou dizendo: dentro do documento HTML, la em body, adicione o novo paragrafo que criei

//REMOVER ELEMENTOS
const paragrafoRemover = document.getElementById("remover")

paragrafoRemover.remove() // Remove significa remover, e remove o elemento da minha página