import React from 'react'
import styles from './styling/Summary.module.css'
import InventoryCard from './InventoryCard'
function InventorySummary({item}) {
  const itemCount = item.count
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
  return (
    <div>
      <li className={itemCol.join(' ')}>
        {item.available && 
          <p className="inventory__item">{item.title}</p>
        }
        <InventoryCard item={item} />
      </li>
      
    </div>
  )
}

export default InventorySummary
