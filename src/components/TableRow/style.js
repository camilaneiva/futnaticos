import styled from 'styled-components'

export const Wrapper = styled.tr`
  display: flex;
  color: 282525;
`

export const Cell = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
  font-size: 12px;
  line-height: 16px;
  min-width: 30px;
  padding: 4px 8px;
  flex-grow: ${({ flexGrow }) => flexGrow ?? 0};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
`

export const ImageCell = styled.img`
  width: 30px;
`
