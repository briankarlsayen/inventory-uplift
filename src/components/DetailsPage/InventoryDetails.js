import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import InventorySummary from './InventorySummary';
import InventoryNotFound from './InventoryNotFound'
import InventoryCard from './InventoryCard'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/reducers/cart-reducer';

function InventoryDetails({item, setItem, admin, logged}) {
  const [found, setFound] = useState(false)
  const [list, setList] = useState()
  const dispatch = useDispatch()
  let params = useParams();

  const singleFood = item.filter(
    (data) => data.id == params.id
  )

  useEffect(()=>{
    if(item.length !== 0){
      setList(singleFood)
      setFound(true)
    }
  },[item])
  
  const addToCart = () => {
    //console.log('click')
    dispatch(addToCart(list[0]))
  }

  //let singleItem = item.items[id];
  //error on id is greater then length
  // useEffect(()=>{
  //   if(item.items.length < id){
  //     return setFound(false)
  //   }
  //     setFound(true)
  // },[singleItem])
  return (
    <div className="inventory__items">
      <h2 className="subtitle">Details Page</h2>
      {found &&
        <InventoryCard item={list[0]} addToCart={addToCart}/> 
      }
    </div>
  )
}

export default InventoryDetails
