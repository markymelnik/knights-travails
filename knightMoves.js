// Knights Travails

const gameboard = new Map();

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    gameboard.set(`${i},${j}`, []);
  }
}

console.log(gameboard);