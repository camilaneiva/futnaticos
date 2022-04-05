import React from 'react'
import { LastMatchesSummary } from '../LastMatchesSummary'
import { Cell, ImageCell, Wrapper } from './style'

export const TableRow = ({
  position,
  club,
  points,
  played,
  won,
  drawn,
  lost,
  goalsFor,
  goalsAgainst,
  goalsDifference,
  clubSymbol,
  results
}) => {
  return (
    <Wrapper>
      <Cell>{position}</Cell>
      <Cell padding={'4px 0px'}>
        <ImageCell src={clubSymbol} alt="" />
      </Cell>
      <Cell width={'100%'} textAlign="left">
        {club}
      </Cell>
      <Cell>{points}</Cell>
      <Cell>{played}</Cell>
      <Cell>{won}</Cell>
      <Cell>{drawn}</Cell>
      <Cell>{lost}</Cell>
      <Cell>{goalsFor}</Cell>
      <Cell>{goalsAgainst}</Cell>
      <Cell>{goalsDifference}</Cell>
      <Cell>
        <LastMatchesSummary results={results} />
      </Cell>
    </Wrapper>
  )
}
