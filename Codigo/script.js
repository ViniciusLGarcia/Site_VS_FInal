/*
  RELAÇÃO ENTRE ARQUIVOS:
  1. Este JS manipula o 'index.html'.
  2. Ele encontra elementos HTML usando classes (ex: '.botao-menu', '.barra-navegacao').
  3. Ele adiciona ou remove classes CSS (ex: '.aberto', '.fixo').
  4. O 'style.css' define o que acontece visualmente quando essas classes são adicionadas/removidas.
*/

// --- Bloco: Seleção de Elementos do DOM ---
// Guarda os elementos do HTML em variáveis para usá-los no JS.
let botaoMenu = document.querySelector(".botao-menu");         // Botão hambúrguer
let botaoFechar =  document.querySelector(".botao-fechar");      // Botão "X"
let barraNavegacao = document.querySelector(".barra-navegacao"); // O container do menu
let body = document.querySelector("body");                     // O corpo da página
let navegacao = document.querySelector("nav");                // A tag <nav> principal
let linksNavegacao = document.querySelectorAll(".menu-lista li a"); // Todos os links do menu


// --- Bloco: Lógica do Menu Mobile (Abrir e Fechar) ---

// Função executada ao clicar no botão 'hambúrguer' (Abrir)
botaoMenu.onclick = function() {
    botaoMenu.style.opacity = "0"; // Esconde o botão de abrir
    botaoMenu.style.pointerEvents = "none";
    barraNavegacao.classList.add("aberto"); // Adiciona a classe '.aberto'
    body.style.overflow = "hidden"; // Trava a rolagem da página
}  

// Função executada ao clicar no botão 'X' (Fechar)
botaoFechar.onclick = function(){
    botaoMenu.style.opacity = "1"; // Mostra o botão de abrir
    botaoMenu.style.pointerEvents = "auto";
    barraNavegacao.classList.remove("aberto"); // Remove a classe '.aberto'
    body.style.overflow = "auto"; // Libera a rolagem
}

// --- Bloco: Lógica do Menu Fixo (Sticky) ---

// Função executada em QUALQUER rolagem da página
window.onscroll = function(){
    // Se a rolagem for maior que 20px do topo
    if(document.documentElement.scrollTop > 20){
        // Adiciona a classe '.fixo' ao <nav>
        // O 'style.css' cuida da mudança de cor e tamanho
        navegacao.classList.add("fixo");
    } else {
        // Remove a classe '.fixo' se estiver perto do topo
        navegacao.classList.remove("fixo");
    }
}

// --- Bloco: Fechar Menu Mobile ao Clicar em um Link ---

// Passa por CADA link do menu que foi selecionado
for (var i = 0; i < linksNavegacao.length; i++){
    
    // Adiciona um "ouvinte" de clique a cada link
    linksNavegacao[i].addEventListener("click", () => {
        // Quando um link é clicado, executa a mesma lógica de FECHAR o menu
        botaoMenu.style.opacity = "1";
        botaoMenu.style.pointerEvents = "auto";
        barraNavegacao.classList.remove("aberto"); 
        body.style.overflow = "auto";
    });
}