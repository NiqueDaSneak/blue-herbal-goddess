import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PageContainer } from '../Utility'
// const SingleProduct = styled.div`
//   width: 100vw;
//   height: 50vh;
//   background-color: red;
// `

const Container = styled(PageContainer)`
  height: 50vh;
  background-color: red;
  position: fixed;
  bottom: 0;
  z-index: 2;
`

const showProductBundle = ( props ) => {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    // if setActive(true)
  })
  return(
    <Container>
    </Container>
  )
}

export default showProductBundle