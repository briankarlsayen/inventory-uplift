function InventoryHomeFood({item}) {
  return (
    <div className="inventoryHome__item">
      <img className="inventoryHomeItem__img" src={item.image} alt={item.name} />
      {/* <p>name: {item.name}</p> */}
      {/* <p>stock: {food.count}</p> */}
      {/* <p>${item.buy_price}</p> */}
      {/* <button className="inventoryHomeItem__btn">Click card to see more</button> */}
    </div>
  )
}

export default InventoryHomeFood
