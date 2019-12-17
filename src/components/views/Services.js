import React, { useState } from 'react'
import styled from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenterHeading, BodyCopy } from '../ui/Utility'
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
`
const globalcreateGlobalStyles`
`
const BackgroundImage = styled.div`
  background-size: cover;
  background-image: url(${ images.mountains });
  background-position-x: center;
  height: 100vh;
  overflow: scroll;
  position: fixed;
  color: white;
  /* background: linear-gradient(${colors.blue.main}, ${colors.blue.light}); */
`

const ItemsContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 46vh;
`

const ServiceItems = [
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50',
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50',
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50',
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50',
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50',
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50',
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
    <BackgroundImage>
      <ServicesSection>
        <FlexCenterHeading text='Services' />
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
      </BackgroundImage>
      <ServiceModal 
        setActiveIndex={ (val) => activeIndexChangeHandler(val)}
        reset={() => resetHandler()} 
        activeItem={activeItem} 
        visible={modalActive}/>
  </>
  )
}

export default Services