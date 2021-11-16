import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

function InventorySignUp({newUser, setNewUser}) {
  const history = useHistory()
  const [errorText, setErrorText] = useState('')
  const [user, setUser] = useState({
    username:'',
    password: '',
    email: '',
    number: '',
    type: 'user'
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    checkError()    
  }

  const checkError = () => {
    if(!user.username) {
      return setErrorText('Username should be valid')
    }
    if(!user.password) {
      return setErrorText('Password should be valid')
    }
    if(!user.email) {
      return setErrorText('Email should be valid')
    }
    if(!user.number) {
      return setErrorText('Number should be valid')
    }
    setErrorText('')
    checkEmail()
  }

  const checkEmail= () => {
    let error = user.email;
    const check = error.includes('@')
    const checkDot = error.includes('.')
    //can use split

    if(!check || !checkDot) {
      return setErrorText('Email should be valid')
    }
    postUser()
  }

  const postUser = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', {user})
    .then((res) => {
      //console.log(res)
      let addUser = {...newUser}
      const newArr = addUser.user.concat(user)
      //unable to setNewUser due to addUser.user is deemed undefined
      setNewUser(newArr)
      //history.push('/login')
    })
    .catch((err) => console.log(err))
    alert('Account successfully created')
  }

  //input onChange handler
  const changeHandler = (event) => {
    switch(event.target.name){
      case "username":
        setUser({
          ...user,
          username: event.target.value
        });
        break;
      case "password":
        setUser({
          ...user,
          password: event.target.value
        })
        break;
      case "email":
        setUser({
          ...user,
          email: event.target.value
        })
        break;
      case "number":
        setUser({
          ...user,
          number: event.target.value
        })
        break;
      default:
        break;
    }
  }

  return (
    <div className="login">
      <h2 className="subtitle">SignUp Form</h2>
        {errorText && <p>{errorText}</p>}
        <form autoComplete="off"
        onSubmit={handleSubmit} >
        <div className="inventoryLogin__input">
          <label>Username: </label>
          <input
            name="username"
            autoComplete="off"
            placeholder="Username"
            value={user.username} onChange={changeHandler}
          />
        </div>
        <div className="inventoryLogin__input">
        <label>Password: </label>
          <input
            name="password"
            autoComplete="off"
            placeholder="Password"
            type="text"
            value={user.password} onChange={changeHandler}
          />
        </div>
        <div className="inventoryLogin__input">
        <label>Email: </label>
          <input
            name="email"
            autoComplete="off"
            placeholder="Email"
            type="text"
            value={user.email} onChange={changeHandler}
          />
        </div>
        <div className="inventoryLogin__input">
        <label>Number: </label>
          <input
            name="number"
            autoComplete="off"
            placeholder="number"
            type="text"
            value={user.number} onChange={changeHandler}
          />
        </div>
        <button className="inventoryLogin__btn" type="submit" variant="contained">Submit</button>
      </form>
    </div>
  )
}

export default InventorySignUp
