import React, { useState } from 'react'
import Button from '../ui/Button'
import styled from 'styled-components'
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 4vw;
  margin-right: 4vw;
`

const NavigationButtons = ( props ) => {
  const buttonValues = {
    first: ['Discover Products','Take Assessment','Book Time','More'],
    second: ['Instagram','Medium','Facebook','Back']
  }

  const [navButtonValues, setNavValues] = useState(buttonValues.first)
  
  const toggleNavButtons = (buttonText) => {
    switch (buttonText) {
      case 'More':
        setNavValues(buttonValues.second)
        break;
      case 'Back':
        setNavValues(buttonValues.first)
        break;
      default:
        break;
    }
  }
  
  return(
    <ButtonContainer>
      {navButtonValues.map( buttonText => {
        return <Button text={buttonText} onClick={ (e) => toggleNavButtons(e.target.innerHTML)}/>
      })}
    </ButtonContainer>
  )

}

export default NavigationButtons