import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import colors from '../../assets/colors'

const MenuContainer = styled.div`
    background-color: ${colors.primaryBlue};
    bottom: 0;
    background-color: #0916b9;
    position: fixed;
    width: 100vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 4vh;
    padding-bottom: 4vh;
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



const MainMenu = ( props ) => {
  return (
    <MenuContainer>
        <SocialContainer>
            <img alt='Placeholder' src='https://via.placeholder.com/50'/>
            <img alt='Placeholder' src='https://via.placeholder.com/50'/>
            <img alt='Placeholder' src='https://via.placeholder.com/50'/>
        </SocialContainer>
        <NavigationLinkContainer className="nav-links">
            <Router>
                <NavListItem>
                    <Link>Discover Products</Link>
                </NavListItem>
                <NavListItem>
                    <Link>Cart</Link>
                </NavListItem>
                <NavListItem>
                    <Link>Assessment</Link>
                </NavListItem>
                <NavListItem>
                    <Link>About Us</Link>
                </NavListItem>
            </Router>
        </NavigationLinkContainer>
        <SearchBar />
    </MenuContainer>
  )
}

export default MainMenu