import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'
import { device } from '../../assets/MediaQueries'

const ButtonStyle = styled.button`
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  transition: all .6s ease-in-out;
  color: ${props => props.light ? colors.blue.dark : 'white'};
  font-size: 10pt;
  background-color: ${props => props.light ? 'white' : colors.blue.dark};
  border: none;
  padding-top: 2vh;
  padding-bottom: 2vh;
  width: ${props => props.small ? '34vw' : '44vw'};
  text-transform: uppercase;
  border-radius: 2vw;
  font-weight: bolder;
  outline: none;
  @media ${ device.tablet } {
    width: 30vw;
  }
  @media ${ device.laptop} {
    width: 12vw;
    border-radius: .6vw;
    font-weight: normal;
  }
`

const Button = ( props ) => {
  return(
    <ButtonStyle small={props.small} visible={props.visible} light={props.light} onClick={props.onClick}>
      {props.text}
    </ButtonStyle>
  )
}

Button.defaultProps = {
  visible: true
}

export default Button