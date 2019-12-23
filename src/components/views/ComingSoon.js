import React from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenterHeading, BodyCopy } from '../ui/Utility'
import colors from '../../assets/colors'
import Layout from '../hoc/Layout'
import { device } from '../../assets/MediaQueries'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,500i,700&display=swap");
  body {
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
  }
`

const FadeToGrey = keyframes`
  from {
    filter: grayscale(0);
  }
  to {
    filter: grayscale(1);
  }
`

const BackgroundImg = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${images.mountains});
  background-size: cover;
  position: fixed;
  z-index: -1;
  bottom: 0;
  filter: grayscale(1);
  @media ${ device.laptop } {
    background-image: url(${images.ocean});
  }
`

const Logo = styled.img`
  width: 20vw;
  @media ${ device.laptop } {
    width: 10vw;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6vh;
`

const ComingSoonCopy = styled(BodyCopy)`
  @media ${ device.laptop } {
    color: ${colors.blue.dark}
  }
`

const Services = ( props ) => (
  <>
    <GlobalStyles />
    <Container>
      <BackgroundImg />
      <Logo src={images.goddess} />
      <FlexCenterHeading text='Blue Herbal Goddess' />
      <ComingSoonCopy>Coming Soon</ComingSoonCopy>
    </Container>
  </>
)

export default Services