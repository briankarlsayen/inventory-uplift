import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function InventoryForm({setItem, item}) {
  const [itemTitle, setItemTitle] = useState('')
  const [itemCount, setItemCount] = useState(0)
  const [itemPrice, setItemPrice] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemType, setItemType] = useState('')
  const [itemImage, setItemImage] = useState('')

  const addItem = (e) => {
    e.preventDefault()
    let newItem = {...item}
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
      {/* <form className="inventoryForm__container" onSubmit={e => addItem(e)}>    */}
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={e => addItem(e)}
      >    
      <div className="inventoryForm__input">
        <TextField
          required
          autoComplete="off"
          id="outlined-required"
          label="Item name"
          value={itemTitle} onChange={(event)=> setItemTitle(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <TextField
          required
          autoComplete="off"
          id="outlined-required"
          type="number"
          label="Item count"
          value={itemCount} onChange={(event)=> setItemCount(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <TextField
          required
          autoComplete="off"
          id="outlined-required"
          label="Item type"
          value={itemType} onChange={(event)=> setItemType(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <TextField
          required
          autoComplete="off"
          id="outlined-required"
          label="Item description"
          value={itemDescription} onChange={(event)=> setItemDescription(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <TextField
          required
          autoComplete="off"
          id="outlined-required"
          type="number"
          label="Item price"
          value={itemPrice} onChange={(event)=> setItemPrice(event.target.value)}
        />
      </div>
      <div className="inventoryForm__input">
        <TextField
          required
          autoComplete="off"
          id="outlined-required"
          label="Item Image"
          value={itemImage} onChange={(event)=> setItemImage(event.target.value)}
        />
      </div>
      <Button type="submit" variant="contained">Contained</Button>
      </Box>
    </div>
  )
}

export default InventoryForm
