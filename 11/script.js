function responder(correta) {
if (correta) {
    //Avançar para a proxima pergunta
    alert("Resposta correta! Indo para proxima pergunta...");
     
}  else   { //Entrar no modo tela cheia e exibir imagem de erro
       setTimeout(() => {
        goFullScreen ();
        exibirErro();
       },200);


    }

}
//Função pra exibira imagem de erro e tocar o som
function exibirErro() {
    const telaCheiaErro = document.getElementById("telaCheiaErro" );
    const somErro = document.getElementById("somErro");

    telaCheiaErro.style.display = "flex";
    somErro.play();
    
    telaCheiaErro.addEventListener("click", () => {
        telaCheiaErro.style.display = "none"
        sairtelaCheia()
    })
}

//Função para entrar no modo de tela cheia
function goFullScreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) { //Firefox
        elem.mozRequestFullScreen()
    }else if (elem.webkitRequestFullscreen) { //Chrome, Safari e Opera
        elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen()
    }
    }

    // Função para sair do modo tela cheia
    function sairTelaCheia (){
        if (document.exitFullscreenx){
            document.exitFullscreen();
        } else if (document.mozRequestFullScreen) { // Firefox
            document.mozRequestFullScreen();
        }else if (document.webkitRequestFullscreen){ //Chrome, Safari e Opera
            document.webkitRequestFullscreen

        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen

        }
    }