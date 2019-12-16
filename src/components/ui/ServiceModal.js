import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { BodyCopy, FlexCenter } from '../ui/Utility'
import images from '../../assets/imgs'

const Container = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 4vh;
  padding-bottom: 2vh;
  position: fixed;
  bottom: ${ props => props.active ? '0' : '-40vh' };
  z-index: 3;
  width: 100vw;
  border-radius: 20px 20px 0px 0px;
`

const Chevron = styled.img`
  width: 10vw;
  transform: ${ props => props.left ? null : 'scaleX(-1)'};
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  margin-bottom: 4vw;
  img {
  }
  p {
    text-align: left;    
    margin: 0;
    font-size: 10pt;
    margin-left: 4vw;
  }
`

const CenterModule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ServiceModal = ( props ) => (
  <Container active>
    <Chevron src={ images.chevron }/>
    <CenterModule>
      <Content>
        <img alt='Placeholder' src='https://via.placeholder.com/100x100'/>
        <BodyCopy>Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
      </Content>
      <Button text='CTA Text' />
    </CenterModule>
    <Chevron left src={ images.chevron }/>
    </Container>
)

export default ServiceModal