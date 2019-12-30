import React from 'react'
import styled from 'styled-components'
import { FlexCenter } from './Utility'
import colors from '../../assets/colors'
import { device } from '../../assets/MediaQueries'

const TextInput = styled.input.attrs( props => ({
  type: 'search',
  placeholder: 'Search begins within...'
}))`
  font-size: 16px;
  border: none;
  border-radius: 10vw;
  width: 80vw;
  padding-left: 4vw;
  padding-right: 2vw;
  font-weight: 100;
  height: 4vh;
  outline: none;
  @media ${ device.tablet } {
    width: 64vw;
    padding-left: 2vw;
    font-size: 18pt;
  }
  @media ${ device.laptop } {
    width: 30vw;
    padding-left: 1vw;
  }
`

const SearchBar = ( props ) => {
  return(
    <FlexCenter>
      <TextInput />
    </FlexCenter>
  )
}

export default SearchBar