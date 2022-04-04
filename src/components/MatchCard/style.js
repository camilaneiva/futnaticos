import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(2)};
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }
`

export const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  color: #282525;
`

export const Image = styled.img`
  max-height: 100%;
`

export const Fixture = styled.p`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};

  margin-bottom: 4px;
`
export const Club = styled.h2`
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};

  font-weight: 400;
`
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`

export const Scoreboard = styled.div`
  display: flex;
  margin: ${({ theme }) => `0 ${theme.spacing(4)}`};
  gap: ${({ theme }) => theme.spacing(2)};
`
export const Score = styled.span`
  font-size: ${({ theme, size }) =>
    size ?? theme.typography.highlight.fontSize};
  line-height: ${({ theme }) => theme.typography.highlight.lineHeight};
  color: ${({ color }) => color ?? '#282525'};
`
export const FixtureInfo = styled.span`
  font-weight: bold;
`
