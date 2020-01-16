import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexCenterHeading, PageContainer, BodyCopy, NoScrollBackground } from '../ui/Utility'
import {default as Card} from '../ui/AssessmentCard'
import images from '../../assets/imgs'
import Button from '../ui/Button'
import ShowResultsToggle from '../ui/ShowResultsToggle'
import AssessmentResults from '../ui/Modals/AssessmentResults'

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
  width: 90vw;
`



export const BG = styled(NoScrollBackground)`
`
const AssessmentPage = ( props ) => {

  const [resultsShown, setResultsVisible] = useState(false)

 return(
  <BG image={images.wood}>
    <Container>
      <FlexCenterHeading color='light' text='Herbal Assessment' />
      <BodyCopy>Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus. Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
      <CardContainer>
        <Card text='This is a very short question'/>
        <Card text='This is a medium length question. Maybe a second sentence.'/>
        <Card text='This is a long question. There is some nuance to your response to this, perhaps. Take a second to consider what your response will be.'/>
        <Card text='This is a very short question'/>
        <Card text='This is a medium length question. Maybe a second sentence.'/>
        <Card text='This is a long question. There is some nuance to your response to this, perhaps. Take a second to consider what your response will be.'/>
        </CardContainer>
        <Button visible={!resultsShown} onClick={() => setResultsVisible(true)} text='See Results'/>
        <AssessmentResults openModal={type => props.openModal(type)} active={resultsShown}/>
    </Container>
  </BG>
 )
}

export default AssessmentPage