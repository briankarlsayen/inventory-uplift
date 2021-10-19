import React from 'react'
import InventoryCheckoutItem from './InventoryCheckoutItem'
import '../styling/InventoryCheckout.css'
import {useSelector} from 'react-redux'

function InventoryCheckout() {
  const cart = useSelector(state => state.user.cart)
  return (
    <div className="inventory__checkout">
      <h2 className="subtitle">Checkout Page</h2>
      <div className="inventoryCheckout__items">
        {cart.map((item) => (
          <InventoryCheckoutItem item={item} />
        ))}
      </div>
      <button className="checkout__btn">Checkout</button>
    </div>
  )
}

export default InventoryCheckout
