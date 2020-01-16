import React from 'react'
import styled from 'styled-components'
import { FlexCenterHeading, fadeInForwardSlow, NoScrollBackground } from '../ui/Utility'
import SearchBar from '../ui/SearchBar'
import NavigationButtons from '../ui/NavigationButtons'
import { ReactComponent as ImportedComponent } from '../../assets/imgs/goddess.svg'
import { device } from '../../assets/MediaQueries'
import images from '../../assets/imgs'

const HomeBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 4vh; */
  div {
    &:nth-of-type(2) {
      margin-top: 4vh;
      margin-bottom: 4vh;
    }
  }
  
  @media ${ device.tablet } {
    justify-content: space-evenly;
  }

  @media ${ device.laptop } {
    justify-content: space-evenly;
    align-items: center;
  }
`

const GoddessImg = styled(ImportedComponent)`
  height: 40vh;
  margin-top: 4vh;
  margin-bottom: 4vh;
  ${fadeInForwardSlow}
  width: 100vw;
  @media ${device.desktop} {
  }
`

const BG = styled(NoScrollBackground)`
  width: 100vw;
`

const Home = ( props ) => (
  <BG image={images.wood}>
    <HomeBackground>
      <FlexCenterHeading color='light' text='Blue Herbal Goddess' />
      <GoddessImg alt='Logo' />
      {/* <SearchBar /> */}
      <NavigationButtons />
    </HomeBackground>
  </BG>
)

export default Home