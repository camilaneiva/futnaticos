import styled from 'styled-components'

export const Wrapper = styled.tr`
  display: flex;
  color: #282525;
`

export const Cell = styled.td`
  display: flex;
  align-items: center;

  border-bottom: 1px solid #e5e5e5;
  /* font-size: ${({ theme }) => theme.typography.body1.fontSize}; */
  /* line-height: ${({ theme }) => theme.typography.body1.lineHeight}; */
  min-width: 30px;
  /* padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`}; */
  flex-grow: ${({ flexGrow }) => flexGrow ?? 0};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
`

export const ImageCell = styled.img`
  width: 30px;
`
