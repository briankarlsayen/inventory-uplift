import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {userState} from '../../redux/reducers/user-reducer';
import {useDispatch} from 'react-redux'
import '../styling/InventoryNavbar.css'

function Navbar() {
  const dispatch = useDispatch()
  const history = useHistory()
  const globalUser = useSelector(state => state.users)
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    isAdmin: false,
  })

  useEffect(()=> {
    if(globalUser.user[0].id) {
      setUser({
        name: globalUser.user[0].name,
        username: globalUser.user[0].username,
        email: globalUser.user[0].email,
        isAdmin: globalUser.user[0].isAdmin,
      })
    }
  }, [globalUser])

  const checkLogged = () => {
    if(globalUser.user[0].id){
      if(user.isAdmin){
        return(
          <div className="inventoryNav__admin">
            <li>
              <NavLink activeClassName="nav__active" to="/add">Add</NavLink>
            </li>
          </div>
        )
      }
    }
  }

  const navItems = () => {
    if(globalUser.user[0].id) {
      return(
        <>
          <li>
            <NavLink activeClassName="nav__active" to="/checkout/">Cart</NavLink>
          </li>
          <li>
            {user.name}
          </li>
        </>
      )
    }
  }

  return (
    <nav className="inventory__nav">
        <ul>
          <li className="nav__logoText">
            <NavLink to="/home">
              <div className="logo__container">
                <span className="logo__text1">Secret</span>
                <span className="logo__text2">Shop</span>
              </div>
            </NavLink>
          </li>
            {navItems()}
            {checkLogged()}
          <li style={{margin: 0}}>
            {!globalUser.user[0].id?
              <NavLink style={{float: 'right'}} activeClassName="nav__active" to="/login">
                Login
              </NavLink> :
              <p style={{float: 'right'}} onClick={()=>{
                localStorage.removeItem("auth-token");
                dispatch(userState({
                  _id: '',
                  username: '',
                  name: '',
                  email: '',
                  isAdmin: false
                }))
                history.push('/login')
              }}>Log Out</p>
            }
          </li>          
        </ul>
      </nav>
  )
}

export default Navbar
