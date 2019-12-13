import React from 'react'
import styled from 'styled-components'
import images from '../../assets/imgs'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  height: 22vh;
  span {
    &:first-of-type {
      color: green;
    }
    &:last-of-type {
      font-style: italic;
    }
  }
`

const ServiceIcon = styled.img`
  width: 18vw;
`

const InfoIcon = styled.img`
  width: 6vw;
`


const ServiceItem = ( props ) => (
  <Container>
    <span>Heading</span>
    <ServiceIcon src='http://via.placeholder.com/50x50' alt='Service Item'/>
    <span>Product Name</span>
    <InfoIcon src={images.information} alt='Information Button' />
  </Container>
)

export default ServiceItem