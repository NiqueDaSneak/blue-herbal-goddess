import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import colors from '../../assets/colors'
import { device } from '../../assets/MediaQueries'

export const FlexCenter = styled.div`
display: flex;
justify-content: center;
`

const Heading = styled.span`
  font-size: 30pt;
  color: ${ props => props.color ? colors.textColors[props.color] : colors.blue.dark };
  text-transform: uppercase;
  text-align: center;
  @media ${ device.tablet } {
    font-size: 40pt;
  }
@media ${ device.laptop } {
    font-size: 26pt;
  }
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
  @media ${ device.tablet } {
    font-size: 18pt;
  }
  @media ${ device.laptop} {
    width: 50vw;
    font-size: 14pt;
  }
`

 const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`
export const fadeInForward = css`animation: ${fadeIn} 1s linear .2s 1 forwards`
export const fadeInForwardSlow = css`animation: ${fadeIn} 2s linear .2s 1 forwards`


export const ContentShade = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${ colors.transparent.midGrey };
  opacity: ${ props => props.visible ? '1' : '0'};
  transition: all .4s ease-in-out;
  visibility: ${ props => props.visible ? "visible" : "hidden" };
  top: 0;
  left: 0;
  position: fixed;
  backdrop-filter: grayscale(1);
`