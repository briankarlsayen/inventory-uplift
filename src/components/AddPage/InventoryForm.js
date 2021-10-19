import React, {useState} from 'react'

function InventoryForm({setItem, item}) {
  const [itemTitle, setItemTitle] = useState('')
  const [itemCount, setItemCount] = useState()
  const [itemPrice, setItemPrice] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemType, setItemType] = useState('')
  const [itemImage, setItemImage] = useState('')

  const addItem = (e) => {
    e.preventDefault()
    let newItem = {...item}
    // const toAdd ={
    //   title: itemTitle,
    //   available: true,
    //   count: Number(itemCount),
    //   price: itemPrice,
    //   description: itemDescription,
    //   type: itemType,
    //   // id: id++
    //   image: itemImage
    
    const toAdd ={
      title: itemTitle,
      available: true,
      count: Number(itemCount),
      price: itemPrice,
      description: itemDescription,
      type: itemType,
      // id: id++
      image: itemImage
    }
    // const resetItemInput = () => {
    //   setItemTitle('')
    //   setItemCount(0)
    //   setItemPrice(0)
    //   setItemDescription('')
    //   setItemType('')
    //   setItemImage('')
    // }
    // newItem.items.push(toAdd)
    // setItem(newItem)
    // resetItemInput()
    console.log(newItem)
  }

  
  return (
    <div className="inventory__form">
      <h2 className="subtitle">Add Inventory Form</h2>
      <form className="inventoryForm__form" 
        autoComplete="off"
        onSubmit={e => addItem(e)} >
      <div className="inventoryForm__input">
        <label>Item name</label>
        <input
          required
          autoComplete="off"
          placeholder="Item name"
          value={itemTitle} onChange={(event)=> setItemTitle(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <label>Item count</label>
        <input
          required
          autoComplete="off"
          type="number"
          placeholder="Item count"
          value={itemCount} onChange={(event)=> setItemCount(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <label>Item type</label>
        <input
          required
          autoComplete="off"
          placeholder="Item type"
          value={itemType} onChange={(event)=> setItemType(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <label>Item description</label>
        <input
          required
          autoComplete="off"
          placeholder="Item description"
          value={itemDescription} onChange={(event)=> setItemDescription(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <label>Item price</label>
        <input
          required
          autoComplete="off"
          type="number"
          placeholder="Item price"
          value={itemPrice} onChange={(event)=> setItemPrice(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <label>Item image</label>
        <input
          required
          autoComplete="off"
          placeholder="Item image"
          value={itemImage} onChange={(event)=> setItemImage(event.target.value)}
        />
      </div>
      <button className="inventoryForm__btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default InventoryForm
