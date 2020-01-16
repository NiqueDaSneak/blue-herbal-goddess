import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import colors from '../../assets/colors'
import images from '../../assets/imgs'
// import MainMenu from '../ui/MainMenu'
import { ContentShade } from './Utility'
import { device } from '../../assets/MediaQueries'

const Circle = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10vw;
  width: 15vw;
  height: 15vw;
  @media ${ device.tablet } {
    width: 10vw;
    height: 10vw;
  }
  @media ${ device.laptop } {
    width: 4vw;
    height: 4vw;
  }
`

const Cir = css`
  display: flex;
  justify-content: center;
  border-radius: 10vw;
  width: 15vw;
  height: 15vw;
  /* bottom: 5vh;
  right: 5vh;
  position: fixed; */
  transition: all .4s;
  @media ${ device.tablet } {
    width: 10vw;
    height: 10vw;
  }
  @media ${ device.laptop } {
    width: 4vw;
    height: 4vw;
  }
`
const Square = css`   
  border-radius: 20px 20px 0 0;
  height: 40vh;
  position: fixed;
  width: 100vw;
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly; */
  bottom: 0vh;
  right: 0vh;
  transition: all .4s;
`

const CircleToSquare = styled.div`
  ${ props => props.circle ? Cir : Square };
  box-shadow: 0px 0px 5px 0px black;
  transition: all .4s;
`

const MenuToggle = styled(Circle)`
  display: ${ props => props.hidden ? 'none' : undefined };
  background-color: ${colors.blue.main};
  /* z-index: 5; */
`

const Hamburger = styled.img.attrs({
  alt: 'Floating Action Button', 
  src: images.menu
})`
  width: 6vw;  
  transition: all 1s ease-in-out;
  @media ${ device.tablet } {
    width: 4vw;
  }
  @media ${ device.laptop } {
    width: 1.4vw;
  }
`

const CartToggle = styled(Circle)`
  width: 12vw;
  height: 12vw;
  background-color: ${colors.blue.light};
  visibility: ${ props => props.showCart ? "visible" : "hidden"  };
  z-index: 1;
  margin-bottom: 2vh;
  box-shadow: 0px 0px 5px 0px black;
  img {
    width: 5vw;
  }
`
const Container = styled.div`
  bottom: 3vh;
  right: 3vh;
  position: fixed;
  z-index: 5;    
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`

const FloatingActionButtons = ( props ) => {
  // const [menuVisible, setMenu] = useState(false);

  return(
    <>
      <Container>
        <MenuToggle 
          onClick={() => props.clicked('MAIN_MENU')}
          hidden={props.hidden}>
          <Hamburger />
        </MenuToggle>
        <CartToggle 
          showCart={props.showCart}
          onClick={() => props.clicked('CART')} >
          <img alt='Floating Action Button' src={images.cart}/>
        </CartToggle>
      </Container>
      {/* <ContentShade onClick={ () => setMenu(!menuVisible) } visible={ menuVisible }/> */}
    </>
  )
}

export default FloatingActionButtons