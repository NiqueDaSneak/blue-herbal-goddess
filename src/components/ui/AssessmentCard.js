import React, {useState} from 'react'
import { BodyCopy } from './Utility'
import styled, {css} from 'styled-components'
import colors from '../../assets/colors'

const Container = styled.span `
  height: fit-content;
  padding: 6%;
  border-radius: 20px;
  margin-bottom: 4vh;
  color: white;
  font-weight: ${props => props.active ? 'bolder' : null};
  background-color: ${props => props.active ? css`${colors.blue.light}` : css`${colors.trans.blue.light}`};
  transition: background-color .6s ease-in-out;
  /* transition: font-weight 0 ease-in-out .6s; */
  span {
    font-size: 12pt;
  }
`
const AssessmentCard = (props) => {
  const [isActive, setActive] = useState(false)
  return(
    <Container active={isActive} onClick={() => setActive(!isActive)}>
      <span>{props.text}</span>
    </Container>
  )
}

export default AssessmentCard