import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import colors from '../../assets/colors'

import FloatingActionButtons from '../ui/FloatingActionButtons'
import images from '../../assets/imgs'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,500i,700&display=swap");
  body {
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    background: url(${images.wood});
    background-color: ${colors.blue.dark};
    background-attachment: fixed;
  }
`

const RootLayer = styled.div`
  margin: 0;
`

const Layout = ( props ) => {
  return (
    <>
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