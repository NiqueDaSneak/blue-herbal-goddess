import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'
import images from '../../assets/imgs'
import { device } from '../../assets/MediaQueries'
import Button from './Button'
// import modalConductor from '../hoc/ModalConductor'

const colorChooser = type => {
  switch (type) {
    case 'bundle':
      return colors.trans.white
    case 'product':
      return colors.trans.blue.light
    case 'type':
      return colors.trans.blue.dark
    case 'content':
      return null
    default:
      break;
  }
}

const Container = styled.div`
  /* box-shadow: 0px 0px 5px 0px black; */
  /* padding: 6%; */
  ${'' /* padding-top: 2%;
  padding-bottom: 2%; */}
  width: 40vw;
  border-radius: 20px;
  margin-bottom: 4vh;
  height: 24vh;
  background-color: ${ props => colorChooser(props.type) };
  border: ${ props => props.type === 'content' ? '1px solid white' : null }; 
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  p {
    text-align: center;
  }
  @media ${ device.laptop} {
    width: 32vw;
    height: 50vh;
  }

`

const Image = styled.img.attrs({
  alt: 'Descriptive Image'
})`
  width: 20vw;
  @media ${device.tablet} {
    width: 20vw;
  }

  @media ${device.laptop} {
    width: 14vw;
  }
`

const Price = styled.p`
  font-weight: bold;
  @media ${device.tablet} {
    font-size: 14pt;
  }
  @media ${device.laptop} {
    font-size: 14pt;
  }
`

const Desc = styled.p`
  font-weight: lighter;
  font-size: 8pt;
  width: 30vw;
  @media ${device.tablet} {
    font-size: 14pt;
  }
  @media ${device.laptop} {
    font-size: 14pt;
  }
`

const Name = styled.p`
  margin-top: 0vh !important;
  font-weight: bolder;
  font-size: 10pt;
  width: 30vw;
  @media ${device.tablet} {
    font-size: 14pt;
  }
  @media ${device.laptop} {
    font-size: 14pt;
  }
`
const AddToCartBtn = styled(Button)`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
`

const ProductCard = ( props ) => (
  <Container onClick={() => props.click(props.data.modalType, props.data.modalType === 'PRODUCT_BUNDLE' ? props.data.bundleData : props.data)} type={props.data.type}>
  {/* <Container onClick={() => props.click(props.data.modalType)} type={props.data.type}> */}
  {console.log(props.data)}
    {/* <Image src={props.data.type === 'content' ? images.youtube : props.data.image} /> */}
    <Name>{props.data.name}</Name>
    {props.data.type === 'bundle' ? null : <Desc>{props.data.description}</Desc>}
    <Price>{props.data.price ? `$${props.data.price}` : null}</Price>
    {props.data.type === 'bundle' ? <AddToCartBtn small={true} text='Add To Cart'/> : null}
  </Container>
)

export default ProductCard
