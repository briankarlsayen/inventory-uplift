import React, {useEffect, useState} from 'react'
import InventoryHomeFood from './InventoryHomeFood'
import axios from 'axios'
import withLoading from '../../HOC/withLoading'
import userRestrict from '../../HOC/userRestrict'
import {randomCount, randomPrice} from '../foodParams'


function InventoryHome({item}) {
  const [search, setSearch] = useState('')
  const [foodList, setFoodList] = useState([])
  const [filterList, setFilterList] = useState()
  
  useEffect(()=>{
    getFood()
  }, [])

  const getFood = () => {
    axios.get('https://api.edamam.com/api/food-database/v2/parser?app_id=bde0ddf3&app_key=72b1a45c698dbe7fa574728ac9af4f9b&ingr=chicken')
    .then((res) => {
      // const filteredTodos = res.data.hints.filter(
      //   (food) => food.food.label.toLowerCase().includes(search.toLowerCase())
      // )
      // setFood(filteredTodos)
      const newArr = res.data.hints.map((data) => {
        return {food: data, count: randomCount(), price: randomPrice()}
      })
      setFilterList(newArr)
      setFoodList(newArr)
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    list(foodList)
  }, [search])

  const list = (newList) => {
    const arr = newList
    const filtered = arr.filter(
      (food) => food.food.label.toLowerCase().includes(search.toLowerCase())
    )
    setFilterList(filtered)
  }

  const showFoods = () => {
    return(
      <>
      {filterList && filterList.map((data, index) => (
        <InventoryHomeFood key={index} food={data} />
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
