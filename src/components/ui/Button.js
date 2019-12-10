import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'
const ButtonStyle = styled.button`
  color: white;
  font-size: 16pt;
  background-color: ${colors.blue.dark};
  border: none;
  padding-top: 1vh;
  padding-bottom: 1vh;
  width: 44vw;
  margin-bottom: 2vh;
  text-transform: uppercase;
  border-radius: 2vw;
`

const Button = ( props ) => {
  return(
    <ButtonStyle onClick={props.onClick}>
      {props.text}
    </ButtonStyle>
  )
}

export default Button