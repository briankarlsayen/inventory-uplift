import React from 'react'

function InventoryCheckoutItem({item, removeItem}) {
  const totalPrice = item.cart.count * item.cart.price
  console.log(item)
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
      <button onClick={()=>removeItem(item.id)}>Remove</button>
    </div>
  )
}

export default InventoryCheckoutItem
