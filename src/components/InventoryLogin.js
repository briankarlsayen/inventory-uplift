import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function InventoryLogin({user, setLogged, logged}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    checkUser()
  }

  const checkUser = () => {
    for(let i =0 ; i < user.users.length ; i++){
      // check is username and password is correct
      if(username === user.users[i].username && password === user.users[i].password){
        setLogged(true)
        history.push('/home')
      } else {
        setError(true)
      }
    }
  }

  return (
    <div className="login">
      <h2 className="subtitle">Login Form</h2>
      {error && 
        <h2 className="errorMsg">Wrong username or password</h2>
      }
        <form autoComplete="off"
        onSubmit={handleSubmit} >
        <div className="inventoryLogin__input">
          <label>Username: </label>
          <input
            required
            autoComplete="off"
            placeholder="Username"
            value={username} onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="inventoryLogin__input">
        <label>Password: </label>
          <input
            required
            autoComplete="off"
            placeholder="Password"
            type="password"
            value={password} onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="inventoryLogin__btn" type="submit" variant="contained">Submit</button>
      </form>
    </div>
  )
}

export default InventoryLogin
