import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenterHeading, BodyCopy, fadeInForward, PageContainer, NoScrollBackground } from '../ui/Utility'
import ServiceItem from '../ui/ServiceItem'
import AboutUs from '../ui/AboutUs'
import { device } from '../../assets/MediaQueries'
import { GlobalContext } from '../hoc/Store'
import actions from '../../store/actions'

const ServicesSection = styled(PageContainer)`
  height: 80vh;
  padding-top: 4vh;
  margin-bottom: 4vh;
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
    icon: images.plant,
    description: `A tool that can help determine your body's strengths and weaknesses. It's the perfect starting point to better health and well-being.`
  },
  {
    heading: 'Heading 2',
    productName: "Foot \nDetox",
    icon: images.foot,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 3',
    productName: 'Iridology \nSession',
    icon: images.eye,
    description: 'Iridology is the study of the color, pigmentations, and structure of the iris or colored portion of the eye as they relate genetically through reflex responses to the strengths and weaknesses of the body system.'
  },
  {
    heading: 'Heading 4',
    productName: 'Keto \nCoaching',
    icon: images.cutlery,
    description: 'Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.'
  },
  {
    heading: 'Heading 5',
    productName: 'Chi \nMachine',
    icon: images.atom,
    description: 'Scientifically designed to improves energy, increases your oxygen, energy and circulation, relieves muscle aches and pains.'
  },
  {
    heading: 'Heading 6',
    productName: 'Zyto \nScan',
    icon: images.hand,
    description: 'A generated report that provides insights on nutritional supplements and services to help maintin health ad welless.'
  },
]

const BG = styled(NoScrollBackground)`
`

const Services = ( props ) => {
  const [state, dispatch] = useContext(GlobalContext)

  const [activeItem, setActiveItem] = useState({})
  const [activeIndex, setActiveIndex] = useState(99)

  return(
    <BG image={images.wood}>
      <ServicesSection>
        <Logo src={images.goddess.white} />
        <FlexCenterHeading color='light' text='Services' />
        <BodyCopy>We offer a variety of services to help assist mind, body and spirit:</BodyCopy>
        <ItemsContainer>
        { ServiceItems.map( (item, index) => {
          return (
            <ServiceItem
            key={index}
            index={index}
            activeIndex={state.modalOpen ? activeIndex : null}
            setActiveIndex={(val) => setActiveIndex(val)} 
            activeItem={activeItem}
            click={(item) => dispatch(actions.openModal('SERVICE_MODAL', item))}
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