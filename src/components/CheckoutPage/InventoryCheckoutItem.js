import React from 'react'

function InventoryCheckoutItem({item, removeItem, decreaseItem, increaseItem}) {
  const totalPrice = item.quantity * item.cart.price
  return (
    <div className="inventoryCheckout__item">
      <input className="inventoryCheckoutItem__checkBox" type="checkbox" />
      <div className="inventoryCheckoutItem__right">
        <img className="inventoryCheckoutItem__image" src={item.cart.image} alt={item.cart.name} />
        <div className="inventoryCheckoutItem__text">
          <p className="checkout-name">{item.cart.name}</p>
          <div style={{flex: .2, display: 'flex'}} className="inventoryCheckoutItem__quantity">
            <button onClick={()=>decreaseItem(item)} style={{width: '20px'}}>-</button>
            <p style={{padding: '0px 10px'}}>{item.quantity}</p>
            <button onClick={()=>increaseItem(item.id)} style={{width: '20px'}}>+</button>
          </div>
          <p style={{flex: .3}}>{totalPrice} gold</p>
        </div>
      </div>
      <button className="inventoryCheckoutItem__removeBtn" onClick={()=>removeItem(item.id)}>Remove</button>
    </div>
  )
}

export default InventoryCheckoutItem
