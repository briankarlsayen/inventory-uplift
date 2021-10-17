import React from 'react'

function InventoryUserList({user}) {
  return (
    <div className="user__list">
      <p>{user.username} - {user.name}</p>
    </div>
  )
}

export default InventoryUserList
