import React, {useState} from 'react'
import InventoryUserList from './InventoryUserList'
import userRestrict from '../../HOC/userRestrict'
function InventoryUser({user}) {
  return (
    <div className="inventory__user">
      <h2 className="subtitle">User List</h2>
      <div className="inventoryUser__list">
        {user.map((user)=> {
          return(
            <InventoryUserList user={user} />
          )
        })}
      </div>
    </div>
  )
}

export default userRestrict(InventoryUser)
