import React, {useEffect, useState} from 'react'
import InventoryHomeFood from './InventoryHomeFood'
import SearchIcon from '../../icons/search-icon.svg'
import withLoading from '../../HOC/withLoading'
import userRestrict from '../../HOC/userRestrict'
import {randomCount, randomPrice} from '../foodParams'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import '../styling/InventoryHome.css'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import instance from '../axios'
import {addCart, increaseQuantity} from '../../redux/reducers/cart-reducer';
import jwt from 'jsonwebtoken'
import {userState} from '../../redux/reducers/user-reducer';

function InventoryHome() {
  const dispatch = useDispatch()
  const all = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const [userId, setUserId] = useState('')
  const [itemList, setItemList] = useState([])
  const [filterList, setFilterList] = useState()
  const [selectedItem, setSelectedItem] = useState({
      name: 'Dagon 5',
      price: '8005',
      description: '+13 Intelligence, +9 damage, +3 All Stats, Energy Burst (active) 800 damage to a single target',
      image: 'https://gaming-tools.com/warcraft-3/wp-content/uploads/sites/2/2020/04/Dagon-30x30.jpg',
      type: 'item',
      stock: 19,
  })
  
  useEffect(()=> {
    getHeroes()
    const token = localStorage.getItem('auth-token')
    const decoded = jwt.decode(token)
    if(token){
      axios.defaults.headers.common['auth-token'] = token
      getUserData(decoded)
      setUserId(decoded.id)
    }
  },[])

  const getHeroes = async() => {
    try {
      const itemArr = []
      const heroItem = await axios.get('https://web-scrapper01.herokuapp.com/dotaitem')
      const item = await instance.get('/viewproduct')
      if(heroItem.status === 200) {
        heroItem.data.map((data) => (
          data.type = 'item',
          data.stock = randomCount()
        ))
        if(item.status === 201) {
          itemArr.push(...heroItem.data,...item.data.result)
        }
      
      }
      setItemList(itemArr)
      setFilterList(itemArr)
    } catch(err) {
      console.log(err)
    }
  }

  const getUserData = async(decoded) => {
    const user = await instance.get(`/viewuser/${decoded.id}`)
    if(user) {
      dispatch(userState(user.data.result[0]))
    }
  }

  const clickHandler = async() => {
    // const filteredCart = cart.filter(
    //   (data) => data.cart.name.includes(selectedItem.name)
    // )
    // if(!filteredCart.length) {
    //   dispatch(addCart(selectedItem))
    // } 
    // else {
    //   dispatch(increaseQuantity(filteredCart[0].id))
    // }

    const item = {
      name: selectedItem.name,
      buy_price: selectedItem.price,
      function: selectedItem.description,
      image: selectedItem.image,
      type: selectedItem.type,
      stock: selectedItem.stock,
      quantity: 1
    }

    const cart = await instance.get(`/viewcart/${userId}`)

    if(userId) {
      const addCart = await instance.put(`/updatecart/${userId}`,
      {
        userId: userId,
        products: [
          ...cart.data.products, item
        ]
      })
      if(addCart.status === 201) return alert('Successfully added to cart')
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
      image: data.image,
      stock: data.stock,
      image: data.image,
      type: data.type,
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

  // const addToCart = async() => {
  //   const add = await instance.post('/updatecart', {
  //     name: "",
  //     function: "",
  //     buy_price: "",
  //     stock: "",
  //     type: "",
  //     image: ""
  //   })
  //   console.log(add)
  // }

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
