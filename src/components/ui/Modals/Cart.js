import React, { useContext } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
// import SearchBar from './SearchBar'
import images from '../../../assets/imgs'
import { device } from '../../../assets/MediaQueries'
import colors from '../../../assets/colors'
import { GlobalContext } from '../../hoc/Store'

const CartContainer = styled.div`
  position: fixed;
  background-color: ${colors.blue.main};
  width: 100vw;
  height: 100%;
  bottom: ${ props => props.active ? '0vh;' : '-40vh'};
  visibility: ${ props => props.active ? 'visible' : 'hidden'};
  opacity: ${ props => props.active ? '1' : '0'};
  transition: all .6s ease-in-out;
  ${'' /* border-radius: 20px 20px 0 0; */}
  z-index: 9;
  ${'' /* display: flex;
  flex-direction: column;
  align-items: center; */}
  overflow: scroll;
  text-align: center;
  ${'' /* justify-content: space-evenly; */}
  @media ${device.laptop} {
    width: 24vw;
    right: 3vh;
  }
`

const CartIcon = styled.img.attrs({
  src: images.cart
})`
  width: 10vw;
  margin-top: 4vh;
  margin-bottom: 4vh;
`

const testItems = [
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  },
  {
    id: 1,
    name: 'AntiBlock Good Shit',
    price: '49.33'
  }
]

const TrashIcon = styled.img.attrs({
  src: images.cartDelete
})`
  width: 10vw;
  height: 10vw;
`

const ItemContainer = styled.div`
  ${'' /* background-color: white; */}
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${'' /* padding-top: 4%; */}
  ${'' /* padding-bottom: 4%; */}
  margin-bottom: 4vh;
`

const Content = styled.div`
  text-align: left;
  color: white;
  ${'' /* margin-top: 8vh;
  margin-bottom: 8vh; */}
`

const Name = styled.p`
  font-size: 14pt;
`
const Price = styled.p`
  font-size: 16pt;
`

const Cart = ( props ) => {
  const [state, dispatch] = useContext(GlobalContext)
  console.log(state.cart.items)
  return (
    // <CartContainer active={props.active}>
    <CartContainer active={true}>
      <CartIcon />
      {testItems.map(item => {
        return(
        <ItemContainer>
          <TrashIcon/>
          <Content>
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
          </Content>
          <TrashIcon/>
        </ItemContainer>
        ) 
      })}
    </CartContainer>
  )
}

export default Cart