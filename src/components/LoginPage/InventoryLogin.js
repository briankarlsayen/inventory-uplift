import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from '../axios'
import {useDispatch} from 'react-redux'
import LockIcon from '../../icons/lock-icon.svg'
import ArrowDownIcon from '../../icons/arrow-down-icon.svg'
import UserIcon from '../../icons/username-icon.svg'
import WarningIcon from '../../icons/warning-icon.svg'
import WarcraftImg from '../../img/warcraft-abaddon-img.jpg'
import GarenaIcon from '../../icons/garena-icon.svg'
import {nameChange} from '../../redux/reducers/user-reducer';
import {userState} from '../../redux/reducers/user-reducer';
import '../styling/Login.css'

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
    loginHandler()
  }

  // const getUser = () => {
  //   axios.get('/viewuser')
  //   .then((res)=> {
  //     let addUser = {...newUser}
  //     const newArr = addUser.user.concat(res.data)
  //     setNewUser(newArr)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

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


  //login
  const loginHandler = () => {
      axios.post('/login', {username: account.username, password: account.password})
      .then((res) => {
        console.log(res)
      })
      .catch((err)=> {
        console.log(err.message)
      })
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
      <div className="inventoryLogin__container">
        <img className='inventoryLogin__left' src={WarcraftImg} alt='warcraft-img' />
        <form autoComplete="off"
          onSubmit={handleSubmit} >
            <div className="inventoryLoginContainer__logo">
              <img className="inventoryLogin__logo" src={GarenaIcon} alt="garena-icon" />
              <h2 className="login__title">Secret Shop</h2>
            </div>
          <div className="inventoryLogin__input">
            {/* <label className="login__label">Username</label> */}
            <img className="login__icon" src={UserIcon} alt="user icon" />
            <input
              name="username"
              required
              autoComplete="off"
              value={account.username} onChange={changeHandler}
            />
            <img className="loginArrow__icon" src={ArrowDownIcon} alt="arrow down icon" />
          </div>
          <div className="inventoryLogin__input">
            {/* <label className="login__label">Password</label> */}
            <img className="login__icon" src={LockIcon} alt="lock icon" />
            <input
              name="password"
              required
              autoComplete="off"
              type="password"
              value={account.password} onChange={changeHandler}
            />
          </div>
          <div className="login__checkbox">
            <input type="checkbox" />
            <p>Remember Password</p>
          </div>
          {account.error && 
          <div className="invetoryLogin__error">
            <img src={WarningIcon} alt="warning icon" />
            <h2 className="errorMsg">Wrong username or password</h2>
          </div>
          }
          <button className="inventoryLogin__btn" type="submit" variant="contained">Login</button>
          <button className="inventorySign__btn" onClick={() => history.push('/signup')}>Create account</button>
          <div className="inventoryForgot__container">
            <p className="forgot__password">Forgot Password?</p>
            <select className="language__select">
              <option value='Englist'>English</option>
            </select>  
          </div>
        </form>
      </div>
    </div>
  )
}

export default InventoryLogin
