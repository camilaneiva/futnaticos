import styled from 'styled-components'

export const Tr = styled.tr`
  border-bottom: 1px dashed #c4c4c4;
`

export const Th = styled.th`
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};
  color: #282525;
  text-align: ${({ textAlign }) => textAlign ?? 'center'};
  font-weight: 600;
  padding: ${({ theme }) => `${theme.spacing(1)} 0`};
`
