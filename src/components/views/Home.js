import React from 'react'
import styled, { keyframes } from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenter } from '../hoc/Utility'
import SearchBar from '../ui/SearchBar'
import colors from '../../assets/colors'
import { ReactComponent as ImportedComponent } from '../../assets/imgs/goddess.svg'

const HomeBackground = styled.div`
background-color: ${colors.blue.primary};
  width: 100vw;
  height: 100vh;
`

const Heading = styled.span`
  font-size: 30pt;
`

const pulse = keyframes`
0% {
 transform: scale(1);
 /* opacity: 1; */
 transform-origin: center;
}
50% {
  transform: scale(.95);
}
100% {
 transform: scale(1);
 /* opacity: 0; */
 transform-origin: center;
}
`

const GoddessImg = styled(ImportedComponent)`
  width: 100vw;
  height: 62vh;
  #Leaves {
    .leaf {
      animation: ${pulse} infinite 3s linear;
    }
  }
  /* width: 100vw; */
  /* #Leaves {
    path {
      width: 1vw;
    } */
  }
`

const Home = ( props ) => (
  <HomeBackground>
    <FlexCenter>
      <Heading>Blue Herbal Goddess</Heading>
    </FlexCenter>
      <GoddessImg alt='Logo' />
      <SearchBar />
  </HomeBackground>
)

export default Home