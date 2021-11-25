import React, {useState, useEffect} from 'react'
import InventoryCheckoutItem from './InventoryCheckoutItem'
import '../styling/InventoryCheckout.css'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deleteCart, increaseQuantity, decreaseQuantity, updateChecked} from '../../redux/reducers/cart-reducer';
import userRestrict from "../../HOC/userRestrict";
import jwt from 'jsonwebtoken'
import axios from '../axios'

function InventoryCheckout() {
  const [cartItem, setCartItem] = useState('')
  // const cart = useSelector(state => state.cart)
  // const dispatch = useDispatch()

  // const addArr = (accumulator, a) => {
  //   return accumulator + a
  // }
  // const filterChecked = cart.filter((data) => data.checked === true)

  // const cartPriceArr = filterChecked.map((data) => {
  //     return data.quantity * data.cart.price})
  //   .reduce(addArr, 0)
  
  // const cartQuantityARr = filterChecked.map((data) => {
  //   return data.quantity
  // }).reduce(addArr, 0)

  // const removeItem = (id) => {
  //   dispatch(deleteCart(id))
  // }

  //update cartItem state
  //get index
  const increaseItem = (id) => {
    let itemIndex;
    const filterItem = cartItem.filter(
      (item) => {
        item._id.includes(id)
      }
    )

    const filterIdx = cartItem.findIndex((element, index) => {
      if(element._id === id) return true
    })


    console.log(filterIdx)
      
    // filterItem[0].quantity ++
    // setCartItem()
    // console.log(filterItem)
  }
  // const decreaseItem = (item) => {
  //   if(item.quantity <= 1) {
  //     dispatch(deleteCart(item.id))
  //   } else {
  //     dispatch(decreaseQuantity(item.id))
  //   }
  // }
  // const updateItem = (id) => {
  //   dispatch(updateChecked(id))
  // }
  useEffect(() => {
    const token = localStorage.getItem('auth-token')
    const decoded = jwt.decode(token)
    if(token){
      axios.defaults.headers.common['auth-token'] = token
      getCart(decoded.id)
    }
  }, [])

  const getCart = async(id) => {
    const cart = await axios.get(`/viewcart/${id}`)
    if(cart.status === 201){
      setCartItem(cart.data.products)
    }
  }

  console.log(cartItem)

  return (
    <div className="inventory__checkout">
      <div className="inventoryCheckout__container">
        <div className="inventoryCheckout__left">
          <div className="inventoryCheckoutItem__text">
            <div style={{width: '100px'}}></div>
            <p className="checkout-name">Name</p>
            <p style={{flex: .2, textAlign: 'initial'}}>Quantity</p>
            <p style={{flex: .3}}>Price</p>
            <div style={{width: '80px'}}></div>
          </div>
          <div style={{borderBottom: '1px solid white', marginTop: '10px', marginBottom: '20px'}}></div>
          {cartItem && cartItem.map((item) => (
            // <InventoryCheckoutItem key={item.id} item={item} removeItem={removeItem} 
            // increaseItem={increaseItem} decreaseItem={decreaseItem} updateItem={updateItem}/>
            <InventoryCheckoutItem key={item._id} item={item} increaseItem={increaseItem} />
          ))}
        </div>
        <div className="inventoryCheckout__right">
          <h4 className="inventoryCheckout__info">Payment info</h4>
          <p>Total Quantity: 11</p>
          <p className="checkoutTotal-price">Total Checkout Price: 100 gold</p>
          <button className="inventoryHome__buy checkoutBtn__spacing">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default InventoryCheckout
