import React from 'react'
import InventorySummary from './InventorySummary'
function InventoryHome({item}) {
  return (
    <div className="inventory__items">
        <p className="inventoryTitle__sub">Items:</p>
        <ul>
        {item.items.map((item, index) => (
          <InventorySummary key={index} item={item} />
        ))}
        </ul>
      </div>
  )
}

export default InventoryHome
