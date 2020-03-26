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
  ${'' /* height: 50vh; */}
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
  font-size: 16pt;
  font-weight: bolder;
`

const Copy = styled.p`
  width: 80%;
  margin-bottom: 4%;
  font-size: 10pt;
  text-align: center;
`

const Name = styled(Copy)`
  font-weight: bolder;
  font-size: 14pt;
`

const SingleProductModal = (props) => (
  <Container active={props.active}>
  {console.log(props.productData)}
    <Name>{props.productData.name}</Name>
    {props.productData.benefits !== undefined ? props.productData.benefits.map(benefit => <Copy>{benefit}</Copy>) : null }
    <Copy>{props.productData.howItWorks}</Copy>
    <Copy>{props.productData.recommendedUse}</Copy>
    <Price>{`$${props.productData.price}`}</Price>
    <Button text='Add To Cart'/>
  </Container>
)

export default SingleProductModal