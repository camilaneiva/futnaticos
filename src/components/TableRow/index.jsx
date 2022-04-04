import React from 'react'
import clubSymbol from '../../imgs/symbol.svg'
import { LastMatchesSummary } from '../LastMatchesSummary'

import { Cell, ImageCell, Wrapper } from './style'

export const TableRow = () => {
  return (
    <Wrapper>
      <Cell>1</Cell>
      <Cell>
        <ImageCell src={clubSymbol} alt="" />
      </Cell>
      <Cell flexGrow={1} justifyContent="flex-start">
        Manchester United
      </Cell>
      <Cell>50</Cell>
      <Cell>29</Cell>
      <Cell>14</Cell>
      <Cell>8</Cell>
      <Cell>7</Cell>
      <Cell>48</Cell>
      <Cell>40</Cell>
      <Cell>8</Cell>
      <Cell>
        <LastMatchesSummary results={['l', 'w', 'w', 'w', 'd']} />
      </Cell>
    </Wrapper>
  )
}
