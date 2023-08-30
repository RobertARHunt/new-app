export function getStartState() {
  const cells = [];
  for (let index = 0; index < 100; index++) {
    const y = Math.floor(index / 10);
    const x = index % 10;
    const newCell = {
      y,
      x,
      index,
      toggled: Boolean,
    }
    newCell.toggled = false;
    cells.push(newCell);
  }
  return cells;
}

export function findCellSet(cell, cells) {
  let adjacentCells = [];
  let cellIndex = cell.index;
  let cellIndexAlterations = []
  if (cellIndex % 10 !== 0) {
    cellIndexAlterations.push(-1)
  }
  if (cellIndex % 10 !== 9) {
    cellIndexAlterations.push(1)
  }

  let adjacentIndeces = [cellIndex - 10, cellIndex + 10]
  cellIndexAlterations.forEach(alteration => adjacentIndeces.push(cellIndex + alteration))
  let confirmedIndeces = adjacentIndeces.filter((num) => num <= 99 && num >= 0)
  adjacentCells = confirmedIndeces.map(num => cells[num])
  adjacentCells.push(cell);
  return adjacentCells;
}

export function toggleCells(cellsToChange, cells) {
  cellsToChange = cellsToChange.map(cell => cell.index)
  if (cellsToChange) {
    const newCells = cells.map((currentCell) => {
      if (cellsToChange.includes(currentCell.index)) {
        return newCellObject(currentCell, !currentCell.toggled);
      } else {
        return currentCell;
      }
    });
    return newCells;
  } else {
    return cells;
  }
}

function newCellObject(cell, newValue) {
  return { ...cell, toggled: newValue };
}
export function processMove(cell, gridState) {
  return toggleCells(findCellSet(cell, gridState), gridState);
}

export function randomizeGrid(gridState, setGridState) {
  let newGridState = gridState;
  gridState.forEach((cell) => {
    if (Math.floor(Math.random() * 10) <= 5) {
      newGridState = processMove(cell, newGridState, setGridState)
    }
  })
  setGridState(newGridState)
}