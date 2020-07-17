import React, { useContext } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
// import SearchBar from './SearchBar'
import images from '../../../assets/imgs'
import { device } from '../../../assets/MediaQueries'
import colors from '../../../assets/colors'
import { GlobalContext } from '../../hoc/Store'
import actions from '../../../store/actions'

const CartContainer = styled.div`
  position: fixed;
  background-color: ${colors.blue.main};
  width: 100vw;
  height: 80%;
  bottom: ${ props => props.active ? '0vh;' : '-40vh'};
  visibility: ${ props => props.active ? 'visible' : 'hidden'};
  opacity: ${ props => props.active ? '1' : '0'};
  transition: all .6s ease-in-out;
  border-radius: 20px 20px 0 0;
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
  width: 8vw;
  height: 8vw;
`

const ItemContainer = styled.div`
  ${'' /* background-color: white; */}
  width: 100vw;
  height: 10vh;
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
  color: white;
  width: 34%;
  ${'' /* margin-top: 8vh;
  margin-bottom: 8vh; */}
`

const Name = styled.span`
  font-size: 12pt;
`
const Price = styled.span`
  font-size: 12pt;
  font-weight: bolder;
`

const Counter = styled.div`
  color: white;
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-around;
`

const ProductCount = styled.span`
  font-size: 12pt;
`

const CounterControls = styled.div`
  display: flex;
  flex-direction: column;
  width: 54%;
`

const CounterControl = styled.button`
  color: white;
  border: none;
  border-radius: ${props => props.flip ? '0 0 10px 10px': '10px 10px 0 0'};
  font-size: 20pt;
  background-color: ${props => props.flip ? colors.blue.light : colors.blue.dark};
  text-align: center;
  width: 100%;
`

const Cart = ( props ) => {
  const [state, dispatch] = useContext(GlobalContext)
  console.log(state.cart.items)
  return (
    <CartContainer active={props.active}>
    {/* <CartContainer active={true}> */}
      <CartIcon />
      {state.cart.items.map(item => {
        return(
        <ItemContainer>
          <TrashIcon onClick={() => dispatch(actions.removeFromCart(item.id))} />
          <Content>
            <Name>{item.name}</Name>
            <Price>{` $${item.price}`}</Price>
          </Content>
          <Counter>
            <ProductCount>999</ProductCount>
            <CounterControls>
              <CounterControl>+</CounterControl>
              <CounterControl flip>-</CounterControl>
            </CounterControls>
          </Counter>
        </ItemContainer>
        ) 
      })}
    </CartContainer>
  )
}

export default Cart