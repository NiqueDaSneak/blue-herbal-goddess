import React, {useContext} from 'react'
import { withRouter } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import colors from '../../assets/colors'
import Modal from '../ui/Modals/Modal'
import FloatingActionButtons from '../ui/FloatingActionButtons'
import images from '../../assets/imgs'
import { ContentShade } from '../ui/Utility'
import { GlobalContext } from '../hoc/Store'
import actions from '../../store/actions'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,500i,700&display=swap");
  body {
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    /* background: url(${images.wood}); */
    background-color: ${colors.blue.dark};
    /* background-attachment: fixed; */
  }
  p {
    margin: 0;
  }
`

const RootLayer = styled.div`
  margin: 0;
`

const Layout = (props) => {

  const [state, dispatch] = useContext(GlobalContext)

  return (
    <>
      <GlobalStyles />
      <RootLayer>
        <FloatingActionButtons
        hidden={ props.location.pathname === '/' ? true : false }
        clicked={type => dispatch(actions.openModal(type))} />
        <ContentShade 
        onClick={() => dispatch(actions.closeModal(state.modalData))} 
        visible={state.modalOpen} />
        <Modal 
          close={() => dispatch(actions.closeModal(state.modalData))}
          open={state.modalOpen} 
          modalType={state.modalType}
          modalData={state.modalData} />
        { props.children }
      </RootLayer>
    </>
  )
}


export default withRouter(Layout)