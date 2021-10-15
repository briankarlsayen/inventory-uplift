import React from 'react'
import MinusIcon from './icons/minus-icon.svg'
import AddIcon from './icons/plus-icon.svg'

function InventoryChangeCount({setNewCount, newCount, changeCount}) {
  const lessButton= ()=> {
    let lessCount = newCount;
    setNewCount(lessCount -=1)
  }
  const addButton = ()=> {
    let addCount = newCount;
    setNewCount(addCount+=1)
  }
  return (
    <div className="inventory__changeCount">
      <h4>Available Stock :</h4>
      <form className="inventorySummary__form" onSubmit={e => changeCount(e)}>
        <div className="inventorySummary__btn">
          <p onClick={lessButton}>
            <img className="inventorySummaryBtn__icon" src={MinusIcon} />
          </p>
          <p>{newCount}</p>
          <p onClick={addButton}>
            <img className="inventorySummaryBtn__icon" src={AddIcon} />
          </p>
        </div>
        <input className="inventorySummary__submit" type="submit" />
      </form>
    </div>
)
}

export default InventoryChangeCount
