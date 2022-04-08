import React from 'react'
import { TableRow } from '../TableRow'
import { Th, Tr, TableWrapper } from './style'

export const Table = ({ data }) => {
  return (
    <>
      <TableWrapper>
        <thead>
          <Tr>
            <Th>&nbsp;</Th>
            <Th textAlign={'left'} colSpan={2}>
              Clube
            </Th>
            <Th>P</Th>
            <Th>J</Th>
            <Th>V</Th>
            <Th>E</Th>
            <Th>D</Th>
            <Th>GP</Th>
            <Th>GC</Th>
            <Th>SG</Th>
            <Th>Últimas cinco</Th>
          </Tr>
        </thead>
        <tbody>
          {data.map((team, index) => {
            return (
              <TableRow
                key={index}
                club={team.club}
                results={team.results}
                position={team.position}
                points={team.points}
                played={team.played}
                won={team.won}
                drawn={team.drawn}
                lost={team.lost}
                goalsFor={team.goalsFor}
                goalsAgainst={team.goalsAgainst}
                goalsDifference={team.goalsDifference}
                clubSymbol={team.clubSymbol}
              />
            )
          })}
        </tbody>
      </TableWrapper>
    </>
  )
}
