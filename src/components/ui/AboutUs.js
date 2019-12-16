import React from 'react'
import styled from 'styled-components'
import { FlexCenterHeading, BodyCopy } from './Utility'
import images from '../../assets/imgs'
import colors from '../../assets/colors'

const Container = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 15vh;
`

const Image = styled.img`
    width: 80vw;
`

const FAQItems = [
  {
    text: 'Product Name',
    icon: 'http://via.placeholder.com/50x50'
  },
  {
    text: 'Product Name',
    icon: 'http://via.placeholder.com/50x50'
  },
  {
    text: 'Product Name',
    icon: 'http://via.placeholder.com/50x50'
  }
]

const FAQs = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-between;
`

const Icon = styled.img`
  width: 18vw;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18vw;
  text-align: center;
  justify-content: space-evenly;
  height: 22vh;
`

const AboutUs = ( props ) => (
    <Container>
        <FlexCenterHeading text='About Us' />
        <Image src={images.woman} />
        <BodyCopy>Fusce eu purus in felis commodo lobortis sed id erat. Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
        <FAQs>
        { FAQItems.map( item => {
        return (
            <Item>
              <Icon src={ item.icon } alt='FAQ'/>
              <span>{ item.text }</span>
            </Item>
        )
      }) } 
        </FAQs>
    </Container>
)

export default AboutUs