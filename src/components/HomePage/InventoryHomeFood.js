function InventoryHomeFood({food}) {
  return (
    <div className="inventoryHome__item">
      <img className="inventoryHomeItem__img" src={food.food.food.image} alt={food.food.food.label} />
      <p>name: {food.food.food.label}</p>
      <p>stock: {food.count}</p>
      <p>${food.price}</p>
      {/* <button className="inventoryHomeItem__btn">Click card to see more</button> */}
    </div>
  )
}

export default InventoryHomeFood
