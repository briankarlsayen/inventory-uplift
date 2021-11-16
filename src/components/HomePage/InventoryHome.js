import React, {useEffect, useState} from 'react'
import InventoryHomeFood from './InventoryHomeFood'
import SearchIcon from '../../icons/search-icon.svg'
import withLoading from '../../HOC/withLoading'
import userRestrict from '../../HOC/userRestrict'
import {randomCount, randomPrice} from '../foodParams'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { set } from 'mongoose'
import CryptoJS  from 'crypto-js'
import '../styling/InventoryHome.css'

function InventoryHome({filterList, setFilterList, foodList, setFoodList, itemList}) {
  const all = useSelector(state => state.user)
  
  const [inputText, setInputText] = useState('')
  const [secretText, setSecretText] = useState('')
  const [inputDecText, setInputDecText] = useState('')
  const [showDecText, setShowDecText] = useState('')


  const [search, setSearch] = useState('')
  const history = useHistory()
  useEffect(() => {
    list(itemList)
  }, [search])

  const list = (newList) => {
    const arr = newList
    const filtered = arr.filter(
      (data) => data.name?.toLowerCase().includes(search.toLowerCase())
    )
    setFilterList(filtered)
  }

  const clickHandler = (index) => {
    let id = filterList[index].id
    history.push(`/home/${id}`)
  }

  //edit this!!
  const showFoods = () => {
    return(
      <>
      {filterList && filterList.map((data, index) => (
        <div className="inventoryHomeItem__container" key={data.name} onClick={()=> clickHandler(index)}>
          <img className="inventoryHomeItem__img" src={data.image} alt={data.name} />
        </div>
      ))
      } 
      </>
    )
  }

  const getRandom = () => {
    console.log(randomCount())
  }

  const secretPassword = 'Im invincible babY!@'
  const submitHandler = (e) => {
    e.preventDefault()
    const encriptedText = CryptoJS.AES.encrypt(inputText, secretPassword).toString();
    console.log(encriptedText)
    setSecretText(encriptedText)
  }

  const decriptHandler = (e) => {
    e.preventDefault()
    const decriptedText = CryptoJS.AES.decrypt(inputDecText, secretPassword);
    const originalText = decriptedText.toString(CryptoJS.enc.Utf8);
    setShowDecText(originalText)

  }

  return (
    <div className="inventory__home">
      {/* <form onSubmit={submitHandler} className="generator">
        <input type="text" value={inputText} onChange={e=> setInputText(e.target.value)} />
        <input type="submit" />
        <p>{secretText}</p>
      </form>
      <form onSubmit={decriptHandler} className="generator">
        <input type="text" value={inputDecText} onChange={e=> setInputDecText(e.target.value)} />
        <input type="submit" />
        <p>{showDecText}</p>
      </form> */}
      <div className="inventoryHome__searchBox">
        <input className="inventoryHome__search" placeholder="Search food" type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <img className="inventoryHome__icon" src={SearchIcon} alt="search icon" />
      </div>
      <div className="inventoryHome__items">
        <div className="inventoryHome__left">
          <h4>Description</h4>
          <p>Divine Rapier</p>
          <p>+250 damage, drops upon death</p>
          <p>6200 gold</p>
          <button>Buy</button>
        </div>
        <div className="inventoryHome__right">
          <h4>Buy item</h4>
          {showFoods()}
        </div>
      </div>
    </div>
  )
}

export default withLoading(InventoryHome)
