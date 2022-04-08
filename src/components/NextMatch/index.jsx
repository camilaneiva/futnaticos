import React from 'react'
import { MatchCard } from '../MatchCard'
import clubSymbol from '../../imgs/symbol.svg'
import clubSymbol2 from '../../imgs/totte.png'

import { Title } from './style'

export const NextMatch = ({ match }) => {
  return (
    <div>
      <Title>Próxima Partida</Title>
      <MatchCard
        date={match.date}
        place={match.place}
        time={match.time}
        homeClub={match.homeClub}
        awayClub={match.awayClub}
        homeSymbol={match.homeSymbol}
        awaySymbol={match.awaySymbol}
      />
    </div>
  )
}
