import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import SearchBar from './SearchBar'
import { ContentShade } from './Utility'
import colors from '../../assets/colors'
import images from '../../assets/imgs'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`

const MenuContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s linear .2s 1 forwards;
  z-index: 9;
`

const NavigationLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  justify-content: space-evenly;
`

const NavListItem = styled.span`
    a {
        color: white;
        text-decoration: none;
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
  width: 12vw;
  height: 10vw;
`

const MainMenu = ( props ) => {
  return (
      <>
        <MenuContainer visible={props.visible}>
            <SocialContainer>
                <Placeholder />
                <Placeholder />
                <Placeholder />
            </SocialContainer>
            <NavigationLinkContainer>
                <Router>
                    <NavListItem>
                        <Link to='/'>Discover Products</Link>
                    </NavListItem>
                    <NavListItem>
                        <Link to='/'>Cart</Link>
                    </NavListItem>
                    <NavListItem>
                        <Link to='/'>Assessment</Link>
                    </NavListItem>
                    <NavListItem>
                        <Link to='/'>About Us</Link>
                    </NavListItem>
                </Router>
            </NavigationLinkContainer>
            <SearchBar />
        </MenuContainer>
      </>
  )
}

export default MainMenu