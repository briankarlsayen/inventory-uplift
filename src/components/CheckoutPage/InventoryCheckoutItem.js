import React from 'react'

function InventoryCheckoutItem({item}) {
  return (
    <div className="inventoryCheckout__item">
      <input className="inventoryCheckoutItem__checkBox" type="checkbox" />
      <div className="inventoryCheckoutItem__right">
        <img className="inventoryCheckoutItem__image" src={item.cart.food.food.image} alt={item.cart.food.food.label} />
        <div className="inventoryCheckoutItem__text">
          <p>{item.cart.food.food.label}</p>
          <p>x {item.cart.count}</p>
          <p>P {item.cart.price}</p>

        </div>
      </div>
    </div>
  )
}

export default InventoryCheckoutItem
