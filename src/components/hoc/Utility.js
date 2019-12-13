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