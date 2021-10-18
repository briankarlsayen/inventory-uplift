import React, {useEffect, useState} from 'react'
import InventoryHomeFood from './InventoryHomeFood'

import withLoading from '../../HOC/withLoading'
import userRestrict from '../../HOC/userRestrict'
import {randomCount, randomPrice} from '../foodParams'


function InventoryHome({filterList, setFilterList, foodList, setFoodList}) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    list(foodList)
  }, [search])

  const list = (newList) => {
    const arr = newList
    const filtered = arr.filter(
      (data) => data.food.food.label?.toLowerCase().includes(search.toLowerCase())
    )
    
    setFilterList(filtered)
  }

  const clickHandler = (index) => {
    console.log(filterList[index])
  }

  const showFoods = () => {
    return(
      <>
      {filterList && filterList.map((data, index) => (
        <div onClick={()=> clickHandler(index)}>
          <InventoryHomeFood key={index} food={data} />
        </div>
      ))
      } 
      </>
    )
  }

  const getRandom = () => {
    console.log(randomCount())
  }

  return (
    <div className="inventory__home">
      <h2 className="subtitle">Homepage</h2>
      <button onClick={getRandom}>Generate</button>
      <input placeholder="Search food" type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <div className="inventoryHome__items">
        {showFoods()}
      </div>
    </div>
  )
}

export default withLoading(InventoryHome)
