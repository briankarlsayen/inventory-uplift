import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import InventorySidebar from './Sidebar/InventorySidebar.js'
import InventoryForm from './AddPage/InventoryForm'
import InventoryHome from './HomePage/InventoryHome.js'
import InventoryDetails from './DetailsPage/InventoryDetails.js'
import InventoryUser from './UserPage/InventoryUser'
import InventoryLogin from './LoginPage/InventoryLogin'
import InventoryCheckout from './CheckoutPage/InventoryCheckout'
import InventorySignUp from './SignupPage/InventorySignUp'
import InventoryUserList from './UserPage/InventoryUserList'
import Navbar from './Navbar/Navbar'
import '../App.css'
import './styling/Inventory.css'

function InventoryBody() {
  const [toShow, setToShow] = useState(false)
  const [logged, setLogged] = useState(false)
  const [checkout, setCheckout] = useState([]);
  const [admin, setAdmin] = useState(false)
  const [name, setName] = useState('')


  const [toggle, setToggle] = useState(false)
  
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

  const [newUser, setNewUser] = useState({
    user: [
      {
        username: 'admin',
        name: 'admin',
        email: 'admin@gmail.com',
        address: null,
        company: null,
        id: 0,
        phone: null,
        website: null
      }
    ]})

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
    <div className="inventory__body">
      <Navbar admin={admin} setAdmin={setAdmin} logged={logged} setLogged={setLogged} toggle={toggle} setToggle={setToggle} />
      <Switch>
        <Route exact path="/add"><InventoryForm item={item} setItem={setItem} /></Route>
        <Route exact path="/login"><InventoryLogin newUser={newUser} setNewUser={setNewUser} logged={logged} setLogged={setLogged} setAdmin={setAdmin} setName={setName} /></Route>
        <Route exact path="/users"><InventoryUser user={newUser} /></Route>
        <Route path="/home/:id"><InventoryDetails item={item} setItem={setItem} admin={admin} logged={logged} /></Route>
        <Route path="/checkout"><InventoryCheckout/></Route>
        <Route path="/signup"><InventorySignUp newUser={newUser} setNewUser={setNewUser} /></Route>
        <Route exact path="/home"><InventoryHome item={item.items} /></Route>
      </Switch>
      <InventorySidebar item={item} toggle={toggle} setToggle={setToggle} />
    </div>
  )
}

export default InventoryBody
