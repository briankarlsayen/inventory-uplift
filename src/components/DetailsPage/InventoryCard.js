import React from 'react'
import CartIcon from '../../icons/cart-icon.svg'
function InventoryCard({item}) {
  console.log(item)
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
      <button className="inventoryCard__btn">
      <img className="inventoryCard__cart" src={CartIcon} alt="shopping cart icon" />
      Add to Cart
      </button>
    </div>
  )
}

export default InventoryCard
