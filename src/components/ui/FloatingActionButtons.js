import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'
import Images from '../../assets/imgs'

const Circle = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10vw;
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
  position: fixed;
  img {
    width: 6vw
  }
`

const MenuToggle = styled(Circle)`
  bottom: 4vh;
  right: ${ props => props.hidden ? '-30vw' : '8vw' };
  background-color: ${colors.blue.dark};
  z-index: 2;
`

const CartToggle = styled(Circle)`
  width: 14vw;
  height: 14vw;
  /* bottom: 18vh; */
  right: ${ props => props.hidden ? '-30vw' : '11vw' };
  background-color: ${colors.blue.light};
  z-index: 1;
  bottom: ${ props => props.showCart ? '18vh' : '5vh' };
  transition: bottom 1s;
`

const FloatingActionButtons = ( props ) => {
  return(
    <>
      <MenuToggle hidden={props.hidden} onClick={props.onClick}>
        <img alt='Floating Action Button' src={Images.menu}/>
      </MenuToggle>
      <CartToggle hidden={props.hidden} showCart={props.showCart}>
        <img alt='Floating Action Button' src={Images.cart}/>
      </CartToggle>
    </>
  )
}

export default FloatingActionButtons