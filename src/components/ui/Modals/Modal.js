import React from 'react'
import Portal from '../../hoc/Portal'
import ServiceModal from  '../ServiceModal'

const Modal = (props) => {
  return(
    <Portal>
      <ServiceModal active={props.modalType === 'SERVICE_MODAL'} activeItem={props.modalData} />  
    </Portal>
  )
}
 
   

   export default Modal