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
import {useDispatch} from 'react-redux'
import {addCart, increaseQuantity} from '../../redux/reducers/cart-reducer';

function InventoryHome({filterList, setFilterList, foodList, setFoodList, itemList}) {
  const dispatch = useDispatch()
  const all = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const [selectedItem, setSelectedItem] = useState({
      name: 'Dagon 5',
      price: '8005',
      description: '+13 Intelligence, +9 damage, +3 All Stats, Energy Burst (active) 800 damage to a single target',
      image: 'https://gaming-tools.com/warcraft-3/wp-content/uploads/sites/2/2020/04/Dagon-30x30.jpg'
  })
  
  const clickHandler = () => {
    const filteredCart = cart.filter(
      (data) => data.cart.name.includes(selectedItem.name)
    )
    if(!filteredCart.length) {
      dispatch(addCart(selectedItem))
    } 
    else {
      dispatch(increaseQuantity(filteredCart[0].id))
    }
  }

  const [search, setSearch] = useState('')
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

  const selectItemHandler = (data) => {
    setSelectedItem({
      name: data.name,
      price: data.buy_price,
      description: data.function,
      image: data.image
    })
  }

  const blurImage = (data) => {
    if(data.name === selectedItem.name) return 'blur__image'
    return 'hover__image'
  }
  //apply tooltip
  const showFoods = () => {
    return(
      <>
      {filterList && filterList.map((data, index) => (
        <div className="inventoryHomeItem__container" key={data.name} onClick={()=> selectItemHandler(data)}>
          <img className={`inventoryHomeItem__img ${blurImage(data)}`} src={data.image} alt={data.name} />
        </div>
      ))
      } 
      </>
    )
  }

  return (
    <div className="inventory__home">
      
      <div className="inventoryHome__items">
        <div className="inventoryHome__left">
          <div className="inventoryHomeLeft__details">
            <p className="item-name">{selectedItem.name}</p>
            <p className="item-desc">{selectedItem.description}</p>
            <p className="item-price">{selectedItem.price} gold</p>
            <button className="inventoryHome__buy" onClick={clickHandler}>Buy</button>
          </div>
        </div>
        <div className="inventoryHome__right">
          <div className="inventoryHome__searchBox">
            <input className="inventoryHome__search" placeholder="Search item" type="text" value={search} onChange={e => setSearch(e.target.value)} />
            <img className="inventoryHome__icon" src={SearchIcon} alt="search icon" />
          </div>
          {!filterList?.length && <h4>No result found</h4>}
          {showFoods()}
        </div>
      </div>
    </div>
  )
}

export default withLoading(InventoryHome)
