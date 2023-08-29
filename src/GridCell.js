import { styled, css } from 'styled-components'

export default function GridCell({ toggled, onClick }) {
  return (
    <Cell toggled={toggled} onClick={onClick}></Cell>
  );
}

const Cell = styled.div`
  height: 10%;
  min-height: 70px;
  width: 10%;
  min-width: 70px;
  border: 1px solid black;
  
  ${props =>
    props.toggled === false
      ? css`
          background-color: gray;
          &:hover {
            background-color: lightgray;
          }
        `
      : props.toggled === true &&
      css`
          background-color: darkred;
          &:hover {
            background-color: red;
          }
        `}
`