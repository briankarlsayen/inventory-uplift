import React from 'react'

function InventoryUserList({user}) {
  return (
    <div className="user__list">
      <p>{user.username} - {user.type}</p>
    </div>
  )
}

export default InventoryUserList
