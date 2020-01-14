import React, {useState} from 'react'
import styled from 'styled-components'

const ToggleContainer = styled.div`
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

const ShowResultsToggle = (props) => {
  const [isButton, toggleButton] = useState(true)

  return(
    <ToggleContainer isButton={isButton} onClick={() => isButton ? toggleButton(false) : null}>
      
      <span>Get Results</span>
    </ToggleContainer>
  )
}

export default ShowResultsToggle