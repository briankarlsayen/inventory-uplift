import React from 'react'
import './styling/Sidebar.css'
import {useHistory} from 'react-router-dom'
function InventorySidebar({item}) {
  const history = useHistory()
  return (    
    <div className="sidenav">
      <ul>
      {item.items.map((item, index) => (
        <li onClick={()=> history.push(`/home/${index}`)} key={index}>
          {item.title}
        </li>
      ))}
      </ul>
    </div>     
  )   
}

export default InventorySidebar
