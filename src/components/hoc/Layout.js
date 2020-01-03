import React, {useReducer, useEffect} from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import colors from '../../assets/colors'
import Modal from '../ui/Modals/Modal'
import FloatingActionButtons from '../ui/FloatingActionButtons'
import images from '../../assets/imgs'
import { ContentShade } from '../ui/Utility'
// import ModalConductor from './ModalConductor'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,500i,700&display=swap");
  body {
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    background: url(${images.wood});
    background-color: ${colors.blue.dark};
    background-attachment: fixed;
  }
  
  p {
    margin: 0;
  }
`

const RootLayer = styled.div`
  margin: 0;
`
const Layout = ( props ) => {
// const initialState = {
//   modalActive: false,
//   modalAction: null
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'closeModal':
//       props.resetModal()
//       return {modalActive: false};
//     case 'openModal':
//       return {modalActive: true};
//     default:
//       throw new Error();
//   }
// }


  // const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   if (props.modalActive) {
  //     dispatch({type: 'openModal'})   
  //   }
  // }, [props.modalActive])

  return (
    <>
      <GlobalStyles />
      <RootLayer>
        <FloatingActionButtons
        hidden={ props.path === '/' ? true : false }
        showCart={false} />
        <ContentShade 
        onClick={() => props.closeModal(props.modalData)} 
        visible={props.modalOpen} />
        <Modal 
          close={props.closeModal}
          open={props.modalOpen} 
          modalType={props.modalType}
          modalData={props.modalData} />
        { props.children }
      </RootLayer>
    </>
  )
}


export default Layout