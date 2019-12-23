import React from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '../../assets/colors'

export const FlexCenter = styled.div`
display: flex;
justify-content: center;
`

const Heading = styled.span`
  font-size: 30pt;
  color: ${ props => props.color ? colors.textColors[props.color] : colors.blue.dark };
  text-transform: uppercase;
  text-align: center;
  margin-top: 2vh;
`

export const FlexCenterHeading = ( props ) => (
  <FlexCenter>
    <Heading color={props.color}>{props.text}</Heading>
</FlexCenter>
)

export const BodyCopy = styled.p`
  width: 80vw;
  font-weight: normal;
  text-align: center;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`

export const ContentShade = styled.div`
  /* opacity: 0; */
  /* animation: ${fadeIn} 1s linear .4s 1 forwards; */
  height: 100vh;
  width: 100vw;
  /* background-color: red; */
  background-color: ${ colors.transparent.midGrey };
  opacity: ${ props => props.visible ? '1' : '0'};
  transition: all .4s ease-in-out;
  visibility: ${ props => props.visible ? "visible" : "hidden" };
  top: 0;
  left: 0;
  position: fixed;
  /* filter: grayscale(1); */
  backdrop-filter: grayscale(1);
`