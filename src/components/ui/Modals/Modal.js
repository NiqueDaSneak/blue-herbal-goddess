import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Portal from '../../hoc/Portal'

const slideUp = keyframes`
  from {
    bottom: -50vh;
  }
  to {
    bottom: 0vh;
  }
`

const ModalContainer = styled.div`
  position: fixed;  
  background-color: red;
  z-index: 5;
  bottom: ${ props => props.open ? 0 : '-50vh'};
  transition: bottom .6s ease-in-out;
  /* animation: ${slideUp} .6s ease-in-out; */
  /* transition-delay: 1s; */
  /* animation: slideUp 2s ease-in-out 0s 1 forward; */
  height: 40vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = (props) => {
  // const [active, setActive] = useState(false)
  // console.log('in modal', props.active)
  return(
    <Portal>
        <ModalContainer open={props.active}>

        </ModalContainer>
    </Portal>
  )
}

   

   export default Modal