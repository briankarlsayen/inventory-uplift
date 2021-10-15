import React from 'react'

function InventoryCard({item}) {
  return (
    <div className="inventory__card">
      <img src={item.image}/>
      <h4>Title: {item.title}</h4>
      <p>Price: ${item.price}</p>
      <p>Count: {item.count}</p>
      <p>Type: {item.type}</p>
      <p>Description: {item.description}.</p>
    </div>
  )
}

export default InventoryCard
