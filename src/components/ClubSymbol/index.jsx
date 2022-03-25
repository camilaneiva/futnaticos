import React from 'react'
import { SymbolWrapper } from './style'
import clubSymbol from '../../imgs/symbol.svg'

export const ClubSymbol = () => {
  return (
    <div>
      <SymbolWrapper>
        <img src={clubSymbol} alt="" />
      </SymbolWrapper>
    </div>
  )
}
