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
  let currentBoard = newGameBoard(); // Create a new gameboard.
  let moveQueue = [new Node([startTile[0], startTile[1]], 0, [[startTile[0], startTile[1]]])]; // Initiate a queue containing a node at the starting tile.
  while (moveQueue.length > 0) { // While the queue is non-empty...
    let currentMove = moveQueue.shift(); // ...take out the first node and assign it to currentMove (current tile).
    if ( // If the coordinates of the current tile match the coordinates of the end tile. 
      currentMove.tile[0] === endTile[0] &&
      currentMove.tile[1] === endTile[1]
    ) {
      return displayKnightPath(currentMove); // ... you have reached the end tile. Return this node, which contains information about the number of moves it took to get to the end and a list of all visited tiles.
    } else { // Else continue traversing the board using breadth-first search.
      let availableTiles = validMoves(currentBoard, currentMove.tile); // Determine which tiles the knight can move to from its current tile.
      availableTiles.forEach((tile) => { // For every one of these tiles...
        let nextTile = new Node( // ...initiate a node at that location with...
          [tile[0], tile[1]], // the tile on the board it is on [x, y].
          currentMove.moves + 1, // the number of moves it took to get to that tile.
          currentMove.path.concat([tile]) // the current tile stored in a list of all tiles visited up to this point.
        );
        moveQueue.push(nextTile); // push this node into the queue. This tile's coordinates will be compared to the final tile position. 
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