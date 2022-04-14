import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 230px;
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#c5c5c5'};
  position: fixed;
  top: 0;
  left: 0;
`
