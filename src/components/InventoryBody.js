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
import {useHistory} from 'react-router-dom'

function InventoryBody() {
  const [toShow, setToShow] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [logged, setLogged] = useState(false)
  const [checkout, setCheckout] = useState([]);
  const [admin, setAdmin] = useState(false)
  const [name, setName] = useState('')
  const history = useHistory()

  const [item, setItem] = useState({
    realTitle: '',
    items: [{
      title: '2021 Tesla Model S Long Range Plus',
      available: true,
      count: 4,
      type: 'race car',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.autodevot.com%2Fwp-content%2Fuploads%2F2020%2F06%2FTesla-Model-S-Long-Range-Plus-with-Tempest-Wheels.jpg&f=1&nofb=1',
      description: 'The Tesla Model S is the electric luxury sedan that created the segment upon its debut in 2012. After almost a decade, competitors are still chasing the original, although the upcoming Lucid Air, backed by the original chief engineer of the Model S, may give the Tesla a run for its money. As it stands, only the Porsche Taycan can perform like the Model S, and the German cant compete with the Teslas range.',
      price: 43690,
      id: 1
    },
    {
      title: '2021 Tesla Model 3 Standard Range Plus',
      available: true,
      count: 2,
      type: 'race car',
      image: 'https://tesla.uscheapest.com/wp-content/uploads/2020/10/2021-tesla-model-3-extended-range.png',
      description: 'The Tesla Model 3 is the entry level compact electric sedan that slots below the larger Model S. The smaller Tesla four-door distinguishes itself with a unique design and a traditional trunk instead of the Model S hatch.',
      price: 37990,
      id: 2
    },
    {
      title: '2021 Tesla Cybertruck',
      available: true,
      count: 8,
      type: 'truck',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.auto-bild.de%2Fir_img%2F2%2F4%2F5%2F5%2F7%2F5%2F9%2FBildergalerie-Tesla-Cybertruck-2021-1200x800-bd243244335bdc6c.jpg&f=1&nofb=1',
      description: 'The 2021 Tesla Cybertruck is the latest in a line of highly anticipated reveals from the all-electric carmaker. What sets this one apart from the rest is that Tesla—the company that makes the number-one selling luxury car in the U.S., the Model 3—is now attacking the truck market.',
      price: 39900,
      id: 3
    }]
  })

  const [ user, setUser ] = useState({
    users: [
      {
        username: 'Sasuke',
        password: '123456',
        type: 'user'
      },
      {
        username: 'Ash',
        password: 'ketchup',
        type: 'user'
      },
      {
        username: 'admin',
        password: '123456',
        type: 'admin'
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

  const checkLogged = () => {
    if(logged){
      if(admin){
        return(
          <div className="inventoryNav__admin">
            <p style={{cursor: 'crosshair'}}>Admin</p>
            <li>
              <NavLink activeClassName="nav__active" to="/add">Add</NavLink>
            </li>
            <li style={{width: '60px'}}>
              <NavLink activeClassName="nav__active" to="/users">User List</NavLink>
            </li>
          </div>
        )
      }
      <p>{name}</p>
    }
  }

  const navItems = () => {
    if(logged) {
      return(
        <>
          <li>
            <NavLink activeClassName="nav__active" to="/home">Home</NavLink>
          </li>
          
          <li>
            <NavLink activeClassName="nav__active" to="/checkout/">Checkout</NavLink>
          </li>
        </>
      )
    }
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
            {navItems()}
            {checkLogged()}
          <li style={{margin: 0}}>
            {!logged ?
              <NavLink style={{float: 'right'}} activeClassName="nav__active" to="/login">Login</NavLink> :
              <p style={{float: 'right'}} onClick={()=>{
                setLogged(false)
                setAdmin(false)
                history.push('/login')
              }}>Log Out</p>
            }
          </li>
          
        </ul>
      </nav>
      <div className="margin" style={{paddingBottom: '44px'}}>
      </div>
      <Switch>
        <Route exact path="/add"><InventoryForm item={item} setItem={setItem} /></Route>
        <Route exact path="/login"><InventoryLogin user={user} logged={logged} setLogged={setLogged} setAdmin={setAdmin} setName={setName} /></Route>
        <Route exact path="/users"><InventoryUser user={user} /></Route>
        <Route path="/home/:id"><InventoryDetails item={item} setItem={setItem} admin={admin} logged={logged} /></Route>
        <Route path="/checkout"><InventoryCheckout/></Route>
        <Route exact path="/home"><InventoryHome item={item.items} /></Route>
      </Switch>
      <InventorySidebar item={item} toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default InventoryBody
