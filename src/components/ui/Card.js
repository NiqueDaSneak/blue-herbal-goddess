import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'
import images from '../../assets/imgs'
// import modalConductor from '../hoc/ModalConductor'

const colorChooser = type => {
  switch (type) {
    case 'bundle':
      return colors.trans.white
    case 'product':
      return colors.trans.blue.light
    case 'type':
      return colors.trans.blue.dark
    case 'content':
      return null
    default:
      break;
  }
}

const Container = styled.div`
  /* box-shadow: 0px 0px 5px 0px black; */
  padding: 6%;
  width: 32vw;
  border-radius: 20px;
  margin-bottom: 4vh;
  height: 30vh;
  background-color: ${ props => colorChooser(props.type) };
  border: ${ props => props.type === 'content' ? '1px solid white' : null }; 
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  p {
    text-align: center;
  }
`

const Image = styled.img.attrs({
  alt: 'Descriptive Image'
})`
  width: 30vw;
`

const Price = styled.p`
  font-weight: bold;
`

const Desc = styled.p`
  font-weight: lighter;
  font-size: 10pt;
`

const Card = ( props ) => (
  <Container onClick={() => props.click(props.info.modalType)} type={props.info.type}>
    <Image src={props.info.type === 'content' ? images.youtube : props.info.image} />
    <Price>{props.info.price ? props.info.price : null}</Price>
    <Desc>{props.info.description}</Desc>
  </Container>
)

export default Card
