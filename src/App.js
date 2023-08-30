import { useState } from 'react';
import GridCell from './GridCell';
import { getStartState, processMove, randomizeGrid } from './helpers';
import './App.css';
import { styled } from 'styled-components';

function App() {

  const [gridState, setGridState] = useState(getStartState())

  function getOnClickHandler(cell) {
    return () => {
      setGridState(processMove(cell, gridState));
    };
  }

  function getOnClickHandlerButton() {
    return () => {
      randomizeGrid(gridState, setGridState)
    }
  }

  return (
    <>
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
      <input type='button' value='Randomize Grid' onClick={getOnClickHandlerButton()}></input>
    </>
  );
}

const Container = styled.div`
  display: grid;
  width: 700px;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);
`

export default App;
