import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import colors from '../../assets/colors'
import images from '../../assets/imgs'
import MainMenu from '../ui/MainMenu'
import { ContentShade } from './Utility'

const Circle = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10vw;
  width: 15vw;
  height: 15vw;
`

const Cir = css`
  display: flex;
  justify-content: center;
  border-radius: 10vw;
  width: 15vw;
  height: 15vw;
  bottom: 5vh;
  right: 5vh;
  position: fixed;
`
const Square = css`   
  border-radius: 20px 20px 0 0;
  height: 40vh;
  position: fixed;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  bottom: 0vh;
  right: 0vh;
  z-index: 2;
`

const CircleToSquare = styled.div`
  ${ props => props.circle ? Cir : Square };
  box-shadow: 0px 0px 5px 0px black;
  transition: all .4s;
`

// const CircleToSquare = styled()

const MenuToggle = styled(CircleToSquare)`
  display: ${ props => props.hidden ? 'none' : undefined };
  background-color: ${colors.blue.main};
  z-index: 2;
`

const Hamburger = styled.img.attrs({
  alt: 'Floating Action Button', 
  src: images.menu
})`
  width: 6vw;  
  /* display: ${ props => props.visible ? 'inherit' : 'none'};
  opacity: ${ props => props.visible ? '1' : '0'}; */
  transition: all 1s ease-in-out;
`

const CartToggle = styled(Circle)`
  width: 12vw;
  height: 12vw;
  background-color: ${colors.blue.light};
  visibility: ${ props => props.showCart ? "visible" : "hidden"  };
  z-index: 1;
  margin-bottom: 4vh;
  bottom: 5vh;
  right: 5vh;
  position: fixed;
  img {
    width: 5vw;
  }
`
const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  bottom: 5vh;
  right: 5vh;
  align-items: center;
`

const FloatingActionButtons = ( props ) => {
  const [isCircle, toggleCircle] = useState(true)
  const [menuVisible, setMenu] = useState(false);

  return(
    <>
      <MenuToggle 
        circle={menuVisible ? false : true}
        onClick={ () => setMenu(true) }
        hidden={props.hidden} 
        visible={ menuVisible }>
          { menuVisible ? (
            <MainMenu 
            toggleMenu={ () => setMenu(!menuVisible) } 
            visible={ menuVisible } />
          ) : (
            <Hamburger />
          ) }
      </MenuToggle>
      <CartToggle showCart={props.showCart}>
        <img alt='Floating Action Button' src={images.cart}/>
      </CartToggle>
      <ContentShade onClick={ () => setMenu(!menuVisible) } visible={ menuVisible }/>
    </>
  )
}

export default FloatingActionButtons