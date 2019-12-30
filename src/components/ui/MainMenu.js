import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import { fadeInForward } from './Utility'
import images from '../../assets/imgs'
import { device } from '../../assets/MediaQueries'



const MenuContainer = styled.div`
  opacity: 0;
  ${fadeInForward};
  z-index: 9;
`

const NavigationLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  justify-content: space-evenly;
  @media ${ device.tablet } {
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
`

const NavListItem = styled.span`
    a {
        color: white;
        text-decoration: none;
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
  width: 12vw;
  @media ${ device.tablet } {
    width: 8vw;
  }
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