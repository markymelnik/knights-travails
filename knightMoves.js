// Knights Travails

class Node {
  constructor([x, y], moves, route) {
    this.location = [x, y];
    this.moves = moves;
    this.route = route;
  }
}
const createGameboard = () => {
  const gameboard = [];
  for (let i = 0; i < 8; i++) {
    gameboard[i] = [];
    for (let j = 0; j < 8; j++) {
      gameboard[i][j] = false;
    }
  }
  return gameboard;
}

console.log(createGameboard());