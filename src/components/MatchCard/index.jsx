import React from 'react'
import { splitScore } from '../../logic/splitScore'
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

export const MatchCard = ({
  date,
  place,
  time,
  homeClub,
  awayClub,
  homeSymbol,
  awaySymbol,
  score
}) => {
  const [homeScore, awayScore] = splitScore(score)
  return (
    <Wrapper>
      <Fixture>
        <FixtureInfo>{date}</FixtureInfo> - {place}
        <FixtureInfo> {time ?? ''}</FixtureInfo>
      </Fixture>
      <WrapperCard>
        <Club>{homeClub}</Club>

        <ImageWrapper>
          <Image src={homeSymbol} alt="" />
        </ImageWrapper>
        <Scoreboard>
          <Score>{homeScore}</Score>
          <Score size={'20px'} color={'#c5c5c5'}>
            ×
          </Score>
          <Score>{awayScore}</Score>
        </Scoreboard>

        <ImageWrapper>
          <Image src={awaySymbol} alt="" />
        </ImageWrapper>
        <Club>{awayClub}</Club>
      </WrapperCard>
    </Wrapper>
  )
}
