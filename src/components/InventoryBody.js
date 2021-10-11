import React, {useState} from 'react'
import InventorySummary from './InventorySummary.js'
import { Switch, Route, NavLink } from 'react-router-dom'

import InventoryForm from './InventoryForm'
import InventoryHome from './InventoryHome.js'
import InventoryButtons from './InventoryButtons.js'

function InventoryBody() {
  const [toShow, setToShow] = useState(false)
  const [item, setItem] = useState({
    realTitle: '',
    items: [{
      title: 'AKRacing Computer Chair',
      available: true,
      count: 4,
      type: 'furniture',
      image: 'https://cdn.shopify.com/s/files/1/0016/0255/1873/products/Office-black3_480x.png?v=1585409524',
      description: 'Can make your coding speed 10x',
      price: 5400.00
    },
    {
      title: 'LG Gram 17',
      available: true,
      count: 2,
      type: 'gadget',
      image: 'https://cdn.vox-cdn.com/thumbor/IaMtMcET0zNsOb9L5aoaEnngeIs=/0x0:2040x1360/1400x933/filters:focal(857x517:1183x843):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69073751/cfaulkner_20210326_4491_0006.0.jpg',
      description: 'Can do code on its own',
      price: 105400.00
    },
    {
      title: 'Japanese Kotatsu',
      available: true,
      count: 8,
      type: 'furniture',
      image: 'https://i.pinimg.com/originals/d5/5f/79/d55f7956e56e5b0370fbaf6e99e51a9f.jpg',
      description: 'Can make your wildest dreams come true',
      price: 55000.0
    }]
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
          <li>
            <NavLink activeClassName="nav__active" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav__active" to="/add">Add</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav__active" to="/buttons">Show</NavLink>
          </li>
        </ul>
      </nav>
      <h1 className="inverntory__title">Inventory Page</h1>
      <Switch>
        <Route exact path="/add"><InventoryForm item={item} setItem={setItem} /></Route>
        <Route exact path="/buttons"><InventoryButtons showItems={showItems} hideItems={hideItems} toShow={toShow} /></Route>
        <Route exact path="/home"><InventoryHome item={item} /></Route>
      </Switch>
      
    </div>
  )
}

export default InventoryBody
