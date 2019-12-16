import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'

export const FlexCenter = styled.div`
display: flex;
justify-content: center;
`

const Heading = styled.span`
  font-size: 30pt;
  color: ${ colors.blue.dark };
  text-transform: uppercase;
  text-align: center;
  margin-top: 2vh;
`

export const FlexCenterHeading = ( props ) => (
  <FlexCenter>
    <Heading>{props.text}</Heading>
</FlexCenter>
)

export const BodyCopy = styled.p`
  width: 80vw;
  font-weight: normal;
  text-align: center;
`

export const ContentShade = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${ colors.transparent.midGrey };
  opacity: ${ props => props.visible ? 1 : 0};
  transition: all .4s ease-in-out;
  visibility: ${ props => props.visible ? "visible" : "hidden" };
  top: 0;
  left: 0;
  position: fixed;
  filter: grayscale(1);
  backdrop-filter: blur(7px);
`