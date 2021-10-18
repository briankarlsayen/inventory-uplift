import React, {useEffect, useState} from 'react'
import InventoryHomeFood from './InventoryHomeFood'
import SearchIcon from '../../icons/search-icon.svg'
import withLoading from '../../HOC/withLoading'
import userRestrict from '../../HOC/userRestrict'
import {randomCount, randomPrice} from '../foodParams'
import {useHistory} from 'react-router-dom'

function InventoryHome({filterList, setFilterList, foodList, setFoodList}) {
  const [search, setSearch] = useState('')
  const history = useHistory()
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
    let id = filterList[index].id
    history.push(`/home/${id}`)
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
      <div className="inventoryHome__searchBox">
        <input className="inventoryHome__search" placeholder="Search food" type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <img className="inventoryHome__icon" src={SearchIcon} alt="search icon" />
      </div>
      <div className="inventoryHome__items">
        {showFoods()}
      </div>
    </div>
  )
}

export default withLoading(InventoryHome)
