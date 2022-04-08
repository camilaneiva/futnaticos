import React from 'react'
import { SymbolWrapper } from './style'

export const ClubSymbol = ({ clubSymbol }) => {
  return (
    <div>
      <SymbolWrapper>
        <img src={clubSymbol} alt="" />
      </SymbolWrapper>
    </div>
  )
}
