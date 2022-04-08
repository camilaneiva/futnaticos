import React from 'react'
import { ClubSymbol } from '../ClubSymbol'
import { Title, Subtitle, Wrapper, Text } from './style'

export const ClubCard = ({
  clubSymbol,
  club,
  championship,
  position,
  points
}) => {
  return (
    <Wrapper>
      <ClubSymbol clubSymbol={clubSymbol} />
      <Title>{club}</Title>
      <Subtitle>{championship}</Subtitle>
      <Text>
        <span>{position}º</span> lugar - <span>{points}</span> pontos
      </Text>
    </Wrapper>
  )
}
