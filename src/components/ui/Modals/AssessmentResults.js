import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import Images from '../../../assets/imgs'
import { BodyCopy, FlexCenterHeading } from '../Utility'
import Button from '../Button'
import colors from '../../../assets/colors'
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
  ${'' /* button {
    &:first-of-type {
      margin-top: 4vh;
      margin-bottom: 4vh;
    } */}
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

const Heading = styled(FlexCenterHeading)`
  span {
    margin-top: 4vh !important;
    color: red;
    /* font- */
  }
`

// let product = state.herbalProducts.find(product => {
//     {/* console.log("product['ItemID']: ", product['ItemID']) */}
//     return product['ItemID'] === `${id}`
//     })
//     setProducts([product])


const AssessmentResults = (props) => {
  const [state, dispatch] = useContext(GlobalContext)
  const [products, setProducts] = useState([])
  useEffect(() => {

  }, [])

  // if (props.active) {
  //   // {AssessmentRecommendations[category].productIds.forEach(id => {
  //   // })}
  // }
const renderProducts = category => {
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
  var products = []
  var bundlePrice = 0
  
  console.log(category)
  
  AssessmentRecommendations[category].productIds.forEach(id => {
  console.log('id: ', id)
  let product = state.herbalProducts.find(product => product['ItemID'] === `${id}`)
  console.log('product: ', product)
  bundlePrice = bundlePrice + Number(product.Amounts[4].Price.toFixed(2))

  let productObj = {
    modalType: 'SINGLE_PRODUCT', 
    type: 'product',
    image: images.placeholder,
    benefits: product.Benefits,
    recommendedUse: product.RecommendedUse,
    name: product.Name,
    price: product.Amounts[4].Price.toFixed(2),
    description: product.Benefits[0]
  }


  products.push(
    <Card 
      // key={index}
      click={(modalType, modalData) => dispatch(actions.openModal(modalType, modalData))}
      data={productObj} />
  )
  {/* console.log("product['ItemID']: ", product['ItemID']) */}
  // setProducts([product])
  // {/* console.log('product: ', product) */}
  })
  const bundleObj = {
    modalType: 'PRODUCT_BUNDLE', 
    type: 'bundle',
    image: images.placeholder,
    price: bundlePrice.toFixed(2),
    // description: 'Ships together',
    name: 'Buy The Bundle',
    bundleData: products
  }

  products.push(
    <Card 
      click={(modalType, modalData) => dispatch(actions.openModal(modalType, modalData))}
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