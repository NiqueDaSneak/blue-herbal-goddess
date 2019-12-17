import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { ContentShade } from './Utility'
import { BodyCopy, FlexCenter } from '../ui/Utility'
import images from '../../assets/imgs'
import colors from '../../assets/colors'

const Container = styled.div`
  background-color: ${ colors.blue.light };
  color: white;
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
  transition: bottom .6s ease-in-out;
`

const Chevron = styled.img`
  width: 10vw;
  transform: ${ props => props.right ? null : 'scaleX(-1)'};
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
  <>
  <ContentShade onClick={ props.reset } visible={ props.visible }/>
    <Container active={props.visible}>
      <Chevron onClick={() => props.setActiveIndex(-1)} src={ images.chevron }/>
      <CenterModule>
        <Content>
          <img alt='Placeholder' src={props.activeItem.icon}/>
          <BodyCopy>{props.activeItem.description}</BodyCopy>
        </Content>
        <Button text='CTA Text' />
      </CenterModule>
      <Chevron onClick={() => props.setActiveIndex(1)} right src={ images.chevron }/>
    </Container>
  </>
  )

ServiceModal.defaultProps = {
  activeItem: {
    icon: '',
    description: '',
  }
}

export default ServiceModal