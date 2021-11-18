import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import StarImg from '../../img/star-img.png'
import UserIcon from '../../icons/username-icon.svg'
import LockIcon from '../../icons/lock-icon.svg'
import EmailIcon from '../../icons/mail-icon.svg'
import NumberIcon from '../../icons/mobile-icon.svg'
import WarningIcon from '../../icons/warning-icon.svg'
import BackIcon from '../../icons/back-icon.svg'

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
        <div className="inventoryLogin__container">
          <div onClick={()=> history.push('/login')} className="inventorySignup__back">
            <img src={BackIcon} alt="back icon" />
            <p>Back</p>
          </div>
          <img className='inventoryLogin__left' src={StarImg} alt='warcraft-img' />
          <form autoComplete="off"
            onSubmit={handleSubmit} >
            <h2 className="inventorySignUp__title">Sign up</h2>
            <div className="inventoryLogin__input">
              <img className="login__icon" src={UserIcon} alt="user icon" />
              <input
                name="username"
                autoComplete="off"
                placeholder="Username"
                value={user.username} onChange={changeHandler}
              />
            </div>
            <div className="inventoryLogin__input">
              <img className="login__icon" src={LockIcon} alt="lock icon" />
              <input
                name="password"
                autoComplete="off"
                placeholder="Password"
                type="text"
                value={user.password} onChange={changeHandler}
              />
            </div>
            <div className="inventoryLogin__input">
              <img className="login__icon" src={EmailIcon} alt="lock icon" />
              <input
                name="email"
                autoComplete="off"
                placeholder="Email"
                type="text"
                value={user.email} onChange={changeHandler}
              />
            </div>
            <div className="inventoryLogin__input">
              <img className="login__icon" src={NumberIcon} alt="lock icon" />
              <input
                name="number"
                autoComplete="off"
                placeholder="Number"
                type="text"
                value={user.number} onChange={changeHandler}
              />
            </div>
            {errorText && 
              <div className="invetoryLogin__error">
                <img src={WarningIcon} alt="warning icon" />
                <h2 className="errorMsg">{errorText}</h2>
              </div>
            }
            <button className="inventoryLogin__btn" type="submit" variant="contained">Submit</button>
          </form>
        </div>
        
    </div>
  )
}

export default InventorySignUp
