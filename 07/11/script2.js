// Primeiro, pego os elementos que vou usar
const botao = document.getElementById("botao1")
const titulo = document.getElementById("titulo1")

//Depois, crio a função que faz oq eu quero
function trocaCor(){
titulo.style.color = "blue"
}

// Por ultimo, adicionamos o evento que vai disparar nossa função e ai executar oq queremos
botao.addEventListener("click", trocaCor)

const botao2 = document.getElementById("botao2")

function exibeMensagem(){
    alert("Você clicou duas vezes!")
}

botao2.addEventListener("dblclick", exibeMensagem)

const botao3 = document.getElementById("botao3")

function alteraFundo (){
    document.body.style.backgroundColor = "#" + Math.floor(Math. random() * 16777215) .toString(16)
}
botao3.addEventListener("contextmenu", alteraFundo)


const titulo2 = document.getElementById("tecla")
function teclaPressionada(event){
    titulo2.textContent = `Tecla pressionada: ${event.key}`
    
}
document.addEventListener("keydown", teclaPressionada)

function pontos(){
    contagem++
    titulo2.textContent = `Você já fez $ {contagem} pontos!`
    alert("E ai cpx!")
}
// setInterval(pontos, 3000) ESSE CHAMA INFINITAMENTE!
setTimeout(pontos, 3000) // ESSE CHAMA APENAS UMA VEZ!