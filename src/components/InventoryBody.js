import React, {useState} from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import InventorySidebar from './InventorySidebar.js'
import InventoryForm from './InventoryForm'
import InventoryHome from './InventoryHome.js'
import InventoryButtons from './InventoryButtons.js'
import InventoryDetails from './InventoryDetails.js'
import InventoryUser from './InventoryUser'
import InventoryLogin from './InventoryLogin'
import CloseIcon from './icons/close-icon.svg'
import MenuIcon from './icons/menu-icon.svg'
import InventoryCheckout from './InventoryCheckout'

function InventoryBody() {
  const [toShow, setToShow] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [logged, setLogged] = useState(false)
  const [checkout, setCheckout] = useState([]);
  const [item, setItem] = useState({
    realTitle: '',
    items: [{
      title: 'AKRacing Computer Chair',
      available: true,
      count: 4,
      type: 'furniture',
      image: 'https://cdn.shopify.com/s/files/1/0016/0255/1873/products/Office-black3_480x.png?v=1585409524',
      description: 'Can make your coding speed 10x',
      price: 5400.00,
      id: 1
    },
    {
      title: 'LG Gram 17',
      available: true,
      count: 2,
      type: 'gadget',
      image: 'https://cdn.vox-cdn.com/thumbor/IaMtMcET0zNsOb9L5aoaEnngeIs=/0x0:2040x1360/1400x933/filters:focal(857x517:1183x843):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69073751/cfaulkner_20210326_4491_0006.0.jpg',
      description: 'Can do code on its own',
      price: 105400.00,
      id: 2
    },
    {
      title: 'Japanese Kotatsu',
      available: true,
      count: 8,
      type: 'furniture',
      image: 'https://i.pinimg.com/originals/d5/5f/79/d55f7956e56e5b0370fbaf6e99e51a9f.jpg',
      description: 'Can make your wildest dreams come true',
      price: 55000.0,
      id: 3
    }]
  })

  const [ user, setUser ] = useState({
    users: [
      {
        username: 'Sasuke',
        password: '123456'
      },
      {
        username: 'Ash',
        password: 'ketchup'
      }
    ]
  })

  const hideItems = () => {
    let hide = {...item}
    hide.items.map((val) => (
      val.available = false
    ))
    setItem(hide)
    setToShow(true)
  }
  const showItems = () => {
    let show = {...item}
    show.items.map((val) => (
      val.available = true
    ))
    setItem(show)
    setToShow(false)
  }

  return (
    <div>
      <nav className="inventory__nav">
        <ul>
          <li onClick={()=>setToggle(!toggle)} className="nav__btn">
            {
              toggle ?
              <img src={MenuIcon} /> :
              <img src={CloseIcon} />
            }
          </li>
          <li>
            <NavLink activeClassName="nav__active" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav__active" to="/add">Add</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav__active" to="/users">User List</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav__active" to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav__active" to="/checkout/">Checkout</NavLink>
          </li>
          
        </ul>
      </nav>
      <h1 className="inverntory__title">Inventory Page</h1>
      <Switch>
        <Route exact path="/add"><InventoryForm item={item} setItem={setItem} /></Route>
        <Route exact path="/login"><InventoryLogin user={user} logged={logged} setLogged={setLogged} /></Route>
        <Route exact path="/users"><InventoryUser user={user} /></Route>
        <Route path="/home/:id"><InventoryDetails item={item} setItem={setItem}/></Route>
        <Route path="/checkout"><InventoryCheckout/></Route>
        <Route exact path="/home"><InventoryHome /></Route>
      </Switch>
      <InventorySidebar item={item} toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default InventoryBody
