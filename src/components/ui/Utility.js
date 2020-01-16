import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import colors from '../../assets/colors'
import { device } from '../../assets/MediaQueries'

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`

const Heading = styled.span`
  font-size: ${props => props.small ? '18pt' : '30pt'};
  color: ${ props => props.color ? colors.textColors[props.color] : colors.blue.dark };
  text-transform: uppercase;
  text-align: center;
  margin-top: 4vh;
  /* margin-bottom: 4vh; */
  @media ${ device.tablet } {
    font-size: 40pt;
  }
@media ${ device.laptop } {
    font-size: 30pt;
  }
`

export const FlexCenterHeading = ( props ) => (
  <FlexCenter>
    <Heading small={props.small} color={props.color}>{props.text}</Heading>
</FlexCenter>
)

export const BodyCopy = styled.p`
  width: 80vw;
  font-weight: normal;
  text-align: center;
  font-weight: lighter;
  margin-top: 4vh;
  margin-bottom: 4vh;
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
    opacity: 1;
  }
`

const darken = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`

export const ContentShade = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: green; */
  z-index: 4;
  background-color: ${ colors.trans.midGrey };
  /* animation: ${darken} .6s ease-in-out; */
  opacity: ${ props => props.visible ? '1' : '0'};
  transition: all .4s ease-in-out;
  visibility: ${ props => props.visible ? "visible" : "hidden" };
  top: 0;
  left: 0;
  position: fixed;
  backdrop-filter: grayscale(1);
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
  margin-bottom: 16vh;
  width: 100vw;
  color: white;
`
export const NoScrollBackground = styled.div`
  background: ${props => css`url(${props.image})`};
  background-color: ${colors.blue.dark};
  /* height: 100vh; */
  overflow: scroll;
`

const normal = 1
const slow = 2
const normalString = css`animation: ${fadeIn} ${normal}s linear .2s 1 forwards`
const fastString = css`animation: ${fadeIn} ${slow}s linear .2s 1 forwards`
export const fadeInForward = css`${normalString}`
export const fadeInForwardSlow = css`${fastString}`