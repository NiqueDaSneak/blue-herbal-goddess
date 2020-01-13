import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexCenterHeading, PageContainer, BodyCopy, NoScrollBackground } from '../ui/Utility'
import Card from '../ui/ProductCard'
import images from '../../assets/imgs'

const Container = styled(PageContainer)`
`

const CardContainer = styled.div`
  margin-top: 4vh;
  margin-bottom: 4vh;
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  justify-content: space-between;
`

export const BG = styled(NoScrollBackground)`
`

const AssessmentPage = ( props ) => {
 return(
  <BG image={images.wood}>
    <Container>
      <FlexCenterHeading color='light' text='Herbal Assessment' />
      <BodyCopy>Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
    </Container>
  </BG>
 )
}

export default AssessmentPage