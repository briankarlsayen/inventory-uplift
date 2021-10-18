import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import InventorySummary from './InventorySummary';
import InventoryNotFound from './InventoryNotFound'
import InventoryCard from './InventoryCard'
function InventoryDetails({item, setItem, admin, logged}) {
  const [found, setFound] = useState(false)
  const [list, setList] = useState()

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
        <InventoryCard item={list[0]} /> 
      }
    </div>
  )
}

export default InventoryDetails
