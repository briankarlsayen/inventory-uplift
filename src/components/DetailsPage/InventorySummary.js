import React, {useState, useEffect} from 'react'
import styles from '../styling/Summary.module.css'
import InventoryCard from './InventoryCard'
import {useParams} from 'react-router-dom'
import { useHistory } from 'react-router'
import InventoryChangeCount from './InventoryChangeCount'


function InventorySummary({item, setItem, id, allItem, admin, logged}) {
  const [newCount, setNewCount] = useState(item.count)
  const _id = useParams()
  const history = useHistory()
  let itemCount;
  const itemCol = ["inventory__summary"];
  if(itemCount <= 2){
    itemCol.push(styles.colorRed) 
  } else if(itemCount < 5){
    itemCol.push(styles.colorYellow)
  } else if(itemCount >= 5){
    itemCol.push(styles.colorGreen)
  } else{
    itemCol.push(styles.colorRed) 
  }
  
  const changeCount = (e) => {
    e.preventDefault();
    const newAllItem = allItem.items
    const newItem = {...item}
    newItem.count = newCount
    newAllItem.splice(_id.id, 1, newItem)
    const newAllItems = {...allItem}
    newAllItems.items = newAllItem
    //splice the current item then swap with newItem
    //console.log(newAllItems)
    setItem(newAllItems)
  }

  const checkLogged = () => {
    if(!logged){
      history.push('/login')
    }
  }

  return (
    <div className="inventory__summary">
      <li className={itemCol.join(' ')}>
        {item.available && 
          <p className="inventory__item">{item.title}</p>
        }
        <InventoryCard item={item} />
        {admin ?
          <InventoryChangeCount setNewCount={setNewCount} newCount={newCount} changeCount={changeCount} /> :
          <button onClick={checkLogged} className="addCart__btn">Add to cart</button>
        }
      </li>
      
    </div>
  )
}

export default InventorySummary
