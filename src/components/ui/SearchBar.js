import React from 'react'
import styled from 'styled-components'
import { FlexCenter } from '../hoc/Utility'
import colors from '../../assets/colors'

const TextInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Search begins within...'
})`
  margin-top: 3vh;
  margin-bottom: 3vh;
  font-size: 16px;
  border: none;
  border-radius: 10vw;
  width: 80vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 2vw;
  padding-right: 2vw;
`

const SearchBar = ( props ) => {
  return(
    <FlexCenter>
      <TextInput />
    </FlexCenter>
  )
}

export default SearchBar