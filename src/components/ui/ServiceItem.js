import React, { useState } from 'react'
import styled from 'styled-components'
import images from '../../assets/imgs'

const Container = styled.div`
  background-color: ${ props => props.index === props.activeIndex ? 'none' : 'none'};
  box-shadow: ${ props => props.index === props.activeIndex ? '0px 0px 10px 0px rgba(0,0,0,0.75)' : null};
  display: flex;
  flex-direction: column;
  width: 25vw;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  height: 22vh;
  border-radius: 4vw;
  transition: all 1s;
  span {
    &:first-of-type {
      /* color: green; */
    }
    &:last-of-type {
      font-style: italic;
    }
  }
`

const ServiceIcon = styled.img`
  width: 18vw;
`

const InfoIcon = styled.img`
  width: 6vw;
`



const ServiceItem = ( props ) => {
  const clickHandler = () => {
    props.setActiveItem(props.item)
    props.setActiveIndex(props.index)
  }
  return(
    <>
      <Container 
        index={props.index}
        activeIndex={props.activeIndex}
        onClick={ () => clickHandler()}>
        {/* <span>{ props.heading }</span> */}
        <ServiceIcon src={ props.item.icon } alt='Service Item'/>
        <span>{ props.item.productName }</span>
        <InfoIcon src={images.information} alt='Information Button' />
      </Container>
    </>
  )
}

export default ServiceItem