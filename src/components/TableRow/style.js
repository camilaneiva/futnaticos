import styled from 'styled-components'

export const Wrapper = styled.tr`
  color: #282525;
  border-bottom: 1px solid #e5e5e5;
`

export const Cell = styled.td`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  min-width: 40px;
  text-align: ${({ textAlign }) => textAlign ?? 'center'};
  padding: ${({ theme, padding }) =>
    padding ?? `${theme.spacing(1)} ${theme.spacing(2)}`};
  width: ${({ width }) => width ?? 'initial'};
`

export const ImageCell = styled.img`
  width: 30px;
`
