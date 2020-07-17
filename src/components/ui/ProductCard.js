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

  const addToCartHandler = () => {
    AssessmentRecommendations[props.data.category].productIds.forEach(id => {
      let product = state.herbalProducts.find(product => product['ItemID'] === `${id}`)

      let cartObj = {
        id: id, 
        name: product.Name, 
        price: product.Amounts[4].Price.toFixed(2) 
      }
      dispatch(actions.addToCart(cartObj))
    })
  }

  return(
    <Container onClick={() => props.click(props.info.modalType, props.info.modalType === 'PRODUCT_BUNDLE' ? props.info.bundleData : props.info)} type={props.info.type}>
      <Name>{props.info.name}</Name>
      {props.info.type === 'bundle' ? null : <Desc>{props.info.description}</Desc>}
      <Price>{props.info.price ? `$${props.info.price}` : null}</Price>
      {props.info.type === 'bundle' ? <AddToCartBtn onClick={() => addToCartHandler()} small={true} text='Add To Cart'/> : null}
    </Container>
  ) 
}

export default ProductCard
