import React from 'react'
import './styling/Sidebar.css'
import {useHistory} from 'react-router-dom'
import InventorySidebarItem from './InventorySidebarItem'
import styles from './styling/Toggle.module.css'

function InventorySidebar({item, toggle}) {
  const history = useHistory()
  const navToggle = ["sidenav"]

  if(!toggle){
    navToggle.push(styles.toggled)
  } else {
    navToggle.push(styles.unToggled)
  }
  return (    
    <div className={navToggle.join(' ')}>
      <h4>Item stock: </h4>
      <ul>
      {item.items.map((item, index) => (
        <li onClick={()=> history.push(`/home/${index}`)} key={index}>
          <InventorySidebarItem item={item} />
        </li>
      ))}
      </ul>
    </div>     
  )   
}

export default InventorySidebar
