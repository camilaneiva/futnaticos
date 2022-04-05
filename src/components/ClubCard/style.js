import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(6)};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
  margin: ${({ theme }) => `${theme.spacing(4)} 0 ${theme.spacing(1)} `};
  font-weight: 500;
  color: white;
`
export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  text-transform: uppercase;
  font-weight: 500;
  color: white;
`
export const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  font-weight: 500;
  color: white;
`
