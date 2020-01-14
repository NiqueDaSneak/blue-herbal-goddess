import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexCenterHeading, PageContainer, BodyCopy, NoScrollBackground } from '../ui/Utility'
import {default as Card} from '../ui/AssessmentCard'
import images from '../../assets/imgs'
import Button from '../ui/Button'
import ShowResultsToggle from '../ui/ShowResultsToggle'

const Container = styled(PageContainer)`
  margin-bottom: 14vh;
  p {
    &:first-of-type {
      margin-top: 4vh;
    }
  }
`

const CardContainer = styled.div`
  margin-top: 4vh;
  margin-bottom: 4vh;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  width: 90vw;
  /* justify-content: space-between; */
`



export const BG = styled(NoScrollBackground)`
`
// const Card =
const AssessmentPage = ( props ) => {

  const [resultsShow, setResultsVisible] = useState(false)

 return(
  <BG image={images.wood}>
    <Container>
      <FlexCenterHeading color='light' text='Herbal Assessment' />
      <BodyCopy>Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
      <CardContainer>
        <Card text='This is a very short question'/>
        <Card text='This is a medium length question. Maybe a second sentence.'/>
        <Card text='This is a long question. There is some nuance to your response to this, perhaps. Take a second to consider what your response will be.'/>
        <Card text='This is a very short question'/>
        <Card text='This is a medium length question. Maybe a second sentence.'/>
        <Card text='This is a long question. There is some nuance to your response to this, perhaps. Take a second to consider what your response will be.'/>
        </CardContainer>
      <ShowResultsToggle />
    </Container>
  </BG>
 )
}

export default AssessmentPage