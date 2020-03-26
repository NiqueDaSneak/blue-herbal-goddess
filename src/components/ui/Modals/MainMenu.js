import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
// import SearchBar from './SearchBar'
import images from '../../../assets/imgs'
import { device } from '../../../assets/MediaQueries'
import colors from '../../../assets/colors'

const MenuContainer = styled.div`
  position: fixed;
  background-color: ${colors.blue.main};
  width: 100vw;
  bottom: ${ props => props.active ? '0vh;' : '-40vh'};
  visibility: ${ props => props.active ? 'visible' : 'hidden'};
  opacity: ${ props => props.active ? '1' : '0'};
  transition: all .6s ease-in-out;
  border-radius: 20px 20px 0 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media ${device.laptop} {
    width: 24vw;
    right: 3vh;
  }
`

const NavigationLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  justify-content: space-between;
  margin-top: 4vh;
  margin-bottom: 4vh;
  @media ${ device.tablet } {
    margin-top: 4vh;
    margin-bottom: 4vh;
  }
  @media ${device.laptop} {
    margin-top: 8vh;
    margin-bottom: 8vh;
    height: 30vh;
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
  justify-content: space-around;
  margin-top: 4vh;
  @media ${device.tablet} {
    margin-top: 4vh;
  }
`

const Placeholder = styled.img.attrs( props => ({
  src: images.fpo1,
  alt: 'Placeholder'
}))`
  /* height: 12vw; */
  width: 12vw;
  height: 12vw;
  @media ${ device.tablet } {
    width: 8vw;
    height: 8vw;
  }
  @media ${device.laptop} {
    width: 4vw;
    height: 4vw;
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