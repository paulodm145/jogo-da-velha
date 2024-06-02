const board = [];
const gameBoard = document.getElementById('gameBoard');
const rows = 3;
const cols = 3;
let currentPlayer = 'X';

function startGame() {
    gameBoard.innerHTML = '';
    currentPlayer = 'X';
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i][j] = '';
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', cellClicked);
            gameBoard.appendChild(cell);
        }
    }
}

function cellClicked() {
    const row = this.dataset.row;
    const col = this.dataset.col;
    if (board[row][col] !== '') return;
    this.innerText = currentPlayer;
    board[row][col] = currentPlayer;
    if (checkWinner(currentPlayer)) {
        alert(currentPlayer + ' ganhou!');
        startGame();
        return;
    }
    if (checkDraw()) {
        alert('Empate!');
        startGame();
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner(player) {
    for (let i = 0; i < rows; i++) {
        if (board[i].every(cell => cell === player)) return true;
    }
    for (let j = 0; j < cols; j++) {
        if (board.map(row => row[j]).every(cell => cell === player)) return true;
    }
    if (board.map((row, idx) => row[idx]).every(cell => cell === player)) return true;
    if (board.map((row, idx) => row[cols - 1 - idx]).every(cell => cell === player)) return true;
    return false;
}

function checkDraw() {
    return board.flat().every(cell => cell !== '');
}

document.addEventListener('DOMContentLoaded', startGame);