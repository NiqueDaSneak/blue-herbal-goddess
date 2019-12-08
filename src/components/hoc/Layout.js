import React, { useState } from 'react';
import MainMenu from '../ui/MainMenu'
import FloatingActionButton from '../ui/Fab'

const Layout = ( props ) => {
  
  const [menuVisible, setMenu] = useState(false);

  return (
    <>
    <FloatingActionButton 
    onClick={() => setMenu(!menuVisible)} />
    <MainMenu visible={menuVisible}/>
    { props.children }
    </>
  )
}


export default Layout