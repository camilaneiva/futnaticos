import React from 'react'
import {
  faCircleCheck,
  faCircleXmark,
  faCircleMinus
} from '@fortawesome/free-solid-svg-icons'
import { IconCheck, IconX, IconMinus, Wrapper } from './style'

export const LastMatchesSummary = ({ results }) => {
  return (
    <Wrapper>
      {results.map((result, index) => {
        return (
          <React.Fragment key={index}>
            {result === 'w' && <IconCheck icon={faCircleCheck} />}
            {result === 'l' && <IconX icon={faCircleXmark} />}
            {result === 'd' && <IconMinus icon={faCircleMinus} />}
          </React.Fragment>
        )
      })}
    </Wrapper>
  )
}
