import React, {useContext} from 'react'
import styled from 'styled-components'
import { BodyCopy, FlexCenterHeading } from '../Utility'
import Button from '../Button'
import images from '../../../assets/imgs'
import {default as Card} from '../../ui/ProductCard'
import { device } from '../../../assets/MediaQueries'
import { GlobalContext } from '../../hoc/Store'
import AssessmentRecommendations from '../../../data/AssessmentRecommendations' 
import actions from '../../../store/actions'

const Container = styled.div`
  color: white;
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  opacity: ${props => props.active ? '1' : '0'};
  width: 100vw;
  transition: all .6s ease-in-out;
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  }
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

const Heading = styled(FlexCenterHeading)`
  span {
    margin-top: 4vh !important;
    color: red;
  }
`

const AssessmentResults = (props) => {
  const [state, dispatch] = useContext(GlobalContext)

const renderProducts = category => {
  var products = []
  var bundlePrice = 0
  
  AssessmentRecommendations[category].productIds.forEach(id => {
  let product = state.herbalProducts.find(product => product['ItemID'] === `${id}`)
  bundlePrice = bundlePrice + Number(product.Amounts[4].Price.toFixed(2))

  let productObj = {
    modalType: 'SINGLE_PRODUCT', 
    type: 'product',
    image: images.placeholder,
    benefits: product.Benefits,
    recommendedUse: product.RecommendedUse,
    name: product.Name,
    price: product.Amounts[4].Price.toFixed(2),
    description: product.Benefits[0],
    id: id
  }

  products.push(
    <Card 
      key={productObj.name}
      click={(modalType, modalData) => dispatch(actions.openModal(modalType, modalData))}
      data={productObj} />
  )
  })
  const bundleObj = {
    modalType: 'PRODUCT_BUNDLE', 
    type: 'bundle',
    image: images.placeholder,
    price: bundlePrice.toFixed(2),
    name: 'Buy The Bundle',
    bundleData: products,
    category: category
  }

  products.push(
    <Card 
      key={bundleObj.price}
      click={() => null}
      data={bundleObj}
    />
  )

  return products
}

  return(
    <Container active={props.active}>
      <Heading small color='light' text='Results' />
      <BodyCopy>It looks like you have a deficiency with the following body systems:</BodyCopy>
      {state.assessmentResultCategories.map((category, i) => {
        return(
          <div key={i}>
            <Heading small color='light' text={AssessmentRecommendations[category].title} />
            <BodyCopy>{AssessmentRecommendations[category].description}</BodyCopy>
            <CardContainer>
            {state.herbalProducts.length > 0 ? renderProducts(category) : null}
            </CardContainer>
          </div>
        )
      })}
      <Button text='Retake Assessment'/>
    </Container>
  )
}


export default AssessmentResults