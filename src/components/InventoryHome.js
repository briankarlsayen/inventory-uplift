import React from 'react'
import InventoryHomeItem from './InventoryHomeItem'

function InventoryHome({item}) {
  //console.log(item)
  return (
    <div className="inventory__home">
      <h2 className="subtitle">Homepage</h2>
      <div className="inventoryHome__items">
        {item.map((data) => (
          <InventoryHomeItem item={data} />
        ))}
      </div>
    </div>
  )
}

export default InventoryHome
