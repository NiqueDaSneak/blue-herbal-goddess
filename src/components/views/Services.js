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
  padding-top: 4vh;
  margin-bottom: 4vh;
  @media ${ device.tablet } {
    height: 90vh;
  }
`

const ItemsContainer = styled.div`
  /* margin-top: 4vh; */
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
    description: `A tool that can help determine your body's strengths and weaknesses. It's the perfect starting point to better health and well-being.`
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
    description: 'Iridology is the study of the color, pigmentations, and structure of the iris or colored portion of the eye as they relate genetically through reflex responses to the strengths and weaknesses of the body system.'
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
    description: 'Scientifically designed to improves energy, increases your oxygen, energy and circulation, relieves muscle aches and pains.'
  },
  {
    heading: 'Heading 6',
    productName: 'Zyto \nScan',
    icon: images.fpo3,
    description: 'A generated report that provides insights on nutritional supplements and services to help maintin health ad welless.'
  },
]

const BG = styled(NoScrollBackground)`
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
            key={index}
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