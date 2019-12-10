import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import MainMenu from '../ui/MainMenu'
import FloatingActionButtons from '../ui/FloatingActionButtons'

const Resets = createGlobalStyle`
  body {
    margin: 0 auto;
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
      <Resets />
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