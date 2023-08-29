export default function getStartState() {
  const cells = [];
  for (let index = 0; index < 100; index++) {
    const y = Math.floor(index / 10);
    const x = index % 10;
    const newCell = {
      y,
      x,
      index,
      toggled: false,
    }
    cells.push(newCell);
  }
  return cells;
}

export function setCellValueInGrid(cellToChange, cells) {
  if (cellToChange) {
    const cellsWithNewValue = cells.map((currentCell) => {
      if (cellToChange.index === currentCell.index) {
        return setCellValue(currentCell, !currentCell.toggled);
      } else {
        return currentCell;
      }
    });
    return cellsWithNewValue;
  } else {
    return cells;
  }
}

function setCellValue(cell, newValue) {
  return { ...cell, toggled: newValue };
}