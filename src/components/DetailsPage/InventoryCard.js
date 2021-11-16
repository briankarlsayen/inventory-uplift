import React, {useState} from 'react'
import CartIcon from '../../icons/cart-icon.svg'
import {useDispatch} from 'react-redux'
import {addCart} from '../../redux/reducers/cart-reducer';

function InventoryCard({item, addToCart}) {
  const dispatch = useDispatch()
  const clickHandler = () => {
      dispatch(addCart(item))
      console.log(item)
  }

  return (
    <div className="inventory__card">
      <img className="inventoryCard__img" src={item.food.food.image}/>
      <h4>Title: {item.food.food.label}</h4>
      <p>Price: ${item.price}</p>
      <p>Count: {item.count}</p>
      <p>Description: {item.food.food.category}</p>
      <p>Nutrients: </p>
      <p>Calories: {item.food.food.nutrients.ENERC_KCAL}kcal</p>
      <p>Fat: {item.food.food.nutrients.FAT}g</p>
      <p>Protein: {item.food.food.nutrients.PROCNT}g</p>
      <button className="inventoryCard__btn"  onClick={clickHandler}>
      <img className="inventoryCard__cart" src={CartIcon} alt="shopping cart icon" />
      Add to Cart
      </button>
    </div>
  )
}

export default InventoryCard
