import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenterHeading, BodyCopy, fadeInForward, PageContainer, NoScrollBackground } from '../ui/Utility'
import ServiceItem from '../ui/ServiceItem'
import colors from '../../assets/colors'
// import Layout from '../hoc/Layout'
import AboutUs from '../ui/AboutUs'
// import ServiceModal from  '../ui/ServiceModal'
import { device } from '../../assets/MediaQueries'

const ServicesSection = styled(PageContainer)`
  height: 80vh;
  @media ${ device.tablet } {
    height: 90vh;
  }
`

const ItemsContainer = styled.div`
  margin-top: 4vh;
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
export const BG = styled(NoScrollBackground)`
`

const Services = ( props ) => {
  const [activeItem, setActiveItem] = useState({})
  const [activeIndex, setActiveIndex] = useState(99)

  return(
    <BG image={images.wood}>
      <ServicesSection>
        <Logo src={images.goddess.white} />
        <FlexCenterHeading color='light' text='Services' />
        <BodyCopy>Fusce eu purus in felis commodo lobortis sed id erat. Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
        <ItemsContainer>
        { ServiceItems.map( (item, index) => {
          return (
            <ServiceItem
            index={index}
            activeIndex={props.modalOpen ? activeIndex : null}
            setActiveIndex={(val) => setActiveIndex(val)} 
            activeItem={activeItem}
            click={(item) => props.openModal('SERVICE_MODAL', item)}
            item={item}
            />
            )
          }) } 
        </ItemsContainer>
        </ServicesSection>
        <AboutUs />
      </BG>
  )
}

export default Services