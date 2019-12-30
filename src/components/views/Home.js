import React from 'react'
import styled, { css, keyframes, createGlobalStyle } from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenterHeading, fadeInForwardSlow } from '../ui/Utility'
import SearchBar from '../ui/SearchBar'
import NavigationButtons from '../ui/NavigationButtons'
import colors from '../../assets/colors'
import Layout from '../hoc/Layout'
import { ReactComponent as ImportedComponent } from '../../assets/imgs/goddess.svg'
import { device } from '../../assets/MediaQueries'

const HomeBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-image: url(${images.mountains});
  background-size: cover; */
  align-items: center;
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
    /* background-image: url(${images.desert}); */
    align-items: center;
  }
`

// const pulse = keyframes`
// 0% {
//  transform: scale(.9);
//  transform-origin: center;
// }
// 50% {
//   transform: scale(1);
// }
// 100% {
//  transform: scale(.9);
//  transform-origin: center;
// }
// `
// const colorChange = keyframes`
//   0% { 
//     fill: ${colors.blue.main} 
//   }
// 	50% { 
//     fill: red
//   }
// 	100% { 
//     fill: ${colors.blue.main} 
//   }
// `

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
  ${fadeInForwardSlow}
`

const Home = ( props ) => (
  <>
    <Layout path={props.match.path} />
    <HomeBackground>
      <FlexCenterHeading color='light' text='Blue Herbal Goddess' />
      <GoddessImg alt='Logo' />
      <SearchBar />
      <NavigationButtons />
    </HomeBackground>
  </>
)

export default Home