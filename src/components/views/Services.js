import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenterHeading, BodyCopy, ContentShade } from '../ui/Utility'
import colors from '../../assets/colors'
import ServiceItem from '../ui/ServiceItem'
import Layout from '../hoc/Layout'
import AboutUs from '../ui/AboutUs'
import ServiceModal from  '../ui/ServiceModal'

const ServicesSection = styled.div`
  /* background-color: ${colors.test}; */
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-top: 4vh;
`
// const globalcreateGlobalStyles`
// `
const BackgroundImage = styled.div`
  z-index: -1;
  background-size: cover;
  /* background-image: url(${ images.mountains }); */
  background-position-x: center;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  position: fixed;
  color: white;
`

const ItemsContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 46vh;
`
// const rotate = keyframes`
//   from {
//     transform: rotateY(0deg);
//   }
//   to {
//     transform: rotateY(360deg);
//   }
// `

const Logo = styled.img`
  width: 12vw;
`

const ServiceItems = [
  {
    heading: 'Heading 1',
    productName: 'Product Name 1',
    icon: images.fpo1,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 2',
    productName: 'Product Name 2',
    icon: images.fpo2,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 3',
    productName: 'Product Name 3',
    icon: images.fpo3,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 4',
    productName: 'Product Name 4',
    icon: images.fpo1,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 5',
    productName: 'Product Name 5',
    icon: images.fpo2,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 6',
    productName: 'Product Name 6',
    icon: images.fpo3,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
]

const Services = ( props ) => {
  const [modalActive, setModal] = useState(false)
  const [activeItem, setActiveItem] = useState({})
  const [activeIndex, setActiveIndex] = useState(99)

  const itemClickHandler = item => {
    setModal(true)
    setActiveItem(item)
  }

  const resetHandler = () => {
    setActiveIndex(99)
    setModal(false)
  }

  const activeIndexChangeHandler = (val) => {
    let newValue = activeIndex + val
    if (newValue < 0) {
      newValue = 5
    }

    if (newValue > 5) {
      newValue = 0
    }
    setActiveIndex(newValue)
  }

  return(
    <>
    <Layout path={ props.match.path } />
      <ServicesSection>
        <Logo src={images.goddess.white} />
        <FlexCenterHeading color='light' text='Services' />
        <BodyCopy>Fusce eu purus in felis commodo lobortis sed id erat. Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
        <ItemsContainer>
        { ServiceItems.map( (item, index) => {
          return (
            <ServiceItem
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={(val) => setActiveIndex(val)} 
            activeItem={activeItem}
            setActiveItem={ (item) => itemClickHandler(item) }
            item={item}
            />
          )
        }) } 
        </ItemsContainer>
        </ServicesSection>
        <AboutUs />
      {/* <ContentShade onClick={ () => resetHandler() } visible={ modalActive }/> */}
      <ServiceModal 
        setActiveIndex={ (val) => activeIndexChangeHandler(val)}
        reset={() => resetHandler()} 
        activeItem={activeItem} 
        visible={modalActive}/>
  </>
  )
}

export default Services