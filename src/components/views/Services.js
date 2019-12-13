import React from 'react'
import styled from 'styled-components'
import images from '../../assets/imgs'
import { FlexCenterHeading, BodyCopy } from '../hoc/Utility'
import colors from '../../assets/colors'
import ServiceItem from '../ui/ServiceItem'
import Layout from '../hoc/Layout'

const ServicesBackground = styled.div`
  /* background-color: ${colors.test}; */
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ServicesContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 46vh;
`

const Services = ( props ) => (
  <>
    {/* {console.log(props)} */}
    <Layout path={props.match.path} />
    <ServicesBackground>
      <FlexCenterHeading text='Services' />
      <BodyCopy>Fusce eu purus in felis commodo lobortis sed id erat. Pellentesque a lobortis purus, a consequat augue. Integer eu erat ante. Vestibulum ac odio sit amet velit blandit hendrerit eu lacinia lectus.</BodyCopy>
      <ServicesContainer>
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </ServicesContainer>
    </ServicesBackground>
  </>
)
export default Services