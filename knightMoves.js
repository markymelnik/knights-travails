// Knights Travails

class Node {
  constructor([x, y], moves, route) {
    this.tile = [x, y];
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

const tileIsInBounds = (tile) => {
  if (tile[0] > -1 && tile[0] < 8 && tile[1] > -1 && tile[1] < 8) {
    return true;
  } else {
    return false;
  }
}

const tileIsEmpty = (board, tile) => {
  const x = tile[0];
  const y = tile[1];
  return !board[x][y];
}

const validMoves = (board, tile) => {
  let moves = [
    [tile[0] + 1, tile[1] + 2],
    [tile[0] + 2, tile[1] + 1],
    [tile[0] + 2, tile[1] - 1],
    [tile[0] + 1, tile[1] - 2],
    [tile[0] - 1, tile[1] - 2],
    [tile[0] - 2, tile[1] - 1],
    [tile[0] - 2, tile[1] + 1],
    [tile[0] - 1, tile[1] + 2]
  ];
  let availableMoves = moves.filter((move) => {
    if (tileIsInBounds(tile) && tileIsInBounds(move) && tileIsEmpty(board, move)) {
      return move;
    }
  })
  return availableMoves;
}

let newBoard = createGameboard();
console.log(newBoard);
console.log(validMoves(newBoard, [1,2]));
console.log(validMoves(newBoard, [0,8]));