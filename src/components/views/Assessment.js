import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { FlexCenterHeading, PageContainer, BodyCopy, NoScrollBackground } from '../ui/Utility'
import {default as Card} from '../ui/AssessmentCard'
import images from '../../assets/imgs'
import Button from '../ui/Button'
import ShowResultsToggle from '../ui/ShowResultsToggle'
import AssessmentResults from '../ui/Modals/AssessmentResults'
import { device } from '../../assets/MediaQueries'
import AssessmentQuestionValues from '../../data/AssessmentQuestionValues'
import {GlobalContext} from '../hoc/Store'

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


const BG = styled(NoScrollBackground)`
`

const AssessmentPage = ( props ) => {
  const [state, dispatch] = useContext(GlobalContext)

  const [resultsShown, setResultsVisible] = useState(false)

 return(
  <BG image={images.wood}>
    <Container>
      <FlexCenterHeading color='light' text='Herbal Assessment' />
      <BodyCopy>The health assessment evaluates your health and habits in the 10 body systems: Digestive, Hepatic, Intestinal, Circulatory, Nervous, Immune, Urininary, Glandular and Structural System.  Helps to evaluate which herbal combination will support a begtter will-being for your individual body.</BodyCopy>
      <CardContainer>
      {AssessmentQuestionValues.map(question => {
        return <Card key={question.text} questionData={question} />
      })}
      </CardContainer>
        <Button visible={!resultsShown} onClick={() => setResultsVisible(true)} text='See Results'/>
        <AssessmentResults active={resultsShown}/>
    </Container>
  </BG>
 )
}

export default AssessmentPage