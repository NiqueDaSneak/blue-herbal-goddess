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
  const [navButtonValues, setNavValues] = useState(['Button 1','Button 2','Button 3','More'])
  
  const toggleNavButtons = (buttonText) => {
    switch (buttonText) {
      case 'More':
        setNavValues(['Button 4','Button 5','Button 6','Back'])
        break;
      case 'Back':
        setNavValues(['Button 1','Button 2','Button 3','More'])
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