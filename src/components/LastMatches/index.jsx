import React from 'react'
import { MatchCard } from '../MatchCard'
import clubSymbol from '../../imgs/symbol.svg'
import clubSymbol2 from '../../imgs/totte.png'

import { Title, Wrapper } from './style'

export const LastMatches = ({ lastMatches }) => {
  return (
    <Wrapper>
      <Title>Últimas Partidas</Title>
      {lastMatches.map((match, index) => {
        return (
          <MatchCard
            key={index}
            date={match.date}
            place={match.place}
            homeClub={match.homeClub}
            awayClub={match.awayClub}
            homeSymbol={match.homeSymbol}
            awaySymbol={match.awaySymbol}
            score={match.score}
          />
        )
      })}
    </Wrapper>
  )
}
