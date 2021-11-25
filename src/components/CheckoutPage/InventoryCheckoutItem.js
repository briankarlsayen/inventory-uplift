import React from 'react'

function InventoryCheckoutItem({item, removeItem, decreaseItem, increaseItem, updateItem}) {
  const totalPrice = item.quantity * item.buy_price
  return (
    <div className="inventoryCheckout__item">
      <input className="inventoryCheckoutItem__checkBox" type="checkbox" defaultChecked/>
      <div className="inventoryCheckoutItem__right">
        <img className="inventoryCheckoutItem__image" src={item.image} alt={item.name} />
        <div className="inventoryCheckoutItem__text">
          <p className="checkout-name">{item.name}</p>
          <div style={{flex: .2, display: 'flex'}} className="inventoryCheckoutItem__quantity">
            <button style={{width: '20px'}}>-</button>
            <p style={{padding: '0px 10px'}}>{item.quantity}</p>
            <button onClick={()=>increaseItem(item._id)} style={{width: '20px'}}>+</button>
          </div>
          <p style={{flex: .3}}>{totalPrice} gold</p>
        </div>
      </div>
      <button className="inventoryCheckoutItem__removeBtn">Remove</button>
    </div>
  )
}

export default InventoryCheckoutItem
