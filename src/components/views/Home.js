import React from 'react'
import styled, { css, keyframes, createGlobalStyle } from 'styled-components'
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
`

const Heading = styled.span`
  font-size: 30pt;
  color: ${ colors.blue.dark };
  text-transform: uppercase;
  text-align: center;
  margin-top: 2vh;
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
const colorChange = keyframes`
  0% { 
    fill: ${colors.blue.main} 
  }
	50% { 
    fill: red
  }
	100% { 
    fill: ${colors.blue.main} 
  }
`

// function template(i, items, duration) {
//   return `
//       &:nth-child(${i + 1}) {
//         animation-delay: ${`${(duration / items) * i}s`};
//        }
//     `
// }
// function getAnimations(items, duration) {
//   let str = ''
//   for (let i = 0; i < items; i += 1) {
//     str += template(i, items, duration)
//   }
//   return str
// }

const GoddessImg = styled(ImportedComponent)`
  width: 100vw;
  height: 50vh;
  /* .goddess {
    animation: ${colorChange} infinite 3s linear;
  } */
  /* .goddess { */
    /* fill: red; */
    /* animation: ${colorChange} infinite 3s linear; */
  /* } */
  /* #Leaves { */

    /* path { */
      /* animation: ${pulse} infinite 4s ease-in-out; */
    /* } */
  /* } */
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