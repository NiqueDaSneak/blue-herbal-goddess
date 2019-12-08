import React, { useState } from 'react'
import styled from 'styled-components'

import MainMenu from '../ui/MainMenu'
import FloatingActionButton from '../ui/Fab'

const RootLayer = styled.div`
  margin: 0;
`

const Layout = ( props ) => {
  const [menuVisible, setMenu] = useState(false);

  return (
    <RootLayer>
      <FloatingActionButton 
      onClick={ () => setMenu(!menuVisible) } />
      <MainMenu 
      toggleMenu={ () => setMenu(!menuVisible) } 
      visible={ menuVisible }/>
        { props.children }
    </RootLayer>
  )
}


export default Layout