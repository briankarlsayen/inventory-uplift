import React, {useState, useEffect} from 'react'
import styles from './styling/Summary.module.css'
import InventoryCard from './InventoryCard'
import {useParams} from 'react-router-dom'
import MinusIcon from './icons/minus-icon.svg'
import AddIcon from './icons/plus-icon.svg'

function InventorySummary({item, setItem, id, allItem}) {
  const [newCount, setNewCount] = useState(item.count)
  const _id = useParams()

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

  const lessButton= ()=> {
    let lessCount = newCount;
    setNewCount(lessCount -=1)
   //console.log(itemCount)
  }
  const addButton = ()=> {
    let addCount = newCount;
    setNewCount(addCount+=1)
    console.log(addCount)
  }
  
  return (
    <div>
      <li className={itemCol.join(' ')}>
        {item.available && 
          <p className="inventory__item">{item.title}</p>
        }
        <InventoryCard item={item} />
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
      </li>
      
    </div>
  )
}

export default InventorySummary
