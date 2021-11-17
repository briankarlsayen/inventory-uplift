import React from 'react'

function InventoryCheckoutItem({item, removeItem}) {
  const totalPrice = item.quantity * item.cart.price
  return (
    <div className="inventoryCheckout__item">
      <input className="inventoryCheckoutItem__checkBox" type="checkbox" />
      <div className="inventoryCheckoutItem__right">
        <img className="inventoryCheckoutItem__image" src={item.cart.image} alt={item.cart.name} />
        <div className="inventoryCheckoutItem__text">
          <p>{item.cart.name}</p>
          <p>x {item.quantity}pcs</p>
          <p>{totalPrice} gold</p>
        </div>
      </div>
      <button onClick={()=>removeItem(item.id)}>Remove</button>
    </div>
  )
}

export default InventoryCheckoutItem
