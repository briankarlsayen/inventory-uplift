import React,{useState} from 'react'

const UserForm = () => {
  const [user, setUser] = useState({
      firstName:'',
      lastName: ''
  })
  
  const changeFirstName = (event) => {
    let newState = {...user}
    newState.firstName = event
    setUser(newState)
  }
  const changeLastName = (event) => {
    let newState = {...user}
    newState.lastName = event
    console.log(newState)
    setUser(newState)
  }

  return (
    <div className="user">
      <h2>Input user information</h2>
      <div className="user__form">
        <label>First name:</label>
        <input type="text" value={user.firstName} onChange={event => changeFirstName(event.target.value)}/>
        <label>Last name:</label>
        <input type="text" value={user.lastName} onChange={event => changeLastName(event.target.value)}/>
      </div>
      {(user.firstName || user.lastName) && <h3>Task of {user.firstName} {user.lastName}</h3>}
      
    </div>
  )
}

export default UserForm;
