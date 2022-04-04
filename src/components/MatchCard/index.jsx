import React from 'react'
import {
  Wrapper,
  WrapperCard,
  Image,
  Fixture,
  Club,
  ImageWrapper,
  Scoreboard,
  Score,
  FixtureInfo
} from './style'
import clubSymbol from '../../imgs/symbol.svg'
import clubSymbol2 from '../../imgs/totte.png'

export const MatchCard = () => {
  return (
    <Wrapper>
      <Fixture>
        <FixtureInfo>02/04</FixtureInfo> - Goodison Park -{' '}
        <FixtureInfo>13:30</FixtureInfo>
      </Fixture>
      <WrapperCard>
        <Club>MUN</Club>

        <ImageWrapper>
          <Image src={clubSymbol} alt="" />
        </ImageWrapper>
        <Scoreboard>
          <Score>2</Score>
          <Score size={'20px'} color={'#c5c5c5'}>
            ×
          </Score>
          <Score>1</Score>
        </Scoreboard>

        <ImageWrapper>
          <Image src={clubSymbol2} alt="" />
        </ImageWrapper>
        <Club>LEI</Club>
      </WrapperCard>
    </Wrapper>
  )
}
