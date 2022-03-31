import React from 'react'
import { ClubSymbol } from '../ClubSymbol'
import { Title, Subtitle, Wrapper, Text } from './style'

export const ClubCard = () => {
  return (
    <Wrapper>
      <ClubSymbol />
      <Title>Manchester United</Title>
      <Subtitle>Premier League</Subtitle>
      <Text>
        <span>6°</span>lugar - <span>50</span> pontos
      </Text>
    </Wrapper>
  )
}
