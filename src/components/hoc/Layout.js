import React from 'react'
import MainMenu from '../ui/MainMenu'
import FloatingActionButton from '../ui/Fab'

const Layout = ( props ) => {
  return (
    <>
    <FloatingActionButton />
    <MainMenu />
    { props.children }
    </>
  )
}


export default Layout