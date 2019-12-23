import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import { ContentShade } from './Utility'
import colors from '../../assets/colors'
import images from '../../assets/imgs'

const MenuContainer = styled.div`
  /* background-color: ${colors.blue.main}; */
  position: fixed;
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4vh;
  padding-bottom: 4vh;
  bottom: 0;
  transform: ${ props => props.visible ? 'scale(1)' : 'scale(.4)'};
  opacity: ${ props => props.visible ? "1" : "0" };
  visibility: ${ props => props.visible ? "visible" : "hidden" };
  /* transition: transform 6s ease-in-out; */
  transition: opacity .8s ease-in-out;
  transition-delay: .2s;
  /* transition: visibility 1s ease-in-out; */
  left: 0;
  z-index: 2;
`

const NavigationLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20vh;
    justify-content: space-between;
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
`

const MainMenu = ( props ) => {
  return (
      <>
        <ContentShade onClick={ props.toggleMenu } visible={ props.visible }/>
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