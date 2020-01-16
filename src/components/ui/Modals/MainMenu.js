import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
// import SearchBar from './SearchBar'
import { fadeInForward } from '../Utility'
import images from '../../../assets/imgs'
import { device } from '../../../assets/MediaQueries'
import colors from '../../../assets/colors'

const MenuContainer = styled.div`
  position: fixed;
  background-color: ${colors.blue.main};
  width: 100vw;
  height: 40vh;
  bottom: ${ props => props.active ? '0vh;' : '-40vh'};
  visibility: ${ props => props.active ? 'visible' : 'hidden'};
  opacity: ${ props => props.active ? '1' : '0'};
  transition: all .6s ease-in-out;
  border-radius: 20px 20px 0 0;
  /* opacity: 0; */
  /* ${fadeInForward}; */
  z-index: 9;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const NavigationLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  justify-content: space-between;
  @media ${ device.tablet } {
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
`

const NavListItem = styled.span`
    a {
        color: white;
        text-decoration: none;
        font-size: 16pt;
        font-weight: lighter;
        @media ${ device.tablet } {
          font-size: 22pt;
        }
    }
`

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    img:nth-child(2) {
        margin-right: 10vw;
        margin-left: 10vw;
    }
`
const Placeholder = styled.img.attrs( props => ({
  src: images.fpo1,
  alt: 'Placeholder'
}))`
  height: 12vw;
  width: 12vw;
  @media ${ device.tablet } {
    width: 8vw;
  }
`

const MainMenu = ( props ) => {
  return (
    <MenuContainer active={props.active}>
        <SocialContainer>
            <Placeholder />
            <Placeholder />
            <Placeholder />
        </SocialContainer>
        <NavigationLinkContainer>
            <Router>
                <NavListItem>
                    <Link to='/'>Cart</Link>
                </NavListItem>
                <NavListItem>
                    <Link to='/services'>Services</Link>
                </NavListItem>
                <NavListItem>
                    <Link to='/assessment'>Assessment</Link>
                </NavListItem>
                <NavListItem>
                    <Link to='/products'>Discover Products</Link>
                </NavListItem>
            </Router>
        </NavigationLinkContainer>
        {/* <SearchBar /> */}
    </MenuContainer>
  )
}

export default MainMenu