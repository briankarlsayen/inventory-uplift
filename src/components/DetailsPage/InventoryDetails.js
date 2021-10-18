import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import InventorySummary from './InventorySummary';
import InventoryNotFound from './InventoryNotFound'
import InventoryCard from './InventoryCard'
function InventoryDetails({item, setItem, admin, logged}) {
  const [found, setFound] = useState(false)
  let params = useParams();
  const singleFood = item.filter(
    (data) => data.id == params.id
  )

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
      {/* {found ? 
        <InventorySummary item={singleItem} setItem={setItem} id={id} allItem={item} admin={admin} logged={logged}/> :
        <InventoryNotFound />
      } */}
      {/* <InventoryCard item={singleFood} /> */}
    </div>
  )
}

export default InventoryDetails
