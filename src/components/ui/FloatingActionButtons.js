import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import colors from '../../assets/colors'
import Images from '../../assets/imgs'

const Circle = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10vw;
  width: 15vw;
  height: 15vw;
`

const CircleToSquare = styled.div`
  transition: all .4s;
  visibility: ${ props => props.hidden ? 'hidden' : 'visible' }
  ${ props => props.circle ? css`
    display: flex;
    justify-content: center;
    border-radius: 10vw;
    width: 15vw;
    height: 15vw;
    bottom: 5vh;
    right: 5vh;
    position: fixed;
    img {
      width: 6vw;
    }
  ` : css`
    background-color: ${colors.blue.main};
    position: fixed;
    width: 100vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 4vh;
    padding-bottom: 4vh;
    bottom: 0;
    right: 0;
    z-index: 2;
    border-radius: 20px 20px 0px 0px;
    img {
      visibility: hidden;
    } 
  ` }
`

// const CircleToSquare = styled()

const MenuToggle = styled(CircleToSquare)`
  background-color: ${colors.blue.dark};
  z-index: 2;
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
  return(
    <>
      {/* <CircleToSquare circle={isCircle} onClick={() => toggleCircle(!isCircle)} /> */}
      {/* <Container> */}
        <MenuToggle 
        circle={props.circle} 
        onClick={() => {
          toggleCircle(!isCircle)
          props.onClick()
          } 
        }
        hidden={props.hidden} 
        // onClick={props.onClick}
        >
          <img alt='Floating Action Button' src={Images.menu}/>
        </MenuToggle>
        <CartToggle showCart={props.showCart}>
          <img alt='Floating Action Button' src={Images.cart}/>
        </CartToggle>
      {/* </Container> */}
    </>
  )
}

export default FloatingActionButtons