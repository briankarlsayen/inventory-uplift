import React from 'react'

function InventoryCheckoutItem({item}) {
  const totalPrice = item.cart.count * item.cart.price
  return (
    <div className="inventoryCheckout__item">
      <input className="inventoryCheckoutItem__checkBox" type="checkbox" />
      <div className="inventoryCheckoutItem__right">
        <img className="inventoryCheckoutItem__image" src={item.cart.food.food.image} alt={item.cart.food.food.label} />
        <div className="inventoryCheckoutItem__text">
          <p>{item.cart.food.food.label}</p>
          <p>x {item.cart.count}pcs</p>
          <p>P {totalPrice}.00</p>
        </div>
      </div>
      <button>Remove</button>
    </div>
  )
}

export default InventoryCheckoutItem
