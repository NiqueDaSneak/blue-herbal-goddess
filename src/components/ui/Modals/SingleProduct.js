import React from 'react'
import styled from 'styled-components'
import Images from '../../../assets/imgs'
import { BodyCopy, FlexCenterHeading } from '../Utility'
import Button from '../Button'
import colors from '../../../assets/colors'
import images from '../../../assets/imgs'

const Container = styled.div`
  color: white;
  border-radius: 20px 20px 0 0;
  position: fixed;
  bottom: ${props => props.active ? '0' : '-40vh'};
  left: 0;
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  opacity: ${props => props.active ? '1' : '0'};
  z-index: 6;
  transition: all .3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  width: 100vw;
  justify-content: space-evenly;
  padding-top: 4vh;
  padding-bottom: 4vh;
  background-color: ${colors.trans.blue.light};
  backdrop-filter: blur(20px);
`

const ProductImage = styled.img.attrs( props => ({
  src: Images.placeholder,
  alt: 'Placeholder'
}))``

const Price = styled.span`
  margin-bottom: 4vh;
`

const SingleProductModal = (props) => (
  <Container active={props.active}>
    <ProductImage />
    <BodyCopy>Product Name</BodyCopy>
    <BodyCopy>Proin pulvinar arcu eu sem posuere, vitae elementum justo auctor. Phasellus non odio felis. Suspendisse et libero in justo vulputate tristique accumsan nec arcu.</BodyCopy>
    <Price>$999.99</Price>
    <Button text='Buy This Only'/>
  </Container>
)

export default SingleProductModal