import React from 'react'
import styles from '../styling/SidebarItem.module.css'

function InventorySidebarItem({item}) {
  let itemCount = item.count;
  const itemCol = [];
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
    <p className={itemCol.join(' ')} >{item.title}</p>
  )
}

export default InventorySidebarItem
