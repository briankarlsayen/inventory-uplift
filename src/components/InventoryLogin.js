import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    //console.log(user.users.length)
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
      {error && 
        <h2 className="errorMsg">Wrong username or password</h2>
      }
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="inventoryForm__input">
          <TextField
            required
            autoComplete="off"
            id="outlined-required"
            label="Username"
            value={username} onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="inventoryForm__input">
          <TextField
            required
            autoComplete="off"
            id="outlined-required"
            label="Password"
            type="password"
            value={password} onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" variant="contained">Submit</Button>
      </Box>
    </div>
  )
}

export default InventoryLogin
