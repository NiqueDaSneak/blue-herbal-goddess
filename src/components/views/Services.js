import React, { useState } from 'react'
import styled from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenterHeading, BodyCopy } from '../ui/Utility'
import colors from '../../assets/colors'
import ServiceItem from '../ui/ServiceItem'
import Layout from '../hoc/Layout'
import AboutUs from '../ui/AboutUs'
import ServiceModal from  '../ui/ServiceModal'

const ServicesBackground = styled.div`
  /* background-color: ${colors.test}; */
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ServicesContainer = styled.div`
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
    icon: 'http://via.placeholder.com/50x50'
  },
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50'
  },
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50'
  },
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50'
  },
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50'
  },
  {
    heading: 'Heading',
    productName: 'Product Name',
    icon: 'http://via.placeholder.com/50x50'
  },
]

const Services = ( props ) => {
  const [modalActive, setModal] = useState(false)
  return(
    <>
    <Layout path={ props.match.path } />
    <ServicesBackground>
      <FlexCenterHeading text='Services' />
      <BodyCopy>Fusce eu purus in felis commodo lobortis sed id erat. Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
      <ServicesContainer>
      { ServiceItems.map( item => {
        return (
          <ServiceItem 
          heading={ item.heading }
          productName={ item.productName }
          icon={ item.icon }
          />
        )
      }) } 
      </ServicesContainer>
      </ServicesBackground>
      <AboutUs />
      <ServiceModal visible={modalActive}/>
  </>
  )
}

export default Services