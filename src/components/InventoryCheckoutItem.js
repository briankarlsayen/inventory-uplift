import React from 'react'

function InventoryCheckoutItem({item}) {
  return (
    <div className="inventoryCheckout__item">
      <input className="inventoryCheckoutItem__checkBox" type="checkbox" />
      <div className="inventoryCheckoutItem__right">
        <img className="inventoryCheckoutItem__image" src={item.image} alt={item.title} />
        <div className="inventoryCheckoutItem__text">
          <p>{item.title}</p>
          <p>x {item.count}</p>
          <p>P {item.price}</p>

        </div>
      </div>
    </div>
  )
}

export default InventoryCheckoutItem
