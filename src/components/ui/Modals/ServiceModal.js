import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { BodyCopy } from '../Utility'
import colors from '../../../assets/colors'
import { device } from '../../../assets/MediaQueries'

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
  bottom: ${ props => props.active ? '0vh;' : '-40vh'};
  visibility: ${ props => props.active ? 'visible' : 'hidden'};
  opacity: ${ props => props.active ? '1' : '0'};
  /* height: 40vh; */
  z-index: 6;
  width: 100vw;
  border-radius: 20px 20px 0 0;
  transition: all .6s ease-in-out;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin-bottom: 4vh;
  align-items: center;
  img {
    width: 40vw;
    margin-bottom: 4vh;
    @media ${ device.laptop } {
      width: 10vw;
    }
  }
  p {
    text-align: left;    
    margin: 0;
    font-size: 12pt;
    /* margin-left: 4vw; */
    text-align: justify;
    width: inherit;
    @media ${ device.laptop } {
      text-align: center;
      margin-left: 0;
      font-size: 14pt;
    }
  }
`

const CenterModule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const defaultProps = {
  icon: '',
  description: '',
}
const ServiceModal = ({active, activeItem = defaultProps, setActiveIndex}) => (
  <>
  {/* <ContentShade onClick={ props.reset } visible={ pddddrops.visible }/> */}
    <Container active={active}>
      {/* <Chevron onClick={() => setActiveIndex(-1)} src={ images.chevron }/> */}
      <CenterModule>
        <Content>
          <img alt='Placeholder' src={activeItem.icon}/>
          <BodyCopy>{activeItem.description}</BodyCopy>
        </Content>
        {/* <Button text='CTA Text' /> */}
      </CenterModule>
      {/* <Chevron onClick={() => setActiveIndex(1)} right src={ images.chevron }/> */}
    </Container>
  </>
)

// ServiceModal.defaultProps = {
//   activeItem: {
//     icon: '',
//     description: '',
//   }
// }

export default ServiceModal