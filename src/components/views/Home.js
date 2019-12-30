import React from 'react'
import styled from 'styled-components'
import { FlexCenterHeading, fadeInForwardSlow } from '../ui/Utility'
import SearchBar from '../ui/SearchBar'
import NavigationButtons from '../ui/NavigationButtons'
import Layout from '../hoc/Layout'
import { ReactComponent as ImportedComponent } from '../../assets/imgs/goddess.svg'
import { device } from '../../assets/MediaQueries'

const HomeBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
    align-items: center;
  }
`

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