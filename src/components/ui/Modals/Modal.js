import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Portal from '../../hoc/Portal'
import ServiceModal from  '../ServiceModal'

const Modal = (props) => {
  // const [active, setActive] = useState(false)
  // console.log('in modal', props.active)
  // const modalConductor = (props) => {
  //   switch (props.modalType) {
  //     case 'SERVICE_MODAL':
  //       return   
  //     default:
  //       break;
  //   }
  // }
  
  return(
    <Portal>
      <ServiceModal active={props.modalType === 'SERVICE_MODAL'} activeItem={props.modalData} />  
      {/* {modalConductor(props)} */}
    </Portal>
  )
}
 
   

   export default Modal