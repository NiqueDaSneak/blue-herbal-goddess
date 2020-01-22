import React from 'react'
import Portal from '../../hoc/Portal'
import ServiceModal from  './ServiceModal'
import ProductBundleModal from './ProductBundleModal'
import SingleProductModal from './SingleProduct'
import MainMenu from './MainMenu'

const Modal = (props) => {
  return(
    <Portal>
      <ServiceModal active={props.modalType === 'SERVICE_MODAL'} activeItem={props.modalData} />  
      {/* <ProductBundleModal close={props.close} active={props.modalType === 'PRODUCT_BUNDLE'} /> */}
      <SingleProductModal close={props.close} active={props.modalType === 'SINGLE_PRODUCT'} />
      <MainMenu active={props.modalType === 'MAIN_MENU'} />
    </Portal>
  )
}

export default Modal