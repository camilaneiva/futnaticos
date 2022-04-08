import React from 'react'
import { ClubCard } from '../ClubCard'
import { Wrapper } from './style'

export const Menu = ({ card }) => {
  return (
    <Wrapper>
      <ClubCard
        club={card.club}
        championship={card.championship}
        position={card.position}
        points={card.points}
        clubSymbol={card.clubSymbol}
      />
    </Wrapper>
  )
}
