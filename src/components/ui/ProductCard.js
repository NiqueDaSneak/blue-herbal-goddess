import React, {useContext} from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'
import { device } from '../../assets/MediaQueries'
import Button from './Button'
import actions from '../../store/actions'
import { GlobalContext } from '../hoc/Store'
import AssessmentRecommendations from '../../data/AssessmentRecommendations'

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

const ProductCard = props => {
  const [state, dispatch] = useContext(GlobalContext)

  const dispatchBundle = () => {
    AssessmentRecommendations[props.data.category].productIds.forEach(id => {
      dispatch(actions.addToCart(id))
    })
  }

  return(
    <Container onClick={() => props.click(props.data.modalType, props.data.modalType === 'PRODUCT_BUNDLE' ? props.data.bundleData : props.data)} type={props.data.type}>
      <Name>{props.data.name}</Name>
      {props.data.type === 'bundle' ? null : <Desc>{props.data.description}</Desc>}
      <Price>{props.data.price ? `$${props.data.price}` : null}</Price>
      {props.data.type === 'bundle' ? <AddToCartBtn onClick={() => dispatchBundle()} small={true} text='Add To Cart'/> : null}
    </Container>
  ) 
}

export default ProductCard
