import React from 'react'
import styled from 'styled-components'
import { FlexCenter } from './Utility'
import colors from '../../assets/colors'

const TextInput = styled.input.attrs( props => ({
  type: 'search',
  placeholder: 'Search begins within...'
}))`
  margin-top: 3vh;
  margin-bottom: 3vh;
  font-size: 16px;
  border: none;
  border-radius: 10vw;
  width: 80vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 4vw;
  padding-right: 2vw;
  font-weight: 100;
`

const SearchBar = ( props ) => {
  return(
    <FlexCenter>
      <TextInput />
    </FlexCenter>
  )
}

export default SearchBar