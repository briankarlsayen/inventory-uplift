import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from '../axios'
import LockIcon from '../../icons/lock-icon.svg'
import ArrowDownIcon from '../../icons/arrow-down-icon.svg'
import UserIcon from '../../icons/username-icon.svg'
import WarningIcon from '../../icons/warning-icon.svg'
import WarcraftImg from '../../img/warcraft-abaddon-img.jpg'
import GarenaIcon from '../../icons/garena-icon.svg'
import '../styling/Login.css'

function InventoryLogin() {
  const [account, setAccount] = useState({
    username: '',
    password: '',
    error: false
  })
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    loginHandler()
  }

  const loginHandler = async() => {
    try {
      const login = await axios.post('/login', {username: account.username, password: account.password})
      if(login.status === 201){
        localStorage.setItem('auth-token', login.data.accessToken)
        history.push("/home");
      }
    } catch(err) {
      setErrorMsg(err.response.data.message)
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
      <div className="inventoryLogin__container">
        <img className='inventoryLogin__left' src={WarcraftImg} alt='warcraft-img' />
        <form autoComplete="off"
          onSubmit={handleSubmit} >
            <div className="inventoryLoginContainer__logo">
              <img className="inventoryLogin__logo" src={GarenaIcon} alt="garena-icon" />
              <h2 className="login__title">Secret Shop</h2>
            </div>
          <div className="inventoryLogin__input">
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
          {errorMsg && 
          <div className="invetoryLogin__error">
            <img src={WarningIcon} alt="warning icon" />
            <h2 className="errorMsg">{errorMsg}</h2>
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
