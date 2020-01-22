import React from 'react'
import styled from 'styled-components'
import Images from '../../../assets/imgs'
import { BodyCopy, FlexCenterHeading } from '../Utility'
import Button from '../Button'
import colors from '../../../assets/colors'
import images from '../../../assets/imgs'
import {default as Card} from '../../ui/ProductCard'
import { device } from '../../../assets/MediaQueries'

const Container = styled.div`
  color: white;
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  opacity: ${props => props.active ? '1' : '0'};
  width: 100vw;
  transition: all .6s ease-in-out;
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  button {
    &:first-of-type {
      margin-top: 4vh;
      margin-bottom: 4vh;
    }
  }
`

const ProductImage = styled.img.attrs( props => ({
  src: Images.placeholder,
  alt: 'Placeholder'
}))``

const Price = styled.span``

const ProductPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  width: 100vw;
`

const BtnContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  justify-content: space-between;
  @media ${device.laptop} {
    justify-content: space-around;
  }
`
const ProductGroups = [
  {
    modalType: 'PRODUCT_BUNDLE', 
    type: 'bundle',
    image: images.placeholder,
    price: '$999.99',
    description: 'This is a bundle created by the owner.'
  },
  {
    modalType: 'SINGLE_PRODUCT', 
    type: 'product',
    image: images.placeholder,
    price: '$999.99',
    description: 'This is an individual product for sale.'
  },  
  // {
  //   type: 'search',
  //   image: images.placeholder,
  //   // price: '$999.99',
  //   description: 'This will open a search for a specific type or category of products.'
  // }, 
  {
    modalType: 'SINGLE_PRODUCT', 
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
  {
    modalType: 'PRODUCT_BUNDLE', 
    type: 'bundle',
    image: images.placeholder,
    price: '$999.99',
    description: 'This is a bundle created by the owner.'
  },
  {
    modalType: 'PRODUCT_BUNDLE', 
    type: 'bundle',
    image: images.placeholder,
    price: '$999.99',
    description: 'This is a bundle created by the owner.'
  },
]

const Heading = styled(FlexCenterHeading)`
  span {
    margin-top: 4vh !important;
    color: red;
    /* font- */
  }
`

const AssessmentResults = (props) => (
  <Container active={props.active}>
    <Heading small color='light' text='Results' />
    <BodyCopy>Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus. Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
    <CardContainer>
      { ProductGroups.map( group => {
        return(
          <Card 
          click={type => props.openModal(type)}
          info={group} />
          ) 
        }) }
      </CardContainer>
      <Button light text='More Products'/>
      <Button text='Retake Assessment'/>
  </Container>
)

export default AssessmentResults