import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import styled from 'styled-components'
import { device } from '../../assets/MediaQueries'


const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 4vw;
  margin-right: 4vw;
  @media ${ device.laptop } {
    width: 42vw;
  }
  @media ${ device.tablet } {
    width: 64vw;
    font-size: 14pt;
  }
`

const NavigationButtons = ( props ) => {
  const buttonValues = {
    first: ['Discover Products','Herbal Assessment','Services','More'],
    second: ['Instagram','Medium','Facebook','Back'],
    links: {
      'Discover Products': '',
      'Take Assessment': '',
      'Services': '/services',
      social: {
        'Instagram': 'https://instagram.com',
        'Medium': 'https://www.medium.com',
        'Facebook': 'https://facebook.com',
      },
      'More': '',
      'Back': ''
    }
  }

  const [navButtonValues, setNavValues] = useState(buttonValues.first)

  const toggleNavButtons = (buttonText) => {
    switch (buttonText) {
      case 'More':
        setNavValues(buttonValues.second)
        break;
      case 'Back':
        setNavValues(buttonValues.first)
        break;
      default:
        break;
    }
  }
  
  return(
    <ButtonContainer>
      {navButtonValues.map( buttonText => {
        switch (buttonText) {
          case 'Instagram':
            return <a href={buttonValues.links.social[buttonText]} rel="noopener noreferrer" target='_blank' key={buttonText}><Button text={buttonText} onClick={ (e) => toggleNavButtons(e.target.innerHTML)}/></a>
          case 'Facebook':
            return <a href={buttonValues.links.social[buttonText]} rel="noopener noreferrer" target='_blank' key={buttonText}><Button text={buttonText} onClick={ (e) => toggleNavButtons(e.target.innerHTML)}/></a>    
          case 'Medium':
            return <a href={buttonValues.links.social[buttonText]} rel="noopener noreferrer" target='_blank' key={buttonText}><Button text={buttonText} onClick={ (e) => toggleNavButtons(e.target.innerHTML)}/></a>    
            default:
            return <Link key={buttonText} to={ buttonValues.links[buttonText] }><Button text={buttonText} onClick={ (e) => toggleNavButtons(e.target.innerHTML)}/></Link>
        }
      })}
    </ButtonContainer>
  )

}

export default NavigationButtons