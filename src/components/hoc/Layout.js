import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import colors from '../../assets/colors'

import FloatingActionButtons from '../ui/FloatingActionButtons'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,500i,700&display=swap");
  body {
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient( ${colors.blue.dark}, ${colors.blue.light});
  }
`

const RootLayer = styled.div`
  margin: 0;
`

const Layout = ( props ) => {
  return (
    <>
    {console.log(props.path)}
      <GlobalStyles />
      <RootLayer>
        <FloatingActionButtons
        hidden={ props.path === '/' ? true : false }
        showCart={false} />
        { props.children }
      </RootLayer>
    </>
  )
}


export default Layout