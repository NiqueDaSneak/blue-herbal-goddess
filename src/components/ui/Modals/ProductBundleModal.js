import React from 'react'
import styled from 'styled-components'
import Images from '../../../assets/imgs'
import { BodyCopy, FlexCenterHeading } from '../Utility'
import Button from '../Button'
import colors from '../../../assets/colors'

const Container = styled.div`
  color: white;
  height: 100vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  right: 0;
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  opacity: ${props => props.active ? '1' : '0'};
  z-index: 6;
  transition: all .6s ease-in-out;
  background-color: grey;
  background-color: ${colors.blue.dark};
  background-image: url(https://www.transparenttextures.com/patterns/wine-cork.png);
  /* backdrop-filter: blur(30px); */
`

const ProductOverview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  justify-content: space-evenly;
`

const BundleInfo = styled.div`
  box-shadow: 0px 0px 10px 0px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  height: 40vh;
  width: 100vw;
  justify-content: space-evenly;
  background-color: ${colors.blue.main};
  background-image: url(https://www.transparenttextures.com/patterns/wine-cork.png);
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

const ProductBundleModal = (props) => (
    <Container active={props.active}>
      <ProductOverview>
          <BodyCopy>Proin pulvinar arcu eu sem posuere, vitae elementum justo auctor. Phasellus non odio felis. Suspendisse et libero in justo vulputate tristique accumsan nec arcu.</BodyCopy>
          <ProductPreviewContainer>
            <ProductImage />
            <ProductImage />
            <ProductImage />
            <ProductImage />
            <ProductImage />
            <ProductImage />
          </ProductPreviewContainer>
          <Price>$999.99</Price>
          <Button text='Buy This Only'/>
        </ProductOverview>
        <BundleInfo>
          <FlexCenterHeading text='Bundle Heading'/>
          <BodyCopy>Proin pulvinar arcu eu sem posuere, vitae elementum justo auctor. Phasellus non odio felis. Suspendisse et libero in justo vulputate tristique accumsan nec arcu.</BodyCopy>
          <Price>$999.99</Price>
          <BtnContainer>
            <Button text='Buy Bundle'/>
            <Button light onClick={props.close} text='Back'/>
          </BtnContainer>
        </BundleInfo>
    </Container>
)

export default ProductBundleModal