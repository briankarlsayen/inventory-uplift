import React, {useState} from 'react'

function InventoryForm({setItem, item}) {
  const [itemTitle, setItemTitle] = useState('')
  const [itemCount, setItemCount] = useState(0)

  const addItem = (e) => {
    e.preventDefault()
    let newItem = {...item}
    const toAdd ={
      title: itemTitle,
      available: true,
      count: Number(itemCount)
    }
    if(itemTitle && itemCount){
      newItem.items.push(toAdd)
      setItemTitle('')
      setItemCount(0)
    }
    setItem(newItem)
  }

  
  return (
    <div className="inventory__form">
      <h2 className="subtitle">Add Inventory Form</h2>
      <form className="inventoryForm__container" onSubmit={e => addItem(e)}>       
        <div className="inventoryForm__input">
          <label>Item name: </label>
          <input placeholder="name" className="inventory__input" value={itemTitle} onChange={(event)=> setItemTitle(event.target.value)} />
        </div>
        <div className="inventoryForm__input">
          <label>Item count: </label>
          <input placeholder="count" className="inventory__input" value={itemCount} onChange={(event)=> setItemCount(event.target.value)} />
        </div>
        <input className="inventoryForm__btn" type="submit" />
      </form>
    </div>
  )
}

export default InventoryForm
