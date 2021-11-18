import React, {useState} from 'react'
import InventoryCheckoutItem from './InventoryCheckoutItem'
import '../styling/InventoryCheckout.css'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deleteCart, increaseQuantity, decreaseQuantity, updateChecked} from '../../redux/reducers/cart-reducer';
import userRestrict from "../../HOC/userRestrict";

function InventoryCheckout() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const addArr = (accumulator, a) => {
    return accumulator + a
  }
  const filterChecked = cart.filter((data) => data.checked === true)

  const cartPriceArr = filterChecked.map((data) => {
      return data.quantity * data.cart.price})
    .reduce(addArr, 0)
  
  const cartQuantityARr = filterChecked.map((data) => {
    return data.quantity
  }).reduce(addArr, 0)

  const removeItem = (id) => {
    dispatch(deleteCart(id))
  }
  const increaseItem = (id) => {
    dispatch(increaseQuantity(id))
  }
  const decreaseItem = (item) => {
    if(item.quantity <= 1) {
      dispatch(deleteCart(item.id))
    } else {
      dispatch(decreaseQuantity(item.id))
    }
  }
  const updateItem = (id) => {
    dispatch(updateChecked(id))
  }

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
          {cart?.map((item) => (
            <InventoryCheckoutItem key={item.id} item={item} removeItem={removeItem} 
            increaseItem={increaseItem} decreaseItem={decreaseItem} updateItem={updateItem}/>
          ))}
        </div>
        <div className="inventoryCheckout__right">
          <h4 className="inventoryCheckout__info">Payment info</h4>
          <p>Total Quantity: {cartQuantityARr}</p>
          <p className="checkoutTotal-price">Total Checkout Price: {cartPriceArr} gold</p>
          <button className="inventoryHome__buy checkoutBtn__spacing">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default userRestrict(InventoryCheckout)
