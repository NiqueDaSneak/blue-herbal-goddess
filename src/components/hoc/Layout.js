import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import MainMenu from '../ui/MainMenu'
import FloatingActionButtons from '../ui/FloatingActionButtons'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,500i,700&display=swap");
  body {
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
  }
`

const RootLayer = styled.div`
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Layout = ( props ) => {
  const [menuVisible, setMenu] = useState(false);

  return (
    <>
      <GlobalStyles />
      <RootLayer>
        <FloatingActionButtons
        hidden={true}
        onClick={ () => setMenu(!menuVisible) } 
        showCart={false}
        />
        <MainMenu 
        toggleMenu={ () => setMenu(!menuVisible) } 
        visible={ menuVisible }/>
          { props.children }
      </RootLayer>
    </>
  )
}


export default Layout