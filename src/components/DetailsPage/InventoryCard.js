import React from 'react'

function InventoryCard({item}) {
  console.log(item)
  return (
    <div className="inventory__card">
      
      <img src={item.food.food.image}/>
      <h4>Title: {item.food.food.label}</h4>
      <p>Price: ${item.price}</p>
      <p>Count: {item.count}</p>
      <p>Type: {item.type}</p>
      <p>Description: {item.food.food.category}.</p>
    </div>
  )
}

export default InventoryCard
