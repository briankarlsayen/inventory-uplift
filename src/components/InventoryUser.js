import React, {useState} from 'react'
import InventoryUserList from './InventoryUserList'
function InventoryUser({user}) {
  
  return (
    <div>
      <h2>User List</h2>
      {user.users.map((user)=> {
        return(
          <InventoryUserList user={user} />
        )
      })}
    </div>
  )
}

export default InventoryUser
