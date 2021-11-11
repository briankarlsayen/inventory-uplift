import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import LockIcon from '../../icons/lock-icon.svg'
import UserIcon from '../../icons/user-icon.svg'
import SignLogo from '../../icons/sign-logo.svg'
import {nameChange} from '../../redux/reducers/user-reducer';
import {userState} from '../../redux/reducers/user-reducer';

function InventoryLogin({newUser, setNewUser, setLogged, logged, setAdmin, setName}) {
  const [account, setAccount] = useState({
    username: '',
    password: '',
    error: false
  })
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(()=> {
    getUser()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    checkUser()
  }

  const getUser = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=> {
      let addUser = {...newUser}
      const newArr = addUser.user.concat(res.data)
      setNewUser(newArr)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const checkUser = () => {
    for(let i =0 ; i < 10 ; i++){
      // check is username and password is correct      
      if(account.username === newUser[i].username){
        setAdmin(false)
        if(newUser[i].id === 0) {
          setAdmin(true)
        }
        //setNewUsers(newUsers[i])
        setName(newUser[i].username)
        setLogged(true)
        dispatch(nameChange(newUser[i].name))
        dispatch(userState(true))
        history.push('/home')
      } else {
        setAccount({error: true})
      }
      // if(username === user.users[i].username && password === user.users[i].password){
      //   setAdmin(false)
      //   if(user.users[i].type === 'admin') {
      //     console.log('im admin')
      //     setAdmin(true)
      //   }
      //   setName(user.users[i].username)
      //   setLogged(true)
      //   history.push('/home')
      // } else {
      //   setError(true)
      // }
    }
  }

  const changeHandler = (event) => {
    switch(event.target.name){
      case "username":
        setAccount({
          ...account,
          username: event.target.value
        });
        break;
      case "password":
        setAccount({
          ...account,
          password: event.target.value
        })
        break;
        default:
        break;
    }
  }

  return (
    <div className="login">
      <img src={SignLogo} alt="logo" />
      <h2 className="subtitle">Sign In</h2>
      {account.error && 
        <h2 className="errorMsg">Wrong username or password</h2>
      }
        <form autoComplete="off"
        onSubmit={handleSubmit} >
        <div className="inventoryLogin__input">
          <label>Username</label>
          <img src={UserIcon} alt="user icon" />
          <input
            name="username"
            required
            autoComplete="off"
            value={account.username} onChange={changeHandler}
          />
        </div>
        <div className="inventoryLogin__input">
          <label>Password</label>
          <img src={LockIcon} alt="lock icon" />
          <input
            name="password"
            required
            autoComplete="off"
            type="password"
            value={account.password} onChange={changeHandler}
          />
        </div>
        <button className="inventoryLogin__btn" type="submit" variant="contained">Submit</button>
      </form>
      <p className="inventorySign__btn" onClick={() => history.push('/signup')}>Create new account</p>
    </div>
  )
}

export default InventoryLogin
