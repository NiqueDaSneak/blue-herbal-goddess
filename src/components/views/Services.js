import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenterHeading, BodyCopy, ContentShade, fadeInForward } from '../ui/Utility'
import colors from '../../assets/colors'
import ServiceItem from '../ui/ServiceItem'
import Layout from '../hoc/Layout'
import AboutUs from '../ui/AboutUs'
import ServiceModal from  '../ui/ServiceModal'
import { device } from '../../assets/MediaQueries'

const ServicesSection = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-top: 4vh;
  @media ${ device.tablet } {
    height: 90vh;
  }
`

const ItemsContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 46vh;
  @media ${ device.laptop } {
    width: 34vw;
    height: inherit;
  }
`

const Logo = styled.img`
  width: 12vw;
  margin-bottom: 2vh;
  ${fadeInForward};
  opacity: 0;
  @media ${ device.tablet } {
    width: 6vw;
  }
  @media ${ device.tablet } {
    width: 3vw;
  }
`

const ServiceItems = [
  {
    heading: 'Heading 1',
    productName: 'Herbal \nAssessment',
    icon: images.fpo1,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 2',
    productName: "Foot \nDetox",
    icon: images.fpo2,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 3',
    productName: 'Iridology \nSession',
    icon: images.fpo3,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 4',
    productName: 'Keto \nCoaching',
    icon: images.fpo1,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 5',
    productName: 'Chi \nMachine',
    icon: images.fpo2,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 6',
    productName: 'Zyto \nScan',
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
        <BodyCopy left>Fusce eu purus in felis commodo lobortis sed id erat. Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
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