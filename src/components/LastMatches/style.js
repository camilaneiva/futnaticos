import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  color: #282525;
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  margin-top: ${({ theme }) => theme.spacing(10)};
`
