import React from 'react'
import {NavLink} from 'react-router-dom'
import ShopIcon from '../../icons/shop-icon.svg'
import CloseIcon from '../../icons/close-icon.svg'
import MenuIcon from '../../icons/menu-icon.svg'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {nameChange} from '../../redux/reducers/user-reducer';
import {userState} from '../../redux/reducers/user-reducer';
import {useDispatch} from 'react-redux'
import '../styling/InventoryNavbar.css'

function Navbar({admin, logged, setLogged, setAdmin, toggle, setToggle}) {
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const globalUser = useSelector(state => state.users)
  //console.log(globalUser)

  const checkLogged = () => {
    if(logged){
      if(admin){
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
    if(logged) {
      return(
        <>
          <li>
            <NavLink activeClassName="nav__active" to="/checkout/">Cart</NavLink>
          </li>
          <li>
            {globalUser.name}
          </li>
        </>
      )
    }
  }

  return (
    <nav className="inventory__nav">
        <ul>
          {/* <li onClick={()=>setToggle(!toggle)} className="nav__btn">
            {
              toggle ?
              <img src={MenuIcon} /> :
              <img src={CloseIcon} />
            }
          </li> */}
          <li className="nav__logoText">
            <NavLink to="/home">
              {/* <img className="nav__logo" src={ShopIcon} alt="logo" /> */}
              <div className="logo__container">
                <span className="logo__text1">Secret</span>
                <span className="logo__text2">Shop</span>
              </div>
            </NavLink>
          </li>
            {navItems()}
            {checkLogged()}
          <li style={{margin: 0}}>
            {!logged ?
              <NavLink style={{float: 'right'}} activeClassName="nav__active" to="/login">
                Login
              </NavLink> :
              <p style={{float: 'right'}} onClick={()=>{
                setLogged(false)
                setAdmin(false)
                history.push('/login')
                dispatch(nameChange(''))
                dispatch(userState(false))
              }}>Log Out</p>
            }
          </li>          
        </ul>
      </nav>
  )
}

export default Navbar
