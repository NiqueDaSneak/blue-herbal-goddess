import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexCenterHeading, PageContainer, BodyCopy, NoScrollBackground } from '../ui/Utility'
import {default as Card} from '../ui/AssessmentCard'
import images from '../../assets/imgs'
import Button from '../ui/Button'
import ShowResultsToggle from '../ui/ShowResultsToggle'
import AssessmentResults from '../ui/Modals/AssessmentResults'
import { device } from '../../assets/MediaQueries'

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
  /* @media ${device.tablet} {
    align-items: left;
  } */
  @media ${device.laptop} {
    align-items: center;
  }
`



export const BG = styled(NoScrollBackground)`
`
const AssessmentPage = ( props ) => {

  const [resultsShown, setResultsVisible] = useState(false)

 return(
  <BG image={images.wood}>
    <Container>
      <FlexCenterHeading color='light' text='Herbal Assessment' />
      <BodyCopy>The health assessment evaluates your health and habits in the 10 body systems: Digestive, Hepatic, Intestinal, Circulatory, Nervous, Immune, Urininary, Glandular and Structural System.  Helps to evaluate which herbal combination will support a begtter will-being for your individual body.</BodyCopy>
      <CardContainer>
        <Card text='This is a very short question'/>
        <Card text='This is a medium length question. Maybe a second sentence.'/>
        <Card text='This is a long question. There is some nuance to your response to this, perhaps. Take a second to consider what your response will be.'/>
        <Card text='This is a very short question'/>
        <Card text='This is a medium length question. Maybe a second sentence.'/>
        <Card text='This is a long question. There is some nuance to your response to this, perhaps. Take a second to consider what your response will be.'/>
      </CardContainer>
        <Button visible={!resultsShown} onClick={() => setResultsVisible(true)} text='See Results'/>
        <AssessmentResults active={resultsShown}/>
    </Container>
  </BG>
 )
}

export default AssessmentPage