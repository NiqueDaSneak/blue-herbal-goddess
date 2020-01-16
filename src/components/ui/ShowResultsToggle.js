import React, {useState} from 'react'
import styled, {css} from 'styled-components'

const Button = css`
  color: white;
  font-size: 10pt;
  background-color: #050d71;
  padding-top: 2vh;
  padding-bottom: 2vh;
  width: 44vw;
  text-transform: uppercase;
  border-radius: 2vw;
  font-weight: lighter;
  display: flex;
  justify-content: center;
`

// Const

const ToggleContainer = styled.div`
  ${ props => props.isButton ? Button : null}
`

const ShowResultsToggle = (props) => {
  const [isButton, toggleButton] = useState(true)

  return(
    <ToggleContainer isButton={isButton} onClick={() => isButton ? toggleButton(false) : null}>
      
      <span>Get Results</span>
    </ToggleContainer>
  )
}

export default ShowResultsToggle