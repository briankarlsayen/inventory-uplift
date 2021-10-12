import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import InventorySummary from './InventorySummary';
import InventoryNotFound from './InventoryNotFound'

function InventoryDetails({item}) {
  const [found, setFound] = useState(false)
  let { id } = useParams();
  
  let singleItem = item.items[id];
  //error on id is greater then length
  useEffect(()=>{
    if(item.items.length < id){
      return setFound(false)
    }
      setFound(true)
  },[singleItem])
 
  return (
    <div className="inventory__items">
      {found ? 
        <InventorySummary item={singleItem} /> :
        <InventoryNotFound />
      }
    </div>
  )
}

export default InventoryDetails
