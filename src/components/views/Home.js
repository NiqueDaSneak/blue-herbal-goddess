import React from 'react'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenter } from '../hoc/Utility'
import SearchBar from '../ui/SearchBar'
import NavigationButtons from '../ui/NavigationButtons'
import colors from '../../assets/colors'
import { ReactComponent as ImportedComponent } from '../../assets/imgs/goddess.svg'

const HomeBackground = styled.div`
  background-color: ${colors.blue.main};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${images.mountains});
  background-size: cover;
  /* filter: grayscale(100%); */
`

const Heading = styled.span`
  font-size: 30pt;
  color: ${ colors.blue.dark };
  text-transform: uppercase;
  text-align: center;
`

const pulse = keyframes`
0% {
 transform: scale(.9);
 transform-origin: center;
}
50% {
  transform: scale(1);
}
100% {
 transform: scale(.9);
 transform-origin: center;
}
`

const GoddessImg = styled(ImportedComponent)`
  width: 100vw;
  height: 50vh;
  #Leaves {
    path {
      animation: ${pulse} infinite 3s ease-in-out;
    }
  }
  }
`

const Home = ( props ) => (
  <HomeBackground>
    <FlexCenter>
      <Heading>Blue Herbal Goddess</Heading>
    </FlexCenter>
    <GoddessImg alt='Logo' />
    <SearchBar />
    <NavigationButtons />
  </HomeBackground>
)

export default Home