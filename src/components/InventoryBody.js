import React, {useState, useEffect} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import InventoryForm from './AddPage/InventoryForm'
import InventoryHome from './HomePage/InventoryHome.js'
import InventoryDetails from './DetailsPage/InventoryDetails.js'
import InventoryLogin from './LoginPage/InventoryLogin'
import InventoryCheckout from './CheckoutPage/InventoryCheckout'
import InventorySignUp from './SignupPage/InventorySignUp'
import axios from 'axios'
import instance from './axios'
import {randomCount, randomPrice} from './foodParams'
import Navbar from './Navbar/Navbar'
import '../App.css'
import './styling/Inventory.css'

function InventoryBody() {
  
  return (
    <div className="inventory__body">
      <Navbar />
      <Switch>
        <Route exact path="/add"><InventoryForm /></Route>
        <Route exact path="/login"><InventoryLogin/></Route>
        {/* <Route path="/home/:id"><InventoryDetails item={foodList} setItem={setItem} admin={admin} logged={logged} /></Route> */}
        <Route path="/checkout"><InventoryCheckout/></Route>
        <Route path="/signup"><InventorySignUp /></Route>
        <Route exact path="/home"><InventoryHome /></Route>
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </div>
  )
}

export default InventoryBody
