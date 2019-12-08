import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'

const Circle = styled.div`
  border-radius: 10vw;
  background-color: ${colors.test};
  border-radius: 50%;
  width: 10vw;
  height: 10vw;
`
const FloatingActionButton = ( props ) => {
  return(
    <>
      <Circle onClick={props.onClick}/>
    </>
  )
}

export default FloatingActionButton