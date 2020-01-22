import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexCenterHeading, PageContainer, BodyCopy, NoScrollBackground } from '../ui/Utility'
import {default as Card} from '../ui/ProductCard'
import images from '../../assets/imgs'
import { device } from '../../assets/MediaQueries'

const Container = styled(PageContainer)`
  
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

export const BG = styled(NoScrollBackground)`
`

const ProductsPage = ( props ) => {
 return(
  <BG image={images.wood}>
    <Container>
      <FlexCenterHeading color='light' text='Products' />
      <BodyCopy>Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
      <CardContainer>
      { ProductGroups.map((group, index) => {
        return(
          <Card
          key={index} 
          click={type => props.openModal(type)}
          info={group} />
          ) 
        }) }
      </CardContainer>
    </Container>
  </BG>
 )
}

export default ProductsPage