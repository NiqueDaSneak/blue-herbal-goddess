import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'
import { device } from '../../assets/MediaQueries'

const ButtonStyle = styled.button`
  color: white;
  font-size: 10pt;
  background-color: ${colors.blue.dark};
  border: none;
  padding-top: 2vh;
  padding-bottom: 2vh;
  width: 44vw;
  margin-bottom: 2vh;
  text-transform: uppercase;
  border-radius: 2vw;
  font-weight: lighter;
  outline: none;
  @media ${ device.tablet } {
    width: 30vw;
  }
  @media ${ device.laptop} {
    width: 20vw;
  }
`

const Button = ( props ) => {
  return(
    <ButtonStyle onClick={props.onClick}>
      {props.text}
    </ButtonStyle>
  )
}

export default Button