import React from 'react'
import styled from 'styled-components'
import { FlexCenter } from './Utility'
import colors from '../../assets/colors'

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
`

const SearchBar = ( props ) => {
  return(
    <FlexCenter>
      <TextInput />
    </FlexCenter>
  )
}

export default SearchBar