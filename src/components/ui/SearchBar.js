import React from 'react'
import styled from 'styled-components'
import { FlexCenter } from '../hoc/Utility'
import colors from '../../assets/colors'

const TextInput = styled.input`
  background-color: ${colors.test};
`

const SearchBar = ( props ) => {
  return(
    <FlexCenter>
    <TextInput />
    </FlexCenter>
  )
}

export default SearchBar