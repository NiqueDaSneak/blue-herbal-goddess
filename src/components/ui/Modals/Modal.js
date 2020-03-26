import React, {useContext} from 'react'
import Portal from '../../hoc/Portal'
import ServiceModal from  './ServiceModal'
import ProductBundleModal from './ProductBundleModal'
import SingleProductModal from './SingleProduct'
import MainMenu from './MainMenu'
import { GlobalContext } from '../../hoc/Store'

const Modal = (props) => {
  const [state, dispatch] = useContext(GlobalContext)

  return(
    <Portal>
      <ServiceModal active={state.modalType === 'SERVICE_MODAL'} activeItem={state.modalData} />  
      {/* <ProductBundleModal modalData={state.modalData} close={props.close} active={props.modalType === 'PRODUCT_BUNDLE'} /> */}
      <SingleProductModal productData={state.modalData} close={props.close} active={state.modalType === 'SINGLE_PRODUCT'} />
      <MainMenu active={state.modalType === 'MAIN_MENU'} />
    </Portal>
  )
}

export default Modal