// Knights Travails

class Node {
  constructor([x, y], moves, path) {
    this.tile = [x, y];
    this.moves = moves;
    this.path = path;
  }
}

const newGameBoard = () => {
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
  if (!board[x][y]) return board;
  
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
    [tile[0] - 1, tile[1] + 2],
  ];
  let availableMoves = moves.filter((move) => {
    if (tileIsInBounds(tile) && tileIsInBounds(move) && tileIsEmpty(board, move)) {
      return move;
    }
  })
  return availableMoves;
}

const displayKnightPath = (path) => {
  let result = `You made it in ${path.moves} moves! Here's your path:`;
  console.log(result);
  path.path.forEach((tile) => {
    console.log(tile);
  })
}

const knightMoves = (startTile, endTile) => {
  let currentBoard = newGameBoard();
  let moveQueue = [new Node([startTile[0], startTile[1]], 0, [[startTile[0], startTile[1]]])];
  while (moveQueue.length > 0) {
    let currentMove = moveQueue.shift();
    if (
      currentMove.tile[0] === endTile[0] && 
      currentMove.tile[1] === endTile[1]
    ) {
      return displayKnightPath(currentMove);
    } else {
      let availableTiles = validMoves(currentBoard, currentMove.tile);
      availableTiles.forEach((tile) => {
        let nextTile = new Node(
          [tile[0], tile[1]], 
          currentMove.moves + 1, 
          currentMove.path.concat([tile])
        );
        moveQueue.push(nextTile);
      })
    }
  }
}

knightMoves([3,3],[4,3]);

// You made it in 3 moves! Here's your path:
// > [3,3]
// > [4,5]
// > [6,4]
// > [4,3]