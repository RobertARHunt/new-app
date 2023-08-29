import { useState } from 'react';
import GridCell from './GridCell';
import getStartState, { findAdjacentCells, setCellValueInGrid } from './helpers';
import './App.css';
import { styled } from 'styled-components';

function App() {

  const [gridState, setGridState] = useState(getStartState())

  function getOnClickHandler(cell) {
    return () => {
      processMove(cell);
    };
  }

  function processMove(cell) {
    const adjacents = findAdjacentCells(cell, gridState)
    let newGridState = setCellValueInGrid(
      cell,
      gridState,
    );
    adjacents.forEach(gridCell => newGridState = setCellValueInGrid(gridCell, newGridState))
    setGridState(newGridState);
  }

  return (
    <Container>
      {gridState.map((cell, ix) => {
        return (
          <GridCell
            toggled={cell.toggled}
            onClick={getOnClickHandler(cell)}
          ></GridCell>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: 700px;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);
`

export default App;
