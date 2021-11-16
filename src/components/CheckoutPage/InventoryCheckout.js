import React from 'react'
import InventoryCheckoutItem from './InventoryCheckoutItem'
import '../styling/InventoryCheckout.css'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deleteCart} from '../../redux/reducers/cart-reducer';
import userRestrict from "../../HOC/userRestrict";

function InventoryCheckout() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const removeItem = (id) => {
    console.log(id)
    dispatch(deleteCart(id))
  }
  return (
    <div className="inventory__checkout">
      <h2 className="subtitle">Checkout Page</h2>
      <div className="inventoryCheckout__items">
        {cart?.map((item) => (
          <InventoryCheckoutItem key={item.id} item={item} removeItem={removeItem} />
        ))}
      </div>
      <button className="checkout__btn">Checkout</button>
    </div>
  )
}

export default userRestrict(InventoryCheckout)
