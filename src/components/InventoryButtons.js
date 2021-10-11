import React from 'react'

function InventoryButtons({toShow, hideItems, showItems}) {
  return (
    <div className="inventory__btn">
      {toShow ?<button className="btn__show" onClick={showItems}>Show Items</button>:
      <button className="btn__hide" onClick={hideItems}>Hide Items</button>
      }
    </div>
  )
}

export default InventoryButtons
