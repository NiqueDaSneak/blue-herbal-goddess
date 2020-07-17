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
import PhoneIcon from '../../assets/imgs/phone.svg'
import { device } from '../../assets/MediaQueries'

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

const Footer = styled.div`
  background-color: black;
  width: 100%;
  justify-items: center;
  padding-top: 6%;
  padding-bottom: 6%;

  @media ${ device.laptop } {
    padding-top: 3%;
    padding-bottom: 3%;
  }

  .container {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    padding-left: 8%;
  }
  .contact-us {
    color: white;
    font-style: italic;
    margin-bottom: 2%;
    padding-left: 8%;
  }
`

const Phone = styled.img`
  width: 5%;
  height: 5%;
  padding-right: 8%;
  @media ${ device.laptop } {
    width: 2%;
    padding-right: 3%;
  }

`

const Tel = styled.p`
  color: white;
`

const Layout = (props) => {

  const [state, dispatch] = useContext(GlobalContext)

  return (
    <>
      <GlobalStyles />
      <RootLayer>
        {/* <FloatingActionButtons
        hidden={ props.location.pathname === '/' ? true : false }
        clicked={type => dispatch(actions.openModal(type))} /> */}
        <ContentShade 
        onClick={() => dispatch(actions.closeModal(state.modalData))} 
        visible={state.modalOpen} />
        <Modal 
          close={() => dispatch(actions.closeModal(state.modalData))}
          open={state.modalOpen} 
          modalType={state.modalType}
          modalData={state.modalData} />
        { props.children }
        <Footer>
        <p className='contact-us'>Contact Us</p>
        <a href="tel:931-981-9444" className='container'>
          <Phone src={PhoneIcon} />
          <Tel>(931) 981-9444</Tel>
        </a>
        </Footer>
      </RootLayer>
    </>
  )
}


export default withRouter(Layout)