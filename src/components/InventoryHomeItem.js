import React from 'react'

function InventoryHomeItem({item}) {
  return (
    <div className="inventoryHome__item">
      <img className="inventoryHomeItem__img" src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button className="inventoryHomeItem__btn">Add to cart</button>
    </div>
  )
}

export default InventoryHomeItem
