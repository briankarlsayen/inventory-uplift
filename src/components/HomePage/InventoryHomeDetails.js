import React from 'react'

function InventoryHomeDetails({food}) {
  console.log({food})
  return (
    <div className="inventoryHome__item">
      <img className="inventoryHomeItem__img" src='https://www.simplyrecipes.com/thmb/F35HzR-D4g8nl9NKk6lNevsmebY=/2000x1334/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__03__HT-Make-Roast-Chicken-LEAD-5v2-51de85b6d52a4691885f9d6680d958b1.jpg' alt='' />
      <p>Chicken</p>
      <p>Stock: 3pcs</p>
      <p>$10</p>
      <div>
        <p>calorie: 215 kcal</p>
        <p>fat: 15.06g</p>
        <p>protein: 18.6g</p>
      </div>
      <button className="inventoryHomeItem__btn">Add to cart</button>
    </div>
  )
}

export default InventoryHomeDetails
