import React, {useState} from 'react'
import InventoryCheckoutItem from './InventoryCheckoutItem'
import '../styling/InventoryCheckout.css'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deleteCart, increaseQuantity, decreaseQuantity} from '../../redux/reducers/cart-reducer';
import userRestrict from "../../HOC/userRestrict";

function InventoryCheckout() {
  const [checkoutPrice, setCheckoutPrice] = useState(0)
  const cart = useSelector(state => state.cart)
  // console.log(cart)
  const addArr = (accumulator, a) => {
    return accumulator + a
  }
  const cartPriceArr = cart.map((data) => {
    return data.quantity * data.cart.price
  }).reduce(addArr, 0)
  const dispatch = useDispatch()
  const removeItem = (id) => {
    dispatch(deleteCart(id))
  }
  const increaseItem = (id) => {
    dispatch(increaseQuantity(id))
  }
  const decreaseItem = (item) => {
    console.log(item.quantity)
    if(item.quantity <= 1) {
      dispatch(deleteCart(item.id))
    } else {
      dispatch(decreaseQuantity(item.id))
    }
  }
  return (
    <div className="inventory__checkout">
      <h2 className="subtitle">Checkout Page</h2>
      <div className="inventoryCheckout__container">
        <div className="inventoryCheckout__left">
          <div style={{paddingBottom: '50px'}} className="inventoryCheckoutItem__text">
            <div style={{width: '100px'}}></div>
            <p className="checkout-name">Name</p>
            <p style={{flex: .2, textAlign: 'initial'}}>Quantity</p>
            <p style={{flex: .3}}>Price</p>
            <div style={{width: '80px'}}></div>
          </div>
          {cart?.map((item) => (
            <InventoryCheckoutItem key={item.id} item={item} removeItem={removeItem} 
            increaseItem={increaseItem} decreaseItem={decreaseItem} />
          ))}
        </div>
        <div className="inventoryCheckout__right">
          <h4>Payment info</h4>
          <p className="checkoutTotal-price">Total Checkout Price: {cartPriceArr} gold</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
      {/* <button className="checkout__btn">Checkout</button> */}
    </div>
  )
}

export default userRestrict(InventoryCheckout)
