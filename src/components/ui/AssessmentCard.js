import React, {useContext, useState} from 'react'
import { BodyCopy } from './Utility'
import styled, {css} from 'styled-components'
import colors from '../../assets/colors'
import { device } from '../../assets/MediaQueries'
import {GlobalContext} from '../hoc/Store'
import actions from '../../store/actions'

const Container = styled.span`
  padding: 6%;
  border-radius: 20px;
  margin-bottom: 4vh;
  color: white;
  font-weight: ${props => props.active ? 'bolder' : null};
  background-color: ${props => props.active ? css`${colors.blue.light}` : css`${colors.trans.blue.light}`};
  transition: background-color .6s ease-in-out;
  span {
    font-size: 12pt;
  }
  @media ${device.tablet} {
    padding: 4%;
  }
  @media ${device.laptop} {
    padding: 2%;
    width: max-content;
  }
`
const AssessmentCard = (props) => {
  const [isActive, setActive] = useState(false)

  const [state, dispatch] = useContext(GlobalContext)

  const clickHandler = whichAction => {
    setActive(whichAction)
    let type = whichAction ? 'add' : 'subtract'
    dispatch(actions.assessmentButtonClickHandler(type, props.questionData.scores))
  }

  return(
    <Container active={isActive} onClick={() => clickHandler(!isActive)}>
      <span>{props.questionData.text}</span>
    </Container>
  )
}

export default AssessmentCard