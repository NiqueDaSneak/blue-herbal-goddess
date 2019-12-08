import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'

const Circle = styled.div`
  border-radius: 10vw;
  background-color: ${colors.test};
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
  position: fixed;
  bottom: 4vh;
  right: 8vw;
`

const FloatingActionButton = ( props ) => {
  return(
    <>
      <Circle onClick={props.onClick}/>
    </>
  )
}

export default FloatingActionButton