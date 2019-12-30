import React from 'react'
import styled from 'styled-components'
import { FlexCenterHeading, BodyCopy } from './Utility'
import images from '../../assets/imgs'
import { device } from '../../assets/MediaQueries'
import Button from './Button'

const Container = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 4vh;
  padding-bottom: 15vh;
  color: white;
  p {
    @media ${ device.laptop } {
      margin-top: 4vh;
      margin-bottom: 4vh;
    }
  }
  @media ${ device.laptop } {
    height: inherit;
  }
`

const Image = styled.img`
    width: 80vw;
    @media ${ device.laptop } {
      width: 50vw;
      margin-top: 4vh;
    }
`

const AboutUs = ( props ) => (
    <Container>
        <FlexCenterHeading color='light' text='About Us' />
        <Image src={images.woman} />
        <BodyCopy>Fusce eu purus in felis commodo lobortis sed id erat. Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
        <Button text='Learn More'/>
    </Container>
)

export default AboutUs