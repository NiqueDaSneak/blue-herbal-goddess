import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../hoc/Layout'
import { FlexCenterHeading, PageContainer, BodyCopy } from '../ui/Utility'
import Card from '../ui/Card'
import images from '../../assets/imgs'
import Modal from '../ui/Modals/Modal'
// import { modalConductor } from '../hoc/ModalConductor'
const Container = styled(PageContainer)`
`

const CardContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  justify-content: space-between;
`

const ProductGroups = [
  {
    modalAction: 'showProductBundle', 
    type: 'bundle',
    image: images.placeholder,
    price: '$999.99',
    description: 'This is a bundle created by the owner.'
  },
  {
    type: 'product',
    image: images.placeholder,
    price: '$999.99',
    description: 'This is an individual product for sale.'
  },  
  {
    type: 'type',
    image: images.placeholder,
    // price: '$999.99',
    description: 'This will open a search for a specific type or category of products.'
  }, 
  {
    type: 'product',
    image: images.placeholder,
    price: '$999.99',
    description: 'This is an individual product for sale.'
  },  
  {
    type: 'content',
    image: images.placeholder,
    // price: '$999.99',
    description: 'Interested in some content while you shop?'
  },  
]

const ProductsPage = ( props ) => {
  const [modalActive, setModalActive] = useState(false)
  const [modalAction, setModalAction] = useState(null)

  const cardClickHandler = (action) => {
    setModalActive(true)
    setModalAction(action)
  }

 return(
  <>
    <Layout 
      resetModal={() => setModalActive(false)}
      // toggleModal={() => setModalActive(!modalActive)}
      modalActive={modalActive}
      modalAction={modalAction} 
      path={props.match.path} />
    <Container>
      <FlexCenterHeading color='light' text='Products' />
      <BodyCopy>Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
      <CardContainer>
      { ProductGroups.map( group => {
        return(
          <Card 
            setModalAction={ action => cardClickHandler(action) }
            // setModalAction={ action => cardClickHandler(action) }
            info={group} />
        ) 
      }) }
      </CardContainer>
    </Container>
    {/* { modalActive && (
      <Modal toggle={setModalActive(false)} open={modalActive} modalAction={modalAction}>
        Sample modal content goes here...
      </Modal>
    )} */}
  </>
 )
}

export default ProductsPage