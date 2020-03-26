import React, {useContext} from 'react'
import Portal from '../../hoc/Portal'
import ServiceModal from  './ServiceModal'
import SingleProductModal from './SingleProduct'
import MainMenu from './MainMenu'
import { GlobalContext } from '../../hoc/Store'

const Modal = (props) => {
  const [state, dispatch] = useContext(GlobalContext)

  return(
    <Portal>
      <MainMenu active={state.modalType === 'MAIN_MENU'} />
      <ServiceModal active={state.modalType === 'SERVICE_MODAL'} activeItem={state.modalData} />  
      <SingleProductModal productData={state.modalData} close={props.close} active={state.modalType === 'SINGLE_PRODUCT'} />
    </Portal>
  )
}

export default Modal