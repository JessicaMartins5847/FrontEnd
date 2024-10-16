/* Selecione o paragrafo e o botão usando getElementById*/ 

const meuParagrafo = document.getElementById('texto'); /*no documento html, pegue o elemento que tem o id "texto"*/

const meuBotao = document.getElementById('meuBotao') /*No documento html, pegue o elemento que tem o id "meuBotao"*/

/*Define a função que altera o conteúdo do parágrafo*/
function alterarTexto () { 
    meuParagrafo.textContent = 'O texto foi alterado!';
}

meuBotao.addEventListener('dblclick', alterarTexto); /* Adiciona um event listener ao botão para escutar o clique*/ 


/*click: Ocorre quando o elemento é clicado
 dblclick: ocorre quando o elemento é clicado 2 vezes
 mousedown: Ocorre quando o botão do mouse é pressionado
 mouseout: Ocorre quando o cursor do mouse sai de cima do elemento
 mousemove: Ocorre quando o mouse é movido dentro do elemento
 mouseup: Ocorre quando o botão do mouse é solto
 mouseover Ocorre quando o cursor do mouse passa sobre o elemento*/ 

 /*atividade 1: adicion eoutro botão eque mude a cor do parágrafo. DICA: USE meuParágrafo.style.color = 'red' Para poder alterar a cor do elemento*/

 /*ATIVIDADE2: Adicione outro botão que mude a cor de fundo dele mesmo quando clicado duas vezes */ 

 /*ATIVIDADE 3: Atere a função 'alterartexto' para que, toda vez que clicar, o texto altera entre 'Clique Aqui' e 'O texto foi alterado!'. DICA: VOCÊ VAI TER QUE USAR IF E ELSE PARA ISSO. */ 
 