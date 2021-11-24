import React, {useState} from 'react'
import axios from '../axios'
import userRestrict from "../../HOC/userRestrict";
import '../styling/InventoryForm.css'
import {useHistory} from 'react-router-dom'

function InventoryForm({setItem, item}) {
  const [itemName, setItemName] = useState('')
  const [itemStock, setItemStock] = useState()
  const [itemPrice, setItemPrice] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemType, setItemType] = useState('')
  const [itemImage, setItemImage] = useState('')
  const history = useHistory()

  const addItem = async(e) => {
    e.preventDefault()
    try {
      const add = await axios.post('/createproduct', {
        name: itemName,
        functions: itemDescription,
        buy_price: Number(itemPrice),
        stock: Number(itemStock),
        type: "item",
        image: itemImage
      })
      if(add.status === 201) {
        alert('Item successfully added')
        setItemName('')
        setItemStock('')
        setItemDescription('')
        setItemPrice('')
        setItemImage('')
      }
    } catch(err) {
      console.log(err)
    }
  }
  
  return (
    <div className="inventory__form">
      <form className="inventoryForm__form" 
        autoComplete="off"
        onSubmit={e => addItem(e)} >
      <h2 className="subtitle">Add Inventory Form</h2>
      <div className="inventoryForm__input">
        <input
          required
          autoComplete="off"
          placeholder="Item name"
          value={itemName} onChange={(event)=> setItemName(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <input
          required
          autoComplete="off"
          type="number"
          placeholder="Item count"
          value={itemStock} onChange={(event)=> setItemStock(event.target.value)}
        />
      </div>
      {/* <div className="inventoryForm__input">
        <input
          required
          autoComplete="off"
          placeholder="Item type"
          value={itemType} onChange={(event)=> setItemType(event.target.value)}
        />
      </div> */}
      <div className="inventoryForm__input">
        <input
          required
          autoComplete="off"
          placeholder="Item description"
          value={itemDescription} onChange={(event)=> setItemDescription(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <input
          required
          autoComplete="off"
          type="number"
          placeholder="Item price"
          value={itemPrice} onChange={(event)=> setItemPrice(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <input
          required
          autoComplete="off"
          placeholder="Item image"
          value={itemImage} onChange={(event)=> setItemImage(event.target.value)}
        />
      </div>
      <button className="inventoryHome__buy" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default InventoryForm
