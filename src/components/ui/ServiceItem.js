import React from 'react'
import styled from 'styled-components'
import images from '../../assets/imgs'
import { device } from '../../assets/MediaQueries'

const Container = styled.div`
  box-shadow: ${ props => props.index === props.activeIndex ? '0px 0px 10px 0px white' : null};
  display: flex;
  flex-direction: column;
  width: 25vw;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  height: 22vh;
  border-radius: 4vw;
  transition: background-color 1s, box-shadow 1s, width .5s, height .5s;
  div {
    &:first-of-type {
    }
    &:last-of-type {
      font-style: italic;
      white-space: pre-wrap;
      @media ${ device.tablet } {
        font-size: 22pt;
      }
      @media ${ device.laptop } {
        font-size: 16pt;
      }
    }
  }
  @media ${ device.tablet } {
    margin-top: 4vh;
    margin-bottom: 4vh;
  }
  @media ${ device.laptop } {
    width: 8vw;
    border-radius: 1.4vw;
    padding: 0.8%;
  }
`

const ServiceIcon = styled.img`
  width: 12vw;
  @media ${ device.tablet } {
    width: 8vw;
  }
  @media ${ device.laptop } {
    width: 4vw;
  }
`

const InfoIcon = styled.img`
  width: 6vw;
  @media ${ device.laptop } {
    width: 2vw;
  }
`



const ServiceItem = ( props ) => {
  const clickHandler = () => {
    props.click(props.item)
    props.setActiveIndex(props.index)
  }
  return(
    <>
      <Container 
        index={props.index}
        activeIndex={props.activeIndex}
        onClick={() => clickHandler()}>
        <ServiceIcon src={ props.item.icon } alt='Service Item'/>
        <div>{ props.item.productName }</div>
        <InfoIcon src={images.information} alt='Information Button' />
      </Container>
    </>
  )
}

export default ServiceItem