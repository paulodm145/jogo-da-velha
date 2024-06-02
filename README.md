# Projeto: Jogo da Velha

Este projeto consiste em uma implementação simples do jogo da velha (tic-tac-toe) utilizando HTML, CSS e JavaScript.

## Conteúdo dos Arquivos

### 1. index.html
- **Descrição**: Este arquivo contém a estrutura básica do jogo. Ele define o layout da página, incluindo o tabuleiro do jogo e o botão de reinício.
- **Principais elementos**:
    - `<div id="gameBoard" class="game-board"></div>`: Contêiner para o tabuleiro do jogo.
    - `<button class="btn-restart" onclick="startGame()">Reiniciar Jogo</button>`: Botão para reiniciar o jogo.
    - `<script src="game.js"></script>`: Inclusão do arquivo JavaScript que contém a lógica do jogo.

### 2. styles.css
- **Descrição**: Este arquivo contém o estilo do jogo, definindo a aparência do tabuleiro, das células e do botão de reinício.
- **Principais estilos**:
    - `body`: Centraliza o conteúdo na tela e define a fonte e o fundo da página.
    - `.game-board`: Configura o layout em grade para o tabuleiro do jogo.
    - `.cell`: Define o estilo das células do tabuleiro, incluindo tamanho, cor, bordas e efeitos de transição.
    - `.btn-restart`: Estiliza o botão de reinício com cores, tamanho, bordas e efeitos de transição.

### 3. game.js
- **Descrição**: Este arquivo contém a lógica do jogo da velha. Ele gerencia o estado do tabuleiro, alterna entre os jogadores e verifica as condições de vitória ou empate.
- **Principais funções**:
    - `startGame()`: Inicializa ou reinicia o jogo, configurando o tabuleiro e definindo o jogador atual.
    - `cellClicked()`: Manipulador de eventos para cliques nas células do tabuleiro. Atualiza o estado do jogo e verifica se há um vencedor ou empate.
    - `checkWinner(player)`: Verifica se o jogador atual venceu o jogo.
    - `checkDraw()`: Verifica se o jogo terminou em empate.

## Como Executar

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador web.
3. O jogo será carregado e estará pronto para jogar.
4. Clique nas células do tabuleiro para fazer suas jogadas.
5. Use o botão "Reiniciar Jogo" para começar uma nova partida a qualquer momento.

## Estrutura do Projeto

/projeto-jogo-da-velha
│
├── index.html
├── styles.css
└── game.js


## Considerações Finais

Este projeto é uma implementação básica de um jogo da velha, ideal para aprender conceitos de manipulação de DOM com JavaScript, estruturação de páginas com HTML e estilização com CSS. Sinta-se à vontade para modificar e expandir o projeto conforme sua criatividade!
