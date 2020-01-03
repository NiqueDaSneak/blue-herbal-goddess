import React from 'react'
import styled from 'styled-components'
import { Modals } from '../ui/Modals/'
import Portal from './Portal'

// const modalChooser = (modalAction) => {
//   switch (modalAction) {
//     case 'showProductBundle':
//       return <Modals.showProductBundle />
//     default:
//       break;
//   }
// }

const ModalContainer = styled.div`
  position: fixed;  
  bottom: 0;
  height: 40vh;
  width: 100vw;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;  height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;



// export const ModalConductor = (props) => {
//   export const modalConductor = action => {
//     console.log('does this work?')
//   }
// }
  
  // <Portal>
  //       <ModalContainer>

  //       </ModalContainer>
  //   </Portal>
  // <>
  //   {modalChooser(props.modalAction)}
  // </>
// )
// 

export default ModalConductor