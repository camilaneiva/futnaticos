import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`

export const IconCheck = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #41ad49;
`

export const IconX = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #ff4949;
`
export const IconMinus = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #c8c6c6;
`
