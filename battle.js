// Define ship objects
const ships = [
    { length: 5, hits: 0, isSunk: false },
    { length: 4, hits: 0, isSunk: false },
    { length: 3, hits: 0, isSunk: false },
    { length: 3, hits: 0, isSunk: false },
    { length: 2, hits: 0, isSunk: false }
  ];
  
  // Initialize game board
  const board = document.getElementById('board');
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
  }
  
  // Randomly place ships on the board
  function placeShips() {
    ships.forEach(ship => {
      const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      let x, y;
      if (direction === 'horizontal') {
        x = Math.floor(Math.random() * (10 - ship.length + 1));
        y = Math.floor(Math.random() * 10);
      } else {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * (10 - ship.length + 1));
      }
      for (let i = 0; i < ship.length; i++) {
        const cell = board.children[(y * 10) + x + i];
        cell.classList.add('ship');
      }
    });
  }
  
  // Handle click event on cells
  board.addEventListener('click', function(event) {
    const cell = event.target;
    if (!cell.classList.contains('hit') && !cell.classList.contains('sunk')) {
      cell.classList.add('hit');
      const index = Array.from(board.children).indexOf(cell);
      checkHit(index);
    }
  });
  
  // Check if a ship is hit and update its status
  function checkHit(index) {
    ships.forEach((ship, i) => {
      const shipCells = Array.from(board.children).slice(i * 10, (i + 1) * 10);
      if (shipCells.includes(board.children[index])) {
        ship.hits++;
        if (ship.hits === ship.length) {
          ship.isSunk = true;
          shipCells.forEach(cell => cell.classList.add('sunk'));
          checkGameEnd();
        }
      }
    });
  }
  
  // Check if all ships are sunk
  function checkGameEnd() {
    const allSunk = ships.every(ship => ship.isSunk);
    if (allSunk) {
      alert('Congratulations! You sunk all the battleships!');
      // You can add more actions here such as restarting the game
    }
  }
  
  // Initialize the game
  placeShips();
  